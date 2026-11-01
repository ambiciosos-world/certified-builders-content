// Week of 2026-11-05 → 2026-11-11. All names, accounts and amounts are made up.
// Weeks 1–2 learning: reels that show the bot working (chat demo) held viewers
// ~3x longer than text-only reels, and "Mito vs. realidad" was the most-viewed
// carousel. So: every reel here is a bot demo, plus a myth-vs-reality part 2.
const EN = { msgBox: "Message", typing: "typing…", sub: "bot" };
const ES = { msgBox: "Mensaje", typing: "escribiendo…", sub: "bot" };
const endEN = { tag: "AI audit of your 3 credit reports<br>+ dispute letters with Metro 2 rules", per: "one-time", cta: "Link in bio 👆", fine: "Sample data shown. Results vary and aren't guaranteed." };
const endES = { tag: "Auditoría con IA de tus 3 reportes<br>+ cartas de disputa con reglas Metro 2", per: "un solo pago", cta: "Link en la bio 👆", fine: "Datos de ejemplo. Los resultados varían y no están garantizados." };
const carES = { swipe: "Desliza →", foot: "Datos de ejemplo · Contenido educativo" };
const carEN = { swipe: "Swipe →", foot: "Sample data · Educational content" };
const ctaES = { type: "cta", per: "un solo pago", cta: "Link en la bio 👆" };
const ctaEN = { type: "cta", per: "one-time", cta: "Link in bio 👆" };

export const posts = [
  {
    id: "pov-late-payment", date: "2026-11-05", time: "10:00", kind: "reel", lang: "en", musicAt: 15, coverAt: 0.8,
    previewAt: [1, 4, 8, 13],
    spec: { ...EN, duration: 14, scenes: [
      { type: "text", t0: 0, t1: 2.6, kicker: "POV", lines: ["A late payment", "you <b>don't remember</b>", "shows up 🤨"] },
      { type: "chat", t0: 2.6, t1: 10.2, typing: [[3.6, 5.2]], caps: [[2.6, 5.2, "So you ask the bot to <b>check it</b>"], [5.2, 10.2, "It shows <b>what doesn't add up</b> 🚩"]],
        msgs: [
          { at: 2.8, out: true, file: ["Experian.pdf", "1.9 MB"] },
          { at: 5.3, html: `📊 <strong>Payment history check</strong>
            <div class="flag">🚩 <strong>BLUE RIDGE AUTO (…3318) · Experian</strong><div class="why">Status says “paid as agreed” but shows 30 days late in 05/2025</div></div>
            <div class="flag">🚩 <strong>Doesn't match other bureaus</strong><div class="why">Equifax and TransUnion show 05/2025 as on time</div></div>`, kb: ["✉️ Generate my letters"], tapAt: 8.2 },
          { at: 9.0, file: ["Experian-round-1.pdf", "36 KB"] },
        ] },
      { type: "end", t0: 10.2, ...endEN },
    ] },
    caption: `POV: a late payment you don't remember shows up on one report 🤨 Our bot compares your payment history across all 3 bureaus, flags what doesn't match under Metro 2 rules and writes the dispute letter.

$50 one-time.

Sample data shown. Results vary. Not legal advice.

#creditreport #metro2 #creditdispute #personalfinance #financialliteracy

Link in bio 👆`,
  },
  {
    id: "mito-realidad-2", date: "2026-11-06", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "MITO VS. REALIDAD · PARTE 2", title: "4 mitos más sobre tu <b>crédito</b>", text: "La parte 1 fue de las más vistas. Aquí van 4 más 👀" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Cerrar una tarjeta vieja siempre ayuda.", real: "No siempre. <span>Puede bajar tu crédito disponible y subir el porcentaje que usas.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Si pago una colección, desaparece del reporte.", real: "No necesariamente. <span>Normalmente se actualiza como pagada, pero puede seguir apareciendo.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Ganar más dinero sube mi puntaje.", real: "Falso. <span>Tu ingreso no aparece en tu reporte de crédito.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Al casarme, mi crédito se junta con el de mi pareja.", real: "Falso. <span>Cada persona tiene su propio reporte. Solo las cuentas conjuntas aparecen en los dos.</span>" },
      { ...ctaES, title: "Saber qué es real te ahorra <b>tiempo</b>", text: "Nuestro bot compara tus 3 reportes con IA, marca posibles errores Metro 2 y escribe tus cartas." },
    ] },
    caption: `Mito vs. realidad, parte 2 👀 ¿Cuál de estos creías? Comenta el número 👇 y guarda el post 📌

Nuestro bot audita tus 3 reportes con IA y te escribe las cartas de disputa. $50, un solo pago.

Contenido educativo, no es asesoría legal. Los resultados varían.

#credito #mitosyrealidades #reportedecredito #educacionfinanciera #latinosenusa

Link en la bio 👆`,
  },
  {
    id: "revisar-cuentas", date: "2026-11-07", time: "10:00", kind: "reel", lang: "es", musicAt: 50, coverAt: 0.8,
    previewAt: [1, 4.5, 8.5, 13],
    spec: { ...ES, duration: 14, scenes: [
      { type: "text", t0: 0, t1: 2.6, lines: ["El bot no solo marca errores…", "<b>te explica el porqué</b> 🧠"] },
      { type: "chat", t0: 2.6, t1: 10.4, typing: [[5.0, 5.8]], caps: [[2.6, 5.8, "Tocas <b>Revisar cuentas</b>"], [5.8, 10.4, "…y ves la <b>regla Metro 2</b> detrás de cada una"]],
        msgs: [
          { at: 2.8, html: "📊 <strong>Auditoría completa</strong> · 🚩 2 cuentas con posibles errores de reporte.", kb: ["✉️ Generar mis cartas", "📝 Revisar cuentas"], tapAt: 4.2, tapIdx: 1 },
          { at: 5.9, html: `🔎 <strong>PINE STREET LENDING (…4402) · TransUnion</strong><br>Estado: Pagada y cerrada · Balance: <strong>$740</strong>
            <div class="flag">📘 <strong>Por qué es un posible error</strong><div class="why">Según Metro 2, una cuenta reportada como pagada o cerrada debe mostrar un balance actual de $0.</div></div>`, kb: ["✅ Incluir en la carta", "⏭️ Siguiente cuenta"] },
        ] },
      { type: "end", t0: 10.4, ...endES },
    ] },
    caption: `El bot no solo marca posibles errores de reporte: te explica la regla Metro 2 detrás de cada uno 🧠 Así sabes exactamente qué estás disputando y por qué.

Audita tus 3 reportes con IA y escribe tus cartas. $50, un solo pago.

Datos de ejemplo. Los resultados varían. No es asesoría legal.

#credito #reportedecredito #metro2 #cartadedisputa #educacionfinanciera

Link en la bio 👆`,
  },
  {
    id: "utilization-explained", date: "2026-11-08", time: "10:00", kind: "carousel", lang: "en",
    spec: { ...carEN, slides: [
      { type: "cover", kicker: "CREDIT 101", title: "Credit utilization, <b>explained</b>", text: "One of the biggest factors in most credit scores. Save this 📌" },
      { type: "point", num: "01", title: "What it is", text: "The share of your available credit card limits that you're using.",
        card: `<div class="lbl">SAMPLE</div>Balance $1,500 ÷ Limit $5,000<br>= <span class="ok">30% utilization</span>` },
      { type: "point", num: "02", title: "Lower is usually better", text: "Most scoring models see lower utilization as a positive sign." },
      { type: "point", num: "03", title: "It's based on what's reported", text: "Lenders usually report your <strong>statement balance</strong>, so it can change month to month." },
      { type: "point", num: "04", title: "Check the limits", text: "A limit reported as $0 or lower than it really is can make utilization look much higher. That's worth checking on all 3 reports.",
        card: `<div class="lbl">SAMPLE · LAKESIDE BANK …7720</div>Equifax &nbsp;limit $3,000<br>Experian limit <span class="bad">$0</span>` },
      { ...ctaEN, title: "Does every limit <b>match?</b>", text: "Our bot compares all 3 reports with AI, flags possible Metro 2 errors and drafts your dispute letters." },
    ] },
    caption: `Credit utilization in 4 slides 📊 What it is, why lower usually helps, and why a wrong credit limit on your report is worth checking 👀 Save this 📌

Our bot compares your 3 reports with AI and writes the dispute letters. $50 one-time.

Sample data. Educational content, not legal advice. Results vary.

#creditutilization #creditreport #credit101 #financialliteracy #personalfinance

Link in bio 👆`,
  },
  {
    id: "wrong-limit-demo", date: "2026-11-09", time: "10:00", kind: "reel", lang: "en", musicAt: 100, coverAt: 0.8,
    previewAt: [1, 4.5, 8.5, 13],
    spec: { ...EN, duration: 14, scenes: [
      { type: "text", t0: 0, t1: 2.6, lines: ["Watch the bot catch a", "<b>$0 credit limit</b> 👀"] },
      { type: "chat", t0: 2.6, t1: 10.2, typing: [[3.4, 5.0]], caps: [[2.6, 5.0, "Same card, <b>3 bureaus</b>"], [5.0, 10.2, "One reports the limit as <b>$0</b> 🚩"]],
        msgs: [
          { at: 2.8, out: true, html: "Can you check my card limits?" },
          { at: 5.1, html: `⚖️ <strong>Cross-bureau check</strong> · LAKESIDE BANK (…7720)<br>Equifax: $3,000 · TransUnion: $3,000 · Experian: <strong>$0</strong>
            <div class="flag">🚩 <strong>Credit limit doesn't match</strong><div class="why">A $0 limit can make utilization look like 100%+</div></div>`, kb: ["✉️ Generate my letters"], tapAt: 8.0 },
          { at: 8.9, file: ["Experian-round-1.pdf", "34 KB"] },
        ] },
      { type: "end", t0: 10.2, ...endEN },
    ] },
    caption: `Same card, 3 bureaus, one says the limit is $0 👀 A wrong limit can make utilization look way higher than it is. Our bot compares every account across Equifax, Experian and TransUnion and writes the dispute letter.

$50 one-time.

Sample data shown. Results vary. Not legal advice.

#creditreport #creditutilization #metro2 #creditdispute #financialliteracy

Link in bio 👆`,
  },
  {
    id: "glosario", date: "2026-11-10", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "GLOSARIO", title: "6 palabras de tu reporte que <b>debes entender</b>", text: "Guárdalo para cuando revises los tuyos 📌" },
      { type: "point", title: "Cuenta castigada (charge-off)", text: "El acreedor dio la deuda por pérdida en sus libros. <strong>No significa que se borró</strong>." },
      { type: "point", title: "Colección", text: "La cuenta pasó a una agencia de cobro. Revisa que no aparezca duplicada con la cuenta original." },
      { type: "point", title: "DOFD", text: "Fecha de primera morosidad. Marca cuánto tiempo puede quedarse una cuenta negativa (generalmente hasta 7 años)." },
      { type: "point", title: "Consulta dura", text: "Aparece cuando solicitas crédito. Revisar tu propio reporte <strong>no</strong> es una consulta dura." },
      { type: "point", title: "Utilización y tradeline", text: "<strong>Utilización:</strong> el porcentaje de tus límites que usas. <strong>Tradeline:</strong> cada cuenta en tu reporte." },
      { ...ctaES, title: "Entender tu reporte es <b>el primer paso</b>", text: "Nuestro bot lo audita con IA, marca posibles errores Metro 2 y te escribe las cartas de disputa." },
    ] },
    caption: `6 palabras de tu reporte de crédito, explicadas fácil 📖 Cuenta castigada, colección, DOFD, consulta dura, utilización y tradeline. Guárdalo 📌

Nuestro bot audita tus 3 reportes con IA y te escribe las cartas de disputa. $50, un solo pago.

Contenido educativo, no es asesoría legal. Los resultados varían.

#credito #reportedecredito #glosario #educacionfinanciera #latinosenusa

Link en la bio 👆`,
  },
  {
    id: "antes-despues", date: "2026-11-11", time: "10:00", kind: "reel", lang: "es+en", musicAt: 145, coverAt: 0.8,
    previewAt: [1, 4, 8, 12],
    spec: { ...ES, duration: 13, scenes: [
      { type: "text", t0: 0, t1: 3.4, kicker: "ANTES · BEFORE", size: "md", lines: ["3 PDFs, un marcador y <b>2 horas</b> 😮‍💨"], sub: "3 PDFs, a highlighter and 2 hours" },
      { type: "chat", t0: 3.4, t1: 9.4, typing: [[4.2, 5.6]], caps: [[3.4, 9.4, "AHORA · NOW: <b>minutos</b> ⚡"]],
        msgs: [
          { at: 3.6, out: true, file: ["3-reportes.pdf", "4.8 MB"] },
          { at: 5.7, html: "📊 <strong>Auditoría completa / Audit complete</strong><br>🚩 3 posibles errores de reporte · 3 possible reporting errors", kb: ["✉️ Generar mis cartas / Generate my letters"], tapAt: 7.0 },
          { at: 7.8, file: ["cartas-ronda-1.pdf", "52 KB"] },
        ] },
      { type: "end", t0: 9.4, ...endES },
    ] },
    caption: `Antes vs. ahora ⚡ / Before vs. now

Antes: 3 PDFs, un marcador y 2 horas. Ahora: el bot audita tus 3 reportes con IA y escribe tus cartas de disputa en minutos.
Before: 3 PDFs, a highlighter and 2 hours. Now: the bot audits all 3 with AI and writes your dispute letters in minutes.

$50, un solo pago / one-time. Los resultados varían. / Results vary.

#credito #creditreport #reportedecredito #latinosenusa #financialliteracy

Link en la bio 👆`,
  },
];
