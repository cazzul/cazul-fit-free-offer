# Guía Estética — cómo correrla y publicarla

Tu página está **completa y funcionando**. v0 dejó todo el código bien; lo único que arreglé fue la fuente para que compile fuera de v0 (ahora usa el paquete `geist` local en vez de bajarla de Google Fonts en cada build). Verifiqué que el build pasa y que el formulario de captura responde.

---

## 1. Verla en tu computadora

Abre la Terminal, entra a la carpeta del proyecto y corre:

```bash
cd ruta/a/fitness-guide
npm install
npm run dev
```

Luego abre **http://localhost:3000** en tu navegador. Vas a ver el gate negro; al llenar nombre/email/teléfono y darle "Acceder gratis", se abre la guía blanca.

> La primera vez `npm install` baja todo lo necesario (necesitas internet). Tarda 1–2 minutos.

---

## 2. Publicarla gratis (Vercel)

La forma más fácil, porque el proyecto ya es de Vercel:

**Opción rápida (terminal):**
```bash
npm i -g vercel     # solo la primera vez
vercel              # te pide login, contesta las preguntas con Enter
vercel --prod       # publica la versión final
```
Al final te da un link tipo `https://guia-estetica.vercel.app`. Ese es el que pones en tu bio.

**Opción sin terminal:** sube la carpeta a un repositorio de GitHub, entra a **vercel.com**, "Add New → Project", importa el repo y dale Deploy.

Después puedes conectar tu propio dominio (ej. `cazul.fit`) gratis desde el panel de Vercel.

---

## 3. IMPORTANTE — dónde llegan los emails

Ahora mismo el formulario **valida y desbloquea la guía, pero los leads NO se guardan en ningún lado** — solo se imprimen en el log del servidor. Hay que conectarlo a un servicio para que de verdad captures los emails. El archivo a tocar es `app/api/lead/route.ts` (busca el comentario `// TODO:`).

Opciones, de más fácil a más completa:
- **Google Sheet (gratis):** cada lead cae en una hoja de cálculo. Perfecto para empezar y para tu lista de DMs.
- **Formspree / Web3Forms (gratis):** los leads te llegan por email y a un panel, sin escribir backend.
- **ConvertKit / Mailchimp:** email marketing de verdad (mandar correos a la lista después). Lo ideal cuando crezcas.

**Esto te lo conecto yo en 5 minutos** cuando me digas cuál prefieres. Sin esto, capturas visitas pero pierdes los contactos — así que es el paso que no puedes saltar antes de mandar tráfico.

---

## Qué cambié (para tu registro)
- `app/layout.tsx`: la fuente Geist ahora viene del paquete `geist` (local) en vez de `next/font/google`. Más rápido y no depende de Google Fonts en el build.
- `package.json`: agregué la dependencia `geist`.
- Todo lo demás (gate, partículas, nav, guía, captura) quedó tal como lo diseñó v0.
