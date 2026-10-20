// Week of 2026-10-22 → 2026-10-28. All names, accounts and amounts are made up.
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
    id: "5-errores-metro2", date: "2026-10-22", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "METRO 2 · GUÍA RÁPIDA", title: "5 errores de reporte que vale la pena <b>buscar</b>", text: "en tus reportes de Equifax, Experian y TransUnion." },
      { type: "point", num: "01", title: "Cuenta duplicada", text: "La misma deuda aparece <strong>dos veces</strong> con balance: el acreedor original y la agencia de cobro.",
        card: `<div class="lbl">EJEMPLO</div>BANCO EJEMPLO …1234 &nbsp;<span class="bad">$850</span><br>COBROS DEMO &nbsp;…1234 &nbsp;<span class="bad">$850</span>` },
      { type: "point", num: "02", title: "El balance no coincide entre burós", text: "Una misma cuenta debería decir lo mismo en los 3 reportes.",
        card: `<div class="lbl">RIVERSIDE CARD …5502</div>Equifax &nbsp;&nbsp;&nbsp;$2,310<br>Experian &nbsp;&nbsp;$2,310<br>TransUnion <span class="bad">$3,045</span>` },
      { type: "point", num: "03", title: "“Pagada” pero con balance", text: "Si una cuenta se reporta pagada o cerrada, el balance actual debería ser <strong>$0</strong>.",
        card: `<div class="lbl">CAPITAL BANK …4821</div>Estado: <span class="ok">Pagada</span><br>Balance: <span class="bad">$612</span>` },
      { type: "point", num: "04", title: "Fecha de primera morosidad distinta", text: "Esa fecha marca cuánto tiempo puede quedarse una cuenta negativa (por lo general hasta 7 años).",
        card: `<div class="lbl">NORTHSTAR COLLECTIONS …7710</div>Equifax &nbsp;&nbsp;03/2021<br>Experian &nbsp;<span class="bad">11/2022</span>` },
      { type: "point", num: "05", title: "Datos personales erróneos", text: "Nombre mal escrito, una dirección donde nunca viviste o un número de Seguro Social con dígitos cambiados." },
      { ...ctaES, title: "¿Revisar 3 reportes a mano? <b>Toma horas.</b>", text: "Nuestro bot los audita con IA, marca posibles errores Metro 2 y te escribe las cartas de disputa." },
    ] },
    caption: `Revisar tus reportes es tu derecho 🔍 Estos son 5 errores de reporte comunes que vale la pena buscar en Equifax, Experian y TransUnion. Guárdalo para cuando revises los tuyos 📌

Nuestro bot audita los 3 reportes con IA y te escribe las cartas de disputa. $50, un solo pago.

Datos de ejemplo. Los resultados varían. No es asesoría legal.

#credito #reportedecredito #metro2 #educacionfinanciera #finanzaspersonales #latinosenusa

Link en la bio 👆`,
  },
  {
    id: "3-bureaus-match", date: "2026-10-23", time: "10:00", kind: "reel", lang: "en", musicAt: 44, coverAt: 1.2,
    previewAt: [1.5, 6, 10.5, 15.5, 20],
    spec: { ...EN, duration: 21, scenes: [
      { type: "text", t0: 0, t1: 3.6, kicker: "SAMPLE AUDIT", lines: ["Same account.", "<b>3 bureaus.</b>", "3 different balances?"] },
      { type: "chat", t0: 3.6, t1: 14.2, typing: [[5.2, 7.2]], caps: [[3.6, 7.2, "It compares every account across <b>all 3 bureaus</b>"], [7.2, 14.2, "…and flags what <b>doesn't match</b> 🚩"]],
        msgs: [
          { at: 3.9, out: true, file: ["Equifax.pdf", "1.2 MB"] },
          { at: 4.3, out: true, file: ["Experian.pdf", "1.9 MB"] },
          { at: 4.7, out: true, file: ["TransUnion.pdf", "1.6 MB"] },
          { at: 5.4, html: "🔍 Comparing your <strong>3 reports</strong> side by side…" },
          { at: 7.4, html: `⚖️ <strong>Cross-bureau check</strong> · RIVERSIDE CARD (…5502)<br>Equifax: $2,310 · Experian: $2,310 · TransUnion: <strong>$3,045</strong>
            <div class="flag">🚩 <strong>Balance doesn't match across bureaus</strong><div class="why">Same account, different balance on TransUnion</div></div>
            <div class="flag">🚩 <strong>Date opened differs</strong><div class="why">04/2019 on Equifax vs 06/2019 on Experian</div></div>`, kb: ["✉️ Generate my letters", "📝 Review items"] },
        ] },
      { type: "text", t0: 14.2, t1: 17.2, size: "md", lines: ["Under the FCRA, you can dispute info that's <b>inaccurate</b>.", "Free, with each bureau."] },
      { type: "end", t0: 17.2, ...endEN },
    ] },
    caption: `Your 3 credit reports don't always say the same thing 👀 Our bot compares every account across Equifax, Experian and TransUnion, flags possible reporting errors under Metro 2 rules, and writes the dispute letters. $50 one-time.

Sample data shown. Results vary. Not legal advice.

#creditreport #metro2 #creditdispute #personalfinance #financialliteracy

Link in bio 👆`,
  },
  {
    id: "fcra-rights", date: "2026-10-24", time: "10:00", kind: "carousel", lang: "en",
    spec: { ...carEN, slides: [
      { type: "cover", kicker: "FCRA · KNOW YOUR RIGHTS", title: "4 rights you have with your <b>credit report</b>", text: "The Fair Credit Reporting Act gives every consumer these. Save this 📌" },
      { type: "point", num: "01", title: "See your reports for free", text: "Get your reports from <strong>Equifax, Experian and TransUnion</strong> for free at AnnualCreditReport.com, the official site. Checking your own report doesn't hurt your score." },
      { type: "point", num: "02", title: "Dispute inaccurate info", text: "You can dispute anything <strong>inaccurate or incomplete</strong> directly with each bureau and with the company that reported it. Disputing is free." },
      { type: "point", num: "03", title: "The bureau must investigate", text: "Usually within <strong>30 days</strong> (up to 45 in some cases). They also have to send your dispute to the company that reported the info." },
      { type: "point", num: "04", title: "Results in writing", text: "You get the results in writing. Info found <strong>inaccurate, incomplete or unverifiable</strong> has to be corrected or removed." },
      { ...ctaEN, title: "Step 1: know your rights.<br><b>Step 2: find the errors.</b>", text: "Our bot audits all 3 reports with AI and drafts your dispute letters." },
    ] },
    caption: `4 rights every consumer has under the Fair Credit Reporting Act (FCRA) ⚖️ Save this so you have it when you check your reports 📌

Want help spotting reporting errors? Our bot audits your 3 reports with AI and writes the dispute letters. $50 one-time.

Educational content, not legal advice. Results vary.

#fcra #creditreport #knowyourrights #financialliteracy #personalfinance

Link in bio 👆`,
  },
  {
    id: "error-a-carta", date: "2026-10-25", time: "10:00", kind: "reel", lang: "es", musicAt: 88, coverAt: 1.2,
    previewAt: [1.5, 5, 9.5, 14.5, 19.5],
    spec: { ...ES, duration: 21, scenes: [
      { type: "text", t0: 0, t1: 3.4, lines: ["Encontraste un error en tu reporte…", "<b>¿y ahora qué?</b>"] },
      { type: "chat", t0: 3.4, t1: 12.6, typing: [[10.1, 10.8]], caps: [[3.4, 7.6, "El bot te dice <b>qué está mal</b> y por qué"], [7.6, 12.6, "Un toque y <b>genera la carta</b> 👆"]],
        msgs: [
          { at: 3.7, html: `📊 <strong>Auditoría completa</strong> · 🚩 2 cuentas con errores de reporte:
            <div class="flag">🚩 <strong>CAPITAL BANK (…4821) · Experian</strong><div class="why">Reportada como pagada pero aún muestra un balance de $612</div></div>
            <div class="flag">🚩 <strong>MIDWEST AUTO FINANCE (…0937) · Experian</strong><div class="why">Dice “pagada como se acordó” pero muestra atrasos de 30 y 60 días</div></div>`, kb: ["✉️ Generar mis cartas", "📝 Revisar cuentas"], tapAt: 8.9 },
          { at: 10.8, html: "✉️ <strong>Tu carta de la ronda 1 está lista</strong> (2 cuentas)." },
          { at: 11.5, file: ["Experian-ronda-1.pdf", "38 KB"] },
        ] },
      { type: "letter", t0: 12.6, t1: 16.6, cap: "Lista para <b>imprimir y enviar</b> ✉️", img: "assets/demo-letter-1.png", hl: [[41.6, 6.2, 13.6], [49.0, 7.8, 14.2]] },
      { type: "end", t0: 16.6, ...endES },
    ] },
    caption: `Del error marcado a la carta de disputa, en minutos ✉️ El bot te explica qué cuenta tiene un posible error de reporte según Metro 2 y te escribe la carta para el buró, lista para imprimir y enviar.

$50, un solo pago.

Datos de ejemplo. Los resultados varían. No es asesoría legal.

#credito #cartadedisputa #reportedecredito #metro2 #educacionfinanciera

Link en la bio 👆`,
  },
  {
    id: "mito-realidad", date: "2026-10-26", time: "10:00", kind: "carousel", lang: "es",
    spec: { ...carES, slides: [
      { type: "cover", kicker: "MITO VS. REALIDAD", title: "4 mitos sobre tu <b>reporte de crédito</b>", text: "Desliza y comparte con alguien que los cree 👀" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Revisar mi propio reporte baja mi puntaje.", real: "Falso. <span>Revisar tu propio reporte es una consulta suave y no afecta tu puntaje.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Para disputar tengo que pagarle a alguien.", real: "Falso. <span>Puedes disputar gratis tú mismo con cada buró. Una herramienta solo te ahorra tiempo.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Todo lo negativo se puede quitar.", real: "Falso. <span>La información correcta y verificable puede quedarse. Lo que se disputa es lo inexacto.</span>" },
      { type: "myth", mythLbl: "MITO", realLbl: "REALIDAD", myth: "Los 3 burós tienen la misma información.", real: "No siempre. <span>Cada acreedor puede reportar a uno, dos o los tres, y los datos pueden no coincidir.</span>" },
      { ...ctaES, title: "Encuentra lo que <b>no cuadra</b>", text: "Nuestro bot compara tus 3 reportes con IA, marca posibles errores Metro 2 y escribe tus cartas." },
    ] },
    caption: `¿Cuántos de estos mitos habías escuchado? 👀 Revisar tu reporte no baja tu puntaje y disputar es gratis. Lo importante es saber qué buscar.

Si quieres ahorrar tiempo, nuestro bot audita tus 3 reportes con IA y te escribe las cartas de disputa. $50, un solo pago.

Contenido educativo, no es asesoría legal. Los resultados varían.

#credito #mitosyrealidades #reportedecredito #educacionfinanciera #finanzaspersonales

Link en la bio 👆`,
  },
  {
    id: "what-is-metro2", date: "2026-10-27", time: "10:00", kind: "reel", lang: "en", musicAt: 140, coverAt: 1.2,
    previewAt: [1.5, 5.5, 9.5, 13, 17],
    spec: { ...EN, duration: 18, scenes: [
      { type: "text", t0: 0, t1: 3.2, kicker: "CREDIT 101", lines: ["What is", "<b>Metro 2?</b> 🤔"] },
      { type: "text", t0: 3.2, t1: 7.2, size: "md", lines: ["The standard format lenders use to <b>report your accounts</b> to the credit bureaus."] },
      { type: "text", t0: 7.2, t1: 11.2, size: "md", lines: ["Every field has <b>rules</b>:"], items: [
        { n: "1", html: "Balance", at: 7.8 }, { n: "2", html: "Account status", at: 8.2 }, { n: "3", html: "Payment history", at: 8.6 }, { n: "4", html: "Key dates", at: 9.0 }] },
      { type: "text", t0: 11.2, t1: 14.4, size: "md", lines: ["When the data breaks those rules, that's a <b>reporting error</b> you can dispute."] },
      { type: "end", t0: 14.4, ...endEN },
    ] },
    caption: `Metro 2 in 15 seconds 🧠 It's the format lenders use to report your accounts to Equifax, Experian and TransUnion. When the data doesn't follow its rules, that's a reporting error you can dispute.

Our bot checks your 3 reports against Metro 2 rules with AI and writes the dispute letters. $50 one-time.

Educational content, not legal advice. Results vary.

#metro2 #creditreport #credit101 #financialliteracy #personalfinance

Link in bio 👆`,
  },
  {
    id: "reportes-gratis", date: "2026-10-28", time: "10:00", kind: "reel", lang: "es+en", musicAt: 100, coverAt: 1.2,
    previewAt: [1.5, 6, 11, 16],
    spec: { ...ES, duration: 19, scenes: [
      { type: "text", t0: 0, t1: 3.2, kicker: "PASO A PASO", lines: ["Cómo pedir tus", "<b>3 reportes gratis</b>"], sub: "How to get your 3 credit reports for free" },
      { type: "text", t0: 3.2, t1: 12.6, size: "md", lines: ["En 4 pasos 👇"], items: [
        { n: "1", html: "Entra a AnnualCreditReport.com", sub: "Go to AnnualCreditReport.com (official site)", at: 3.8 },
        { n: "2", html: "Llena tus datos y verifica tu identidad", sub: "Fill in your info and verify your identity", at: 5.6 },
        { n: "3", html: "Elige Equifax, Experian y TransUnion", sub: "Pick all 3 bureaus", at: 7.4 },
        { n: "4", html: "Descarga los 3 en PDF", sub: "Download all 3 as PDF", at: 9.2 }] },
      { type: "text", t0: 12.6, t1: 15.2, size: "md", lines: ["¿Ya los tienes?", "<b>El bot los audita con IA</b> 🤖"], sub: "Got them? The bot audits them with AI" },
      { type: "end", t0: 15.2, ...endES },
    ] },
    caption: `Cómo pedir tus 3 reportes de crédito gratis, en 4 pasos 📄 / How to get your 3 credit reports for free:

1️⃣ AnnualCreditReport.com (sitio oficial / official site)
2️⃣ Llena tus datos y verifica tu identidad / Verify your identity
3️⃣ Elige Equifax, Experian y TransUnion / Pick all 3
4️⃣ Descárgalos en PDF / Download as PDF

¿Ya los tienes? Nuestro bot los audita con IA y escribe tus cartas de disputa. $50, un solo pago.

Los resultados varían. / Results vary.

#credito #reportedecredito #creditreport #educacionfinanciera #financialliteracy

Link en la bio 👆`,
  },
];
