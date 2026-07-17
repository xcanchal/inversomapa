import React, { useEffect, useMemo, useRef, useState } from "react";
import { UI, viewTree, viewRootHref, withBase } from "../data/taxonomy.js";

const ROW = 54, GAP = 56, PAD = 28, FONT_MAIN = 13.5, CHAR_W = 7.4;

function buildLayout(root, locale) {
  const nodes = [], edges = [];
  let leaf = 0;
  function visit(n, depth, parent) {
    const label = n.label[locale];
    const sub = n.sub ? n.sub[locale] : null;
    const w = Math.max(label.length * CHAR_W, sub ? sub.length * 6.1 : 0) + 30;
    const node = {
      slug: n.slug[locale], label, sub, desc: n.desc ? n.desc[locale] : null,
      depth, parent, w, h: sub ? 44 : 32,
    };
    if (n.children && n.children.length) {
      node.childNodes = n.children.map((c) => visit(c, depth + 1, node));
      const ys = node.childNodes.map((c) => c.y);
      node.y = (Math.min(...ys) + Math.max(...ys)) / 2;
    } else {
      node.y = leaf * ROW; leaf += 1;
    }
    nodes.push(node);
    if (parent) edges.push({ from: parent, to: node });
    return node;
  }
  visit(root, 0, null);
  const maxDepth = Math.max(...nodes.map((n) => n.depth));
  const colX = [PAD];
  for (let d = 0; d < maxDepth; d++) {
    const maxW = Math.max(...nodes.filter((n) => n.depth === d).map((n) => n.w));
    colX.push(colX[d] + maxW + GAP);
  }
  nodes.forEach((n) => (n.x = colX[n.depth]));
  const width = Math.max(...nodes.map((n) => n.x + n.w)) + PAD;
  const height = leaf * ROW + PAD * 2;
  nodes.forEach((n) => (n.y += PAD + ROW / 2));
  return { nodes, edges, width, height };
}

const C = {
  surface: "#FFFFFF", ink: "#182420", muted: "#5E6E66",
  line: "#D6DED9", green: "#17694B", greenDeep: "#0F5138",
};

/**
 * Static-navigation graph: clicking a node goes to its real URL.
 * props: locale ("ca"|"es"), view ("products"|"horizon"), selectedSlug
 */
export default function Graph({ locale, view = "products", selectedSlug = null, inlineDetails = false }) {
  const base = import.meta.env.BASE_URL;
  const [inlineSelectedSlug, setInlineSelectedSlug] = useState(null);
  const layout = useMemo(() => buildLayout(viewTree(view), locale), [locale, view]);
  const activeSelectedSlug = inlineDetails ? inlineSelectedSlug : selectedSlug;

  const trail = useMemo(() => {
    const set = new Set();
    let cur = layout.nodes.find((n) => n.slug === activeSelectedSlug) || null;
    while (cur) { set.add(cur.slug); cur = cur.parent; }
    return set;
  }, [layout, activeSelectedSlug]);

  const hrefFor = (n) => withBase(
    n.depth === 0 ? viewRootHref(view, locale) : `/${locale}/guia/${n.slug}/`,
    base
  );

  const scrollerRef = useRef(null);
  const drag = useRef(null);
  const suppressClick = useRef(false);
  const scrollKey = `graph-position:${view}`;

  const saveScrollPosition = () => {
    const el = scrollerRef.current;
    if (!el) return;
    try {
      sessionStorage.setItem(scrollKey, JSON.stringify({ left: el.scrollLeft, top: el.scrollTop }));
    } catch (e) {}
  };

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(scrollKey);
      if (!saved || !scrollerRef.current) return;
      const { left, top } = JSON.parse(saved);
      scrollerRef.current.scrollLeft = left;
      scrollerRef.current.scrollTop = top;
    } catch (e) {}
  }, [scrollKey]);

  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = scrollerRef.current;
    drag.current = {
      x: e.clientX, y: e.clientY,
      left: el.scrollLeft, top: el.scrollTop,
      id: e.pointerId, moved: false,
    };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const el = scrollerRef.current;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if (!d.moved && Math.abs(dx) + Math.abs(dy) > 4) {
      d.moved = true;
      el.setPointerCapture(d.id);
      if (e.pointerType === "mouse") el.style.cursor = "grabbing";
    }
    if (d.moved) {
      el.scrollLeft = d.left - dx;
      el.scrollTop = d.top - dy;
    }
  };
  const endDrag = () => {
    const d = drag.current;
    if (!d) return;
    if (d.moved) {
      suppressClick.current = true;
      scrollerRef.current.style.cursor = "grab";
    }
    drag.current = null;
  };
  const onClickCapture = (e) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const onNodeClick = (e, n) => {
    if (inlineDetails && n.depth !== 0) {
      e.preventDefault();
      setInlineSelectedSlug(n.slug);
      window.dispatchEvent(new CustomEvent("graph-node-select", { detail: n }));
      return;
    }
    saveScrollPosition();
  };

  return (
    <div ref={scrollerRef}
      style={{ overflow: "auto", height: "100%", padding: "8px 0 40px", cursor: "grab", touchAction: "none" }}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove}
      onPointerUp={endDrag} onPointerCancel={endDrag} onClickCapture={onClickCapture}>
      <svg width={layout.width} height={layout.height} role="img"
        aria-label={UI.ariaTree[locale]}
        style={{ display: "block", userSelect: "none" }}>
        {layout.edges.map(({ from, to }) => {
          const x1 = from.x + from.w, x2 = to.x, mx = (x1 + x2) / 2;
          const onTrail = trail.has(to.slug);
          return (
            <path key={to.slug}
              d={`M ${x1} ${from.y} C ${mx} ${from.y}, ${mx} ${to.y}, ${x2} ${to.y}`}
              fill="none" stroke={onTrail ? C.green : C.line}
              strokeWidth={onTrail ? 2 : 1.25} />
          );
        })}
        {layout.nodes.map((n) => {
          const isSel = activeSelectedSlug === n.slug;
          const onTrail = trail.has(n.slug);
          return (
            <a key={n.slug} href={hrefFor(n)} aria-label={n.label}
              onClick={(e) => onNodeClick(e, n)}>
              <g transform={`translate(${n.x}, ${n.y - n.h / 2})`} style={{ cursor: "pointer" }}>
                <rect width={n.w} height={n.h} rx={n.h / 2}
                  fill={isSel ? C.green : C.surface}
                  stroke={isSel ? C.greenDeep : onTrail ? C.green : C.line}
                  strokeWidth={isSel || onTrail ? 1.6 : 1} />
                <text x={15} y={n.sub ? 19 : n.h / 2 + FONT_MAIN / 2 - 2}
                  fontSize={FONT_MAIN} fontWeight={n.depth <= 1 ? 600 : 500}
                  fill={isSel ? "#fff" : C.ink}>{n.label}</text>
                {n.sub && (
                  <text x={15} y={34} fontSize={11}
                    fill={isSel ? "rgba(255,255,255,.75)" : C.muted}>{n.sub}</text>
                )}
              </g>
            </a>
          );
        })}
      </svg>
    </div>
  );
}
