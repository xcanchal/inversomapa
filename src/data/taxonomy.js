const T = (ca, es) => ({ ca, es });

export const withBase = (path, base = "/") =>
  `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

const UI = {
  title: T("Mapa de la inversió", "Mapa de la inversión"),
  tagline: T(
    "els productes d'inversió, d'un cop d'ull",
    "los productos de inversión, de un vistazo"
  ),
  bookCta: T("Aprèn a invertir", "Aprende a invertir"),
  bookTitle: "Invertir tus ahorros para Dummies",
  inCategory: T("Dins d'aquesta categoria", "Dentro de esta categoría"),
  dedicated: T("pàgina dedicada", "página dedicada"),
  close: T("Tanca el panell", "Cierra el panel"),
  ariaTree: T("Arbre de productes d'inversió", "Árbol de productos de inversión"),
  tip: T(
    "Fes clic a un node per saber-ne més · Arrossega per moure el mapa",
    "Haz clic en un nodo para saber más · Arrastra para mover el mapa"
  ),
  viewsLabel: T("Vistes del mapa", "Vistas del mapa"),
};

const TREE = {
  slug: T("productes-inversio", "productos-inversion"),
  label: T("Productes d'inversió", "Productos de inversión"),
  desc: T(
    "Mapa dels principals vehicles d'inversió disponibles per a un inversor particular. Cada branca agrupa productes amb un perfil de risc, liquiditat i fiscalitat diferents. Fes clic a qualsevol node per veure'n el detall.",
    "Mapa de los principales vehículos de inversión disponibles para un inversor particular. Cada rama agrupa productos con un perfil de riesgo, liquidez y fiscalidad distintos. Haz clic en cualquier nodo para ver el detalle."
  ),
  children: [
    {
      slug: T("accions", "acciones"),
      label: T("Accions", "Acciones"),
      sub: T("renda variable", "renta variable"),
      desc: T(
        "Participacions en la propietat d'una empresa cotitzada. El retorn ve de la revaloració del preu i dels dividends. És l'actiu amb més potencial de rendibilitat a llarg termini, i també amb més volatilitat a curt.",
        "Participaciones en la propiedad de una empresa cotizada. El retorno viene de la revalorización del precio y de los dividendos. Es el activo con más potencial de rentabilidad a largo plazo, y también con más volatilidad a corto."
      ),
      children: [
        {
          slug: T("accions-value", "acciones-value"),
          label: T("Value", "Value"),
          sub: T("valor", "valor"),
          desc: T(
            "Empreses que cotitzen per sota del seu valor intrínsec estimat: negocis madurs, fluxos de caixa estables i sovint dividend. L'aposta és que el mercat acabi reconeixent aquest valor.",
            "Empresas que cotizan por debajo de su valor intrínseco estimado: negocios maduros, flujos de caja estables y a menudo dividendo. La apuesta es que el mercado acabe reconociendo ese valor."
          ),
        },
        {
          slug: T("accions-growth", "acciones-growth"),
          label: T("Growth", "Growth"),
          sub: T("creixement", "crecimiento"),
          desc: T(
            "Empreses amb creixement d'ingressos molt per sobre de la mitjana, que reinverteixen beneficis en lloc de repartir dividend. Es paga un múltiple alt a canvi d'expectatives de futur.",
            "Empresas con crecimiento de ingresos muy por encima de la media, que reinvierten beneficios en lugar de repartir dividendo. Se paga un múltiplo alto a cambio de expectativas de futuro."
          ),
        },
        {
          slug: T("accions-blend", "acciones-blend"),
          label: T("Blend", "Blend"),
          sub: T("value + growth", "value + growth"),
          desc: T(
            "Estratègia mixta que combina posicions value i growth en una mateixa cartera, sense biaix marcat cap a cap dels dos estils. És l'aproximació per defecte de la majoria d'índexs amplis.",
            "Estrategia mixta que combina posiciones value y growth en una misma cartera, sin sesgo marcado hacia ninguno de los dos estilos. Es la aproximación por defecto de la mayoría de índices amplios."
          ),
        },
      ],
    },
    {
      slug: T("bons", "bonos"),
      label: T("Bons", "Bonos"),
      sub: T("renda fixa", "renta fija"),
      desc: T(
        "Préstecs a un emissor (estat o empresa) a canvi d'un interès pactat i la devolució del principal al venciment. 'Fixa' es refereix als fluxos promesos, no al preu: el valor de mercat d'un bo varia amb els tipus d'interès.",
        "Préstamos a un emisor (estado o empresa) a cambio de un interés pactado y la devolución del principal al vencimiento. 'Fija' se refiere a los flujos prometidos, no al precio: el valor de mercado de un bono varía con los tipos de interés."
      ),
      children: [
        {
          slug: T("deute-public", "deuda-publica"),
          label: T("Deute públic", "Deuda pública"),
          desc: T(
            "Emès per estats per finançar-se. A Espanya es subhasta a través del Tresor Públic i es pot comprar directament com a particular. Es classifica pel termini de venciment.",
            "Emitida por los estados para financiarse. En España se subasta a través del Tesoro Público y se puede comprar directamente como particular. Se clasifica por el plazo de vencimiento."
          ),
          children: [
            {
              slug: T("lletres-del-tresor", "letras-del-tesoro"),
              label: T("Lletres del Tresor", "Letras del Tesoro"),
              sub: T("< 2 anys", "< 2 años"),
              desc: T(
                "Deute públic a curt termini (3, 6, 9 i 12 mesos). S'emeten al descompte: compres per sota del nominal i cobres el nominal al venciment. Producte estrella quan pugen els tipus d'interès.",
                "Deuda pública a corto plazo (3, 6, 9 y 12 meses). Se emiten al descuento: compras por debajo del nominal y cobras el nominal al vencimiento. Producto estrella cuando suben los tipos de interés."
              ),
            },
            {
              slug: T("bons-de-lestat", "bonos-del-estado"),
              label: T("Bons de l'Estat", "Bonos del Estado"),
              sub: T("2–5 anys", "2–5 años"),
              desc: T(
                "Deute públic a mitjà termini amb cupó anual explícit. Més sensibilitat als tipus que les lletres, però encara moderada.",
                "Deuda pública a medio plazo con cupón anual explícito. Más sensibilidad a los tipos que las letras, pero todavía moderada."
              ),
            },
            {
              slug: T("obligacions-de-lestat", "obligaciones-del-estado"),
              label: T("Obligacions de l'Estat", "Obligaciones del Estado"),
              sub: T("> 5 anys", "> 5 años"),
              desc: T(
                "Deute públic a llarg termini (10, 15, 30 anys) amb cupó anual. La duració elevada les fa molt sensibles als moviments de tipus: poden comportar-se gairebé com renda variable en preu.",
                "Deuda pública a largo plazo (10, 15, 30 años) con cupón anual. Su duración elevada las hace muy sensibles a los movimientos de tipos: pueden comportarse casi como renta variable en precio."
              ),
            },
          ],
        },
        {
          slug: T("deute-privat", "deuda-privada"),
          label: T("Deute privat", "Deuda privada"),
          sub: T("empreses", "empresas"),
          desc: T(
            "Bons corporatius: deute emès per empreses. Paguen més interès que el deute públic equivalent per compensar el risc de crèdit de l'emissor, des d'investment grade fins a high yield.",
            "Bonos corporativos: deuda emitida por empresas. Pagan más interés que la deuda pública equivalente para compensar el riesgo de crédito del emisor, desde investment grade hasta high yield."
          ),
        },
      ],
    },
    {
      slug: T("fons", "fondos"),
      label: T("Fons", "Fondos"),
      desc: T(
        "Institucions d'inversió col·lectiva: molts partícips aporten diners a un patrimoni comú gestionat per una gestora. A Espanya tenen un avantatge fiscal clau: el traspàs entre fons no tributa fins al reemborsament final.",
        "Instituciones de inversión colectiva: muchos partícipes aportan dinero a un patrimonio común gestionado por una gestora. En España tienen una ventaja fiscal clave: el traspaso entre fondos no tributa hasta el reembolso final."
      ),
      children: [
        {
          slug: T("fons-segons-actius", "fondos-segun-activos"),
          label: T("Segons els actius", "Según los activos"),
          desc: T(
            "Classificació CNMV segons la composició de la cartera del fons: de menys a més exposició a renda variable, i per tant de menys a més risc esperat.",
            "Clasificación CNMV según la composición de la cartera del fondo: de menos a más exposición a renta variable, y por tanto de menos a más riesgo esperado."
          ),
          children: [
            {
              slug: T("fons-monetaris", "fondos-monetarios"),
              label: T("Monetaris", "Monetarios"),
              desc: T(
                "Inverteixen en actius de deute a molt curt termini i alta qualitat creditícia. Volatilitat mínima: són l'alternativa de mercat als dipòsits i comptes remunerats.",
                "Invierten en activos de deuda a muy corto plazo y alta calidad crediticia. Volatilidad mínima: son la alternativa de mercado a los depósitos y cuentas remuneradas."
              ),
            },
            {
              slug: T("fons-renda-fixa", "fondos-renta-fija"),
              label: T("Renda fixa", "Renta fija"),
              desc: T(
                "Cartera composta íntegrament per bons (públics o privats). El risc principal és la duració: com més llarg el venciment mitjà, més sensibilitat als tipus.",
                "Cartera compuesta íntegramente por bonos (públicos o privados). El riesgo principal es la duración: cuanto más largo el vencimiento medio, más sensibilidad a los tipos."
              ),
            },
            {
              slug: T("fons-renda-fixa-mixta", "fondos-renta-fija-mixta"),
              label: T("Renda fixa mixta", "Renta fija mixta"),
              sub: T("majoritàriament renda fixa", "mayoritariamente renta fija"),
              desc: T(
                "Fins a un 30% en renda variable i la resta en bons. Perfil conservador amb una mica de motor de creixement.",
                "Hasta un 30% en renta variable y el resto en bonos. Perfil conservador con algo de motor de crecimiento."
              ),
            },
            {
              slug: T("fons-renda-variable-mixta", "fondos-renta-variable-mixta"),
              label: T("Renda variable mixta", "Renta variable mixta"),
              sub: T("majoritàriament renda variable", "mayoritariamente renta variable"),
              desc: T(
                "Entre un 30% i un 75% en accions. Perfil moderat-dinàmic: assumeix més volatilitat a canvi de més rendibilitat esperada.",
                "Entre un 30% y un 75% en acciones. Perfil moderado-dinámico: asume más volatilidad a cambio de más rentabilidad esperada."
              ),
            },
            {
              slug: T("fons-renda-variable", "fondos-renta-variable"),
              label: T("Renda variable", "Renta variable"),
              sub: T("> 75% variable", "> 75% variable"),
              desc: T(
                "Més del 75% de la cartera en accions. Aquí hi viuen els fons indexats globals tipus MSCI World: màxim potencial a llarg termini, màxima volatilitat pel camí.",
                "Más del 75% de la cartera en acciones. Aquí viven los fondos indexados globales tipo MSCI World: máximo potencial a largo plazo, máxima volatilidad por el camino."
              ),
            },
            {
              slug: T("fons-garantits", "fondos-garantizados"),
              label: T("Garantits", "Garantizados"),
              desc: T(
                "Garanteixen tot o part del capital a una data concreta, a canvi de rendibilitats normalment baixes i finestres de liquiditat restringides. La garantia només val si mantens fins al venciment.",
                "Garantizan todo o parte del capital a una fecha concreta, a cambio de rentabilidades normalmente bajas y ventanas de liquidez restringidas. La garantía solo vale si mantienes hasta el vencimiento."
              ),
            },
          ],
        },
        {
          slug: T("fons-distribucio", "fondos-distribucion"),
          label: T("Política de distribució", "Política de distribución"),
          desc: T(
            "Què fa el fons amb els dividends i cupons que cobra dels seus actius: repartir-los o reinvertir-los.",
            "Qué hace el fondo con los dividendos y cupones que cobra de sus activos: repartirlos o reinvertirlos."
          ),
          children: [
            {
              slug: T("fons-de-distribucio", "fondos-de-distribucion"),
              label: T("Distribució", "Distribución"),
              sub: T("pagament dels dividends", "pago de los dividendos"),
              desc: T(
                "Reparteix periòdicament els dividends als partícips. Genera renda corrent, però cada pagament tributa a l'IRPF de l'any en curs.",
                "Reparte periódicamente los dividendos a los partícipes. Genera renta corriente, pero cada pago tributa en el IRPF del año en curso."
              ),
            },
            {
              slug: T("fons-dacumulacio", "fondos-de-acumulacion"),
              label: T("Acumulació", "Acumulación"),
              sub: T("reinversió dels dividends", "reinversión de los dividendos"),
              desc: T(
                "Reinverteix automàticament els dividends dins del fons. Difereix la tributació i maximitza l'interès compost: l'opció habitual per a llarg termini.",
                "Reinvierte automáticamente los dividendos dentro del fondo. Difiere la tributación y maximiza el interés compuesto: la opción habitual para el largo plazo."
              ),
            },
          ],
        },
        {
          slug: T("fons-altres", "fondos-otras-categorias"),
          label: T("Altres categories", "Otras categorías"),
          desc: T(
            "Categories transversals de la classificació CNMV que no encaixen en l'eix renda fixa / renda variable.",
            "Categorías transversales de la clasificación CNMV que no encajan en el eje renta fija / renta variable."
          ),
          children: [
            {
              slug: T("fons-globals", "fondos-globales"),
              label: T("Globals", "Globales"),
              desc: T(
                "Fons sense una política d'inversió definida amb precisió: el gestor té llibertat per moure's entre actius, zones i divises. Cal mirar la cartera real, no la categoria.",
                "Fondos sin una política de inversión definida con precisión: el gestor tiene libertad para moverse entre activos, zonas y divisas. Hay que mirar la cartera real, no la categoría."
              ),
            },
            {
              slug: T("fons-de-fons", "fondos-de-fondos"),
              label: T("De fons", "De fondos"),
              desc: T(
                "Inverteixen majoritàriament en participacions d'altres fons. Diversificació immediata a canvi d'una doble capa de comissions.",
                "Invierten mayoritariamente en participaciones de otros fondos. Diversificación inmediata a cambio de una doble capa de comisiones."
              ),
            },
            {
              slug: T("fons-inversio-lliure", "fondos-inversion-libre"),
              label: T("Inversió lliure", "Inversión libre"),
              desc: T(
                "Els hedge funds espanyols (FIL): sense les restriccions de diversificació dels fons tradicionals, amb inversió mínima elevada i liquiditat limitada. Només per a inversors qualificats o informats.",
                "Los hedge funds españoles (FIL): sin las restricciones de diversificación de los fondos tradicionales, con inversión mínima elevada y liquidez limitada. Solo para inversores cualificados o informados."
              ),
            },
            {
              slug: T("fons-retorn-absolut", "fondos-retorno-absoluto"),
              label: T("Retorn absolut", "Retorno absoluto"),
              desc: T(
                "Persegueixen rendibilitat positiva en qualsevol entorn de mercat, amb objectius de volatilitat controlada. L'objectiu no és cap garantia: molts no el compleixen.",
                "Persiguen rentabilidad positiva en cualquier entorno de mercado, con objetivos de volatilidad controlada. El objetivo no es ninguna garantía: muchos no lo cumplen."
              ),
            },
            {
              slug: T("fons-no-cotitzats", "fondos-valores-no-cotizados"),
              label: T("En valors no cotitzats", "En valores no cotizados"),
              desc: T(
                "Inverteixen en empreses que no cotitzen en borsa (private equity). Il·líquids per naturalesa i amb horitzons llargs.",
                "Invierten en empresas que no cotizan en bolsa (private equity). Ilíquidos por naturaleza y con horizontes largos."
              ),
            },
          ],
        },
      ],
    },
    {
      slug: T("immobiliaria", "inmobiliaria"),
      label: T("Immobiliària", "Inmobiliaria"),
      desc: T(
        "Inversió en actius immobiliaris, sigui directament (comprar un immoble) o a través de vehicles cotitzats que et donen exposició al sector sense gestionar propietats.",
        "Inversión en activos inmobiliarios, ya sea directamente (comprar un inmueble) o a través de vehículos cotizados que te dan exposición al sector sin gestionar propiedades."
      ),
      children: [
        {
          slug: T("immobles", "inmuebles"),
          label: T("Immobles", "Inmuebles"),
          desc: T(
            "Compra directa per llogar o revendre. Permet palanquejament hipotecari i control total, a canvi de concentració de risc, gestió activa i molt poca liquiditat.",
            "Compra directa para alquilar o revender. Permite apalancamiento hipotecario y control total, a cambio de concentración de riesgo, gestión activa y muy poca liquidez."
          ),
        },
        {
          slug: T("socimis-reits", "socimis-reits"),
          label: T("Fons immobiliaris", "Fondos inmobiliarios"),
          sub: T("SOCIMIs, REITs", "SOCIMIs, REITs"),
          desc: T(
            "Societats cotitzades que posseeixen i gestionen immobles en lloguer, obligades a repartir la major part del benefici en dividends. Exposició immobiliària amb liquiditat de borsa.",
            "Sociedades cotizadas que poseen y gestionan inmuebles en alquiler, obligadas a repartir la mayor parte del beneficio en dividendos. Exposición inmobiliaria con liquidez de bolsa."
          ),
        },
      ],
    },
    {
      slug: T("etfs", "etfs"),
      label: T("ETFs", "ETFs"),
      desc: T(
        "Fons cotitzats: combinen la diversificació d'un fons amb la negociació en temps real d'una acció. Comissions habitualment molt baixes. A Espanya, a diferència dels fons, no gaudeixen del traspàs sense tributar.",
        "Fondos cotizados: combinan la diversificación de un fondo con la negociación en tiempo real de una acción. Comisiones habitualmente muy bajas. En España, a diferencia de los fondos, no disfrutan del traspaso sin tributar."
      ),
      children: [
        {
          slug: T("etfs-renda-variable", "etfs-renta-variable"),
          label: T("ETFs de renda variable", "ETFs de renta variable"),
          desc: T(
            "Repliquen índexs d'accions (S&P 500, MSCI World, sectorials). La via més barata d'indexar-se a la borsa mundial.",
            "Replican índices de acciones (S&P 500, MSCI World, sectoriales). La vía más barata de indexarse a la bolsa mundial."
          ),
        },
        {
          slug: T("etfs-renda-fixa", "etfs-renta-fija"),
          label: T("ETFs de renda fixa", "ETFs de renta fija"),
          desc: T(
            "Repliquen cistelles de bons per tipus d'emissor, venciment o qualitat creditícia. Donen liquiditat intradia a un actiu que de forma individual és poc líquid.",
            "Replican cestas de bonos por tipo de emisor, vencimiento o calidad crediticia. Dan liquidez intradía a un activo que de forma individual es poco líquido."
          ),
        },
        {
          slug: T("etfs-immobiliaris", "etfs-inmobiliarios"),
          label: T("ETFs immobiliaris", "ETFs inmobiliarios"),
          desc: T(
            "Cistelles diversificades de REITs i SOCIMIs de diferents països. Exposició immobiliària global amb una sola posició.",
            "Cestas diversificadas de REITs y SOCIMIs de distintos países. Exposición inmobiliaria global con una sola posición."
          ),
        },
        {
          slug: T("etfs-materies-primeres", "etfs-materias-primas"),
          label: T("ETFs de matèries primeres", "ETFs de materias primas"),
          desc: T(
            "Exposició a or, petroli o cistelles de commodities, via físic o futurs. Atenció al contango en els de futurs: el cost de rolar contractes pot erosionar el retorn.",
            "Exposición a oro, petróleo o cestas de commodities, vía físico o futuros. Atención al contango en los de futuros: el coste de rolar contratos puede erosionar el retorno."
          ),
        },
      ],
    },
  ],
};

/**
 * Second view over the same products: grouped by the horizon they're usually
 * held for. Groups reference products by id (their Catalan slug) instead of
 * redefining them, so a product always has exactly one canonical page.
 */
const HORIZON = {
  slug: T("horitzo-temporal", "horizonte-temporal"),
  label: T("Segons l'horitzó temporal", "Según el horizonte temporal"),
  desc: T(
    "Una segona manera de llegir el mapa: no què és cada producte, sinó per a quan té sentit. L'horitzó és el temps que pots deixar els diners invertits sense necessitar-los, i és el que determina quanta volatilitat et pots permetre pel camí. És un criteri orientatiu i habitual, no una regla: molts productes es mouen entre horitzons segons la seva duració o el subjacent.",
    "Una segunda manera de leer el mapa: no qué es cada producto, sino para cuándo tiene sentido. El horizonte es el tiempo que puedes dejar el dinero invertido sin necesitarlo, y es lo que determina cuánta volatilidad te puedes permitir por el camino. Es un criterio orientativo y habitual, no una regla: muchos productos se mueven entre horizontes según su duración o el subyacente."
  ),
  children: [
    {
      slug: T("curt-termini", "corto-plazo"),
      label: T("Curt termini", "Corto plazo"),
      sub: T("< 2 anys", "< 2 años"),
      desc: T(
        "Diners que necessitaràs aviat: el fons d'emergència, l'entrada d'un pis, un projecte amb data. Aquí l'objectiu no és guanyar, és no perdre: prioritzes liquiditat i estabilitat del principal per sobre de la rendibilitat. La volatilitat que a llarg termini és soroll, a curt és el risc real de veure't obligat a vendre en pèrdues.",
        "Dinero que necesitarás pronto: el fondo de emergencia, la entrada de un piso, un proyecto con fecha. Aquí el objetivo no es ganar, es no perder: priorizas liquidez y estabilidad del principal por encima de la rentabilidad. La volatilidad que a largo plazo es ruido, a corto es el riesgo real de verte obligado a vender en pérdidas."
      ),
      refs: [
        "lletres-del-tresor",
        { id: "fons-monetaris", label: T("Fons monetaris", "Fondos monetarios") },
      ],
    },
    {
      slug: T("mitja-termini", "medio-plazo"),
      label: T("Mitjà termini", "Medio plazo"),
      sub: T("2–7 anys", "2–7 años"),
      desc: T(
        "Objectius amb data aproximada però sense urgència. Pots assumir oscil·lacions moderades a canvi de batre la inflació, però no tens temps de recuperar-te d'una caiguda forta de borsa. És el territori dels bons mantinguts fins al venciment i de les carteres mixtes, on l'equilibri importa més que el màxim potencial.",
        "Objetivos con fecha aproximada pero sin urgencia. Puedes asumir oscilaciones moderadas a cambio de batir la inflación, pero no tienes tiempo de recuperarte de una caída fuerte de bolsa. Es el territorio de los bonos mantenidos hasta el vencimiento y de las carteras mixtas, donde el equilibrio importa más que el máximo potencial."
      ),
      refs: [
        "bons-de-lestat",
        "deute-privat",
        { id: "fons-renda-fixa", label: T("Fons de renda fixa", "Fondos de renta fija") },
        {
          id: "fons-renda-fixa-mixta",
          label: T("Fons de renda fixa mixta", "Fondos de renta fija mixta"),
        },
        { id: "fons-garantits", label: T("Fons garantits", "Fondos garantizados") },
        "etfs-renda-fixa",
      ],
    },
    {
      slug: T("llarg-termini", "largo-plazo"),
      label: T("Llarg termini", "Largo plazo"),
      sub: T("> 7 anys", "> 7 años"),
      desc: T(
        "Diners que no tocaràs en molts anys: jubilació, patrimoni, herència. El temps converteix la volatilitat en soroll estadístic i deixa treballar l'interès compost, així que la renda variable passa a ser l'opció raonable. Aquí el risc real deixa de ser la caiguda del mercat i passa a ser la inflació i quedar-se fora.",
        "Dinero que no tocarás en muchos años: jubilación, patrimonio, herencia. El tiempo convierte la volatilidad en ruido estadístico y deja trabajar al interés compuesto, así que la renta variable pasa a ser la opción razonable. Aquí el riesgo real deja de ser la caída del mercado y pasa a ser la inflación y quedarse fuera."
      ),
      refs: [
        "accions",
        "obligacions-de-lestat",
        {
          id: "fons-renda-variable-mixta",
          label: T("Fons de renda variable mixta", "Fondos de renta variable mixta"),
        },
        {
          id: "fons-renda-variable",
          label: T("Fons de renda variable", "Fondos de renta variable"),
        },
        "etfs-renda-variable",
        "immobles",
        "socimis-reits",
        "etfs-immobiliaris",
        {
          id: "fons-no-cotitzats",
          label: T("Fons en valors no cotitzats", "Fondos en valores no cotizados"),
        },
      ],
    },
  ],
};

export { T, UI, TREE, HORIZON };

const other = (l) => (l === "ca" ? "es" : "ca");

/** Every node of the product tree, keyed by a stable id: its Catalan slug. */
const BY_ID = (() => {
  const m = new Map();
  (function visit(n) {
    m.set(n.slug.ca, n);
    (n.children || []).forEach(visit);
  })(TREE);
  return m;
})();

/**
 * A ref is a product id, or {id, label} when the product's own label only reads
 * unambiguously under its parent ("Monetaris" → "Fons monetaris" out here).
 */
function resolveRef(ref, groupSlug) {
  const id = typeof ref === "string" ? ref : ref.id;
  const p = BY_ID.get(id);
  if (!p) throw new Error(`taxonomy: "${groupSlug}" references unknown product "${id}"`);
  return { ...p, label: typeof ref === "string" ? p.label : ref.label };
}

/**
 * Horizon groups resolved to leaves that carry the product's own slug, so every
 * link out of this view lands on the canonical /guia/ page. Deliberately shallow:
 * the groups list products, they don't re-nest the product tree under them.
 */
const HORIZON_TREE = {
  ...HORIZON,
  children: HORIZON.children.map((g) => ({
    ...g,
    children: g.refs.map((ref) => {
      const p = resolveRef(ref, g.slug.ca);
      return { slug: p.slug, label: p.label, sub: p.sub, desc: p.desc };
    }),
  })),
};

const VIEW_TREES = { products: TREE, horizon: HORIZON_TREE };

export const VIEWS = [
  { id: "products", label: T("Segons el producte", "Según el producto") },
  { id: "horizon", label: T("Segons l'horitzó", "Según el horizonte") },
];

export const viewTree = (view) => VIEW_TREES[view] || TREE;

export const viewRootHref = (view, locale) =>
  view === "horizon" ? `/${locale}/${HORIZON.slug[locale]}/` : `/${locale}/`;

const productHref = (locale, slug) => `/${locale}/guia/${slug}/`;

/**
 * Flat list of every page under /guia/: the product tree (canonical, minus the
 * root) plus the horizon groups. Products referenced by a group are not
 * re-emitted — they already have a page from the product tree.
 */
export function flatten(locale) {
  const out = [];
  (function visit(n, ancestors) {
    if (ancestors.length > 0) {
      out.push({
        view: "products",
        slug: n.slug[locale],
        altSlug: n.slug[other(locale)],
        label: n.label[locale],
        sub: n.sub ? n.sub[locale] : null,
        desc: n.desc[locale],
        breadcrumb: ancestors.map((a) => ({
          label: a.label[locale],
          href: a === TREE ? `/${locale}/` : productHref(locale, a.slug[locale]),
        })),
        children: (n.children || []).map((c) => ({
          slug: c.slug[locale],
          label: c.label[locale],
        })),
      });
    }
    (n.children || []).forEach((c) => visit(c, [...ancestors, n]));
  })(TREE, []);

  HORIZON.children.forEach((g) => {
    out.push({
      view: "horizon",
      slug: g.slug[locale],
      altSlug: g.slug[other(locale)],
      label: g.label[locale],
      sub: g.sub ? g.sub[locale] : null,
      desc: g.desc[locale],
      breadcrumb: [
        { label: HORIZON.label[locale], href: viewRootHref("horizon", locale) },
      ],
      children: g.refs.map((ref) => {
        const p = resolveRef(ref, g.slug.ca);
        return { slug: p.slug[locale], label: p.label[locale] };
      }),
    });
  });

  return out;
}

export function rootInfo(locale, view = "products") {
  const root = viewTree(view);
  return {
    slug: root.slug[locale],
    altSlug: root.slug[other(locale)],
    label: root.label[locale],
    desc: root.desc[locale],
    children: root.children.map((c) => ({
      slug: c.slug[locale],
      label: c.label[locale],
    })),
  };
}
