// Week of 2026-10-29 → 2026-11-04. All names, accounts and amounts are made up.
// Week 1 learning: the POV launch reel held viewers longest, so reels here are
// shorter (11–13 s) and open with a punchier hook.
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
    id: "pov-a-mano", date: "2026-10-29", time: "10:00", kind: "reel", lang: "es", musicAt: 10, coverAt: 0.8,
    previewAt: [1, 3.5, 6.5, 11],
    spec: { ...ES, duration: 13, scenes: [
      { type: "text", t0: 0, t1: 2.6, kicker: "POV", lines: ["Llevas <b>2 horas</b>", "comparando 3 reportes", "a mano 😵‍💫"] },
      { type: "chat", t0: 2.6, t1: 9.2, typing: [[3.6, 5.4]], caps: [[2.6, 5.4, "O los subes al bot…"], [5.4, 9.2, "…y en minutos ves <b>qué no cuadra</b> 🚩"]],
        msgs: [
          { at: 2.8, out: true, file: ["Equifax.pdf", "1.3 MB"] },
          { at: 3.1, out: true, file: ["Experian.pdf", "2.0 MB"] },
          { at: 3.4, out: true, file: ["TransUnion.pdf", "1.7 MB"] },
          { at: 5.5, html: `📊 <strong>Auditoría completa</strong> · 🚩 3 posibles errores de reporte
            <div class="flag">🚩 <strong>SUNRISE LOANS (…2290)</strong><div class="why">El balance no coincide entre burós: $1,480 vs $1,120</div></div>
            <div class="flag">🚩 <strong>METRO PHONE CO (…6613)</strong><div class="why">Aparece dos veces en TransUnion</div></div>`, kb: ["✉️ Generar mis cartas"] },
        ] },
      { type: "end", t0: 9.2, ...endES },
    ] },
    caption: `POV: llevas 2 horas comparando tus 3 reportes de crédito a mano 😵‍💫 Nuestro bot los revisa con IA al mismo tiempo, marca posibles errores de reporte según Metro 2 y te escribe las cartas de disputa.

$50, un solo pago (Venmo o cripto).

Datos de ejemplo. Los resultados varían. No es asesoría legal.

#credito #reportedecredito #metro2 #educacionfinanciera #latinosenusa

Link en la bio 👆`,
  },
  {
    id: "read-your-report", date: "2026-10-30", time: "10:00", kind: "carousel", lang: "en",
    spec: { ...carEN, slides: [
      { type: "cover", kicker: "CREDIT 101", title: "How to read your <b>credit report</b> in 5 sections", text: "Every report from Equifax, Experian and TransUnion follows this layout. Save this 📌" },
      { type: "point", num: "01", title: "Personal information", text: "Name, addresses, employers. Check for <strong>misspellings or addresses you never lived at</strong>." },
      { type: "point", num: "02", title: "Accounts (tradelines)", text: "Every card and loan: balance, limit, status and dates.",
        card: `<div class="lbl">SAMPLE · RIVERSIDE CARD …5502</div>Status: Open<br>Balance: $2,310<br>Limit: $5,000` },
      { type: "point", num: "03", title: "Payment history", text: "A month-by-month grid. Each late mark should match what actually happened.",
        card: `<div class="lbl">SAMPLE · 2025</div>OK OK OK <span class="bad">30</span> OK OK` },
      { type: "point", num: "04", title: "Inquiries", text: "<strong>Hard</strong> inquiries come from applications. <strong>Soft</strong> ones (like checking your own report) don't affect your score." },
      { type: "point", num: "05", title: "Collections & public records", text: "Look for duplicates, wrong balances or dates that don't line up across the 3 bureaus." },
      { ...ctaEN, title: "Reading 3 reports takes time.<br><b>The bot does it in minutes.</b>", text: "It audits all 3 with AI, flags possible Metro 2 errors and drafts your dispute letters." },
    ] },
    caption: `Your credit report has 5 main sections, and knowing them makes reporting errors way easier to spot 🔍 Save this for the next time you pull your reports 📌

Want it done in minutes? Our bot audits all 3 reports with AI and writes the dispute letters. $50 one-time.

Sample data. Educational content, not legal advice. Results vary.

#creditreport #credit101 #financialliteracy #personalfinance #metro2

Link in bio 👆`,
  },
  {
    id: "scariest-thing", date: "2026-10-31", time: "10:00", kind: "reel", lang: "en", musicAt: 56, coverAt: 0.8,
    previewAt: [1, 4, 7.5, 11],
    spec: { ...EN, duration: 12, scenes: [
      { type: "text", t0: 0, t1: 2.8, kicker: "HAPPY HALLOWEEN 🎃", lines: ["The scariest thing", "on a credit report? 👻"] },
      { type: "text", t0: 2.8, t1: 7.0, size: "md", lines: ["A <b>reporting error</b> nobody noticed:"], items: [
        { n: "1", html: "The same debt listed twice", at: 3.4 }, { n: "2", html: "A balance that doesn't match", at: 4.4 }, { n: "3", html: "“Paid” but still showing a balance", at: 5.4 }] },
      { type: "text", t0: 7.0, t1: 9.2, size: "md", lines: ["Our bot hunts for them <b>in all 3 reports</b> 🔦"] },
      { type: "end", t0: 9.2, ...endEN },
    ] },
    caption: `Happy Halloween 🎃 The scariest thing on a credit report isn't a ghost 👻 It's a reporting error nobody noticed.

Our bot checks all 3 reports with AI, flags possible Metro 2 errors and writes the dispute letters. $50 one-time.

Sample data shown. Results vary. Not legal advice.

#halloween #creditreport #metro2 #creditdispute #financialliteracy

Link in bio 👆`,
  },
  {
    id: "consultas-duras-suaves", date: "2026-11-01", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "CRÉDITO 101", title: "Consultas <b>duras</b> vs. <b>suaves</b>", text: "No todas las consultas a tu crédito cuentan igual. Desliza 👉" },
      { type: "point", title: "Consulta suave", text: "<strong>No afecta tu puntaje.</strong> Pasa cuando revisas tu propio reporte, cuando una empresa te envía una oferta preaprobada o en algunas revisiones de cuentas que ya tienes." },
      { type: "point", title: "Consulta dura", text: "Pasa cuando <strong>solicitas</strong> una tarjeta, un préstamo o un financiamiento. Puede bajar tu puntaje un poco y aparece en el reporte hasta 2 años." },
      { type: "point", title: "¿Una consulta dura que no reconoces?", text: "Si aparece una solicitud que tú no hiciste, puedes disputarla con el buró.",
        card: `<div class="lbl">EJEMPLO</div>DEMO AUTO CREDIT · 08/2026<br><span class="bad">No reconocida</span>` },
      { type: "point", title: "Revisar tu reporte es seguro", text: "Pedir tus 3 reportes en AnnualCreditReport.com es una consulta suave. Revísalos seguido." },
      { ...ctaES, title: "Revisa tus 3 reportes <b>sin perder horas</b>", text: "Nuestro bot los audita con IA, marca posibles errores Metro 2 y te escribe las cartas de disputa." },
    ] },
    caption: `Consultas duras vs. suaves: ¿cuál afecta tu puntaje? 🤔 Revisar tu propio reporte es una consulta suave y NO lo afecta. Guarda este post 📌

Nuestro bot audita tus 3 reportes con IA y te escribe las cartas de disputa. $50, un solo pago.

Datos de ejemplo. Contenido educativo, no es asesoría legal. Los resultados varían.

#credito #puntajedecredito #reportedecredito #educacionfinanciera #finanzaspersonales

Link en la bio 👆`,
  },
  {
    id: "what-50-gets-you", date: "2026-11-02", time: "10:00", kind: "reel", lang: "en", musicAt: 112, coverAt: 0.8,
    previewAt: [1, 4, 7.5, 11.5],
    spec: { ...EN, duration: 13, scenes: [
      { type: "text", t0: 0, t1: 2.4, lines: ["What <b>$50</b> gets you 👇"] },
      { type: "text", t0: 2.4, t1: 9.2, size: "md", lines: ["One payment. No monthly fees."], items: [
        { n: "✓", html: "All 3 reports audited at once", sub: "Equifax · Experian · TransUnion", at: 2.9 },
        { n: "✓", html: "Possible Metro 2 errors flagged", sub: "with the reason for each one", at: 4.1 },
        { n: "✓", html: "Dispute letters ready to print", sub: "max 2 accounts per letter", at: 5.3 },
        { n: "✓", html: "English or Spanish", sub: "pay with Venmo or crypto", at: 6.5 }] },
      { type: "end", t0: 9.2, ...endEN },
    ] },
    caption: `What $50 gets you with the Certified Builders bot 👇

✅ All 3 credit reports audited at once with AI
✅ Possible Metro 2 reporting errors flagged, with the reason
✅ Dispute letters ready to print and mail
✅ English or Spanish · Venmo or crypto

One-time payment, no monthly fees. Results vary. Not legal advice.

#creditreport #metro2 #creditdispute #personalfinance #financialliteracy

Link in bio 👆`,
  },
  {
    id: "checklist-carta", date: "2026-11-03", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "CHECKLIST", title: "Antes de enviar tu <b>carta de disputa</b>", text: "5 cosas para que tu carta llegue completa. Guárdalo 📌" },
      { type: "point", num: "01", title: "Copia de tu ID", text: "Licencia o identificación con foto, para que el buró confirme quién eres." },
      { type: "point", num: "02", title: "Comprobante de dirección", text: "Un recibo de luz, agua o un estado de cuenta reciente con tu nombre y dirección." },
      { type: "point", num: "03", title: "La página del reporte marcada", text: "Encierra en un círculo la cuenta que disputas y explica en la carta <strong>qué está mal</strong>." },
      { type: "point", num: "04", title: "Correo certificado", text: "Envíala por correo certificado con acuse de recibo y guarda el número de rastreo." },
      { type: "point", num: "05", title: "Guarda copias y anota la fecha", text: "El buró por lo general tiene <strong>30 días</strong> para investigar desde que recibe tu disputa." },
      { ...ctaES, title: "La carta, <b>lista en minutos</b>", text: "Nuestro bot audita tus 3 reportes con IA y escribe la carta con las cuentas y la razón de cada disputa." },
    ] },
    caption: `Checklist antes de enviar tu carta de disputa ✉️ Copia de tu ID, comprobante de dirección, la página del reporte marcada, correo certificado y copias de todo. Guárdalo para cuando la envíes 📌

Nuestro bot te escribe la carta en minutos después de auditar tus 3 reportes con IA. $50, un solo pago.

Contenido educativo, no es asesoría legal. Los resultados varían.

#credito #cartadedisputa #reportedecredito #educacionfinanciera #latinosenusa

Link en la bio 👆`,
  },
  {
    id: "english-o-espanol", date: "2026-11-04", time: "10:00", kind: "reel", lang: "es+en", musicAt: 150, coverAt: 0.8,
    previewAt: [1, 4, 7.5, 11],
    spec: { ...ES, duration: 12, scenes: [
      { type: "text", t0: 0, t1: 2.6, lines: ["¿Inglés o español?", "<b>El bot habla los dos</b> 🇺🇸🇪🇸"], sub: "English or Spanish? The bot speaks both" },
      { type: "chat", t0: 2.6, t1: 8.6, caps: [[2.6, 8.6, "Escoge tu idioma <b>y listo</b> 👆"]],
        msgs: [
          { at: 2.8, out: true, html: "/start" },
          { at: 3.4, html: "👋 Welcome to <strong>Certified Builders</strong>!<br>Bienvenido a <strong>Certified Builders</strong>.<br><br>Choose your language / Elige tu idioma:", kb: ["🇺🇸 English", "🇪🇸 Español"], tapAt: 5.0, tapIdx: 1 },
          { at: 6.0, html: "✅ ¡Listo! Envíame tus <strong>3 reportes de crédito</strong> en PDF y empiezo la auditoría 🔍" },
        ] },
      { type: "end", t0: 8.6, ...endES },
    ] },
    caption: `¿Inglés o español? El bot habla los dos 🇺🇸🇪🇸 / English or Spanish? The bot speaks both.

Audita tus 3 reportes de crédito con IA y te escribe las cartas de disputa en minutos. / It audits your 3 credit reports with AI and writes your dispute letters.

$50, un solo pago / one-time. Los resultados varían. / Results vary.

#credito #creditreport #reportedecredito #latinosenusa #financialliteracy

Link en la bio 👆`,
  },
];
