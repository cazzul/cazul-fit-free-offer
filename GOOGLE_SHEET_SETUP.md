# Conectar los leads a Google Sheets

Los 3 puntos de captura van al mismo sitio:

| Formulario | Fuente en el Sheet | Tipo |
|---|---|---|
| Aplicación de coaching (`/#apply`) | Aplicación Coaching | **Qualified** |
| Guía (`/guia`) | Guía de entrenamiento y nutrición | **Cold** |
| Protocolo (`/protocolo`) | Protocolo 90 días | **Cold** |

## Paso 1 — Crea el Sheet

1. Ve a **sheets.new**
2. Ponle nombre, por ejemplo **Leads cazul.fit**

## Paso 2 — Pega el script

1. En la hoja: **Extensiones → Apps Script**
2. **Borra todo** lo que haya en el editor (incluido `function myFunction()` si aparece)
3. Abre el archivo **`google-apps-script/Code.gs`** de este proyecto y copia **todo** el contenido
4. Pégalo en Apps Script (solo un archivo, sin las líneas \`\`\` de markdown)
5. **Guardar**

> **Importante:** no copies desde el bloque de abajo si se te pegan las comillas raras o las \`\`\`. Usa `google-apps-script/Code.gs`.

<details>
<summary>Script (referencia — preferir Code.gs)</summary>

```javascript
var HEADERS = [
  "Fecha",
  "Nombre",
  "Email",
  "Instagram",
  "Fuente",
  "Tipo",
  "Listo",
  "Meta",
  "Tiempo entrenando",
  "Obstaculo",
  "Inversion/mes"
];

function getOrCreateSheet(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function rowFromData(data) {
  return [
    data.fecha || new Date().toISOString(),
    data.nombre || "",
    data.email || "",
    data.instagram || "",
    data.fuente || "",
    data.tipo || "",
    data.readyToChange || "",
    data.mainGoal || "",
    data.trainingDuration || "",
    data.biggestObstacle || "",
    data.monthlyInvestment || ""
  ];
}

function parseRequestBody(e) {
  if (!e || !e.postData) {
    throw new Error("Missing POST body");
  }
  if (e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }
  return JSON.parse(e.postData.getDataAsString());
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = parseRequestBody(e);
    var row = rowFromData(data);

    getOrCreateSheet(ss, "Todos los leads").appendRow(row);

    if (data.tipo === "Qualified") {
      getOrCreateSheet(ss, "Qualified Leads").appendRow(row);
    } else {
      getOrCreateSheet(ss, "Cold Leads").appendRow(row);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Webhook activo" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

</details>

6. **Guardar**

## Paso 2b — Verifica que el script corre

1. **Deploy → New deployment → Web app** (si aún no lo hiciste)
2. Abre la URL del webhook en el navegador (la que termina en `/exec`)
3. Debe decir: `{"ok":true,"message":"Webhook activo"}`

Si ves `TypeError` o HTML de error, el script no quedó bien pegado. Vuelve al paso 2.

## Paso 3 — Publícalo como Web App

1. **Deploy → New deployment**
2. Tipo: **Web app**
3. **Execute as:** Me (tu correo)
4. **Who has access:** Anyone
5. **Deploy** y aprueba permisos
6. Copia la **Web app URL** (termina en `/exec`)

## Paso 4 — Variable de entorno

Crea `.env.local` en la raíz del proyecto:

```
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX/exec
```

En **Vercel**: Settings → Environment Variables → misma variable → redeploy.

## Paso 5 — Prueba los 3 formularios

1. Llena la guía con datos de prueba → fila con Fuente = guía, Tipo = **Cold**
2. Llena el protocolo → Fuente = protocolo, Tipo = **Cold**
3. Llena la aplicación de coaching → Fuente = aplicación, Tipo = **Qualified** + respuestas del cuestionario

Deberías ver 3 pestañas en el Sheet:

- **Todos los leads** — todo junto
- **Qualified Leads** — solo aplicaciones de coaching
- **Cold Leads** — guía + protocolo

---

## Columnas del Sheet

| Columna | Qué es |
|---|---|
| Fecha | Cuándo se registró |
| Nombre | Nombre del lead |
| Email | Email |
| Instagram | Usuario de Instagram |
| Fuente | De dónde vino exactamente |
| Tipo | Qualified o Cold |
| ¿Listo? | Solo coaching |
| Meta | Solo coaching |
| Tiempo entrenando | Solo coaching |
| Obstáculo | Solo coaching |
| Inversión/mes | Solo coaching |

Las columnas de coaching quedan vacías para leads de guía y protocolo.

---

## Notas

- Si Google falla, la guía/protocolo igual se desbloquean. No bloqueamos al visitante.
- La URL del webhook es secreta. Solo agrega filas, no lee tu hoja.
- Si cambias el script, haz **Deploy → Manage deployments → New version**.
