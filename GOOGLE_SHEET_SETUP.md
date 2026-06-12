# Conectar los leads a un Google Sheet (5 minutos)

El código ya está listo. Solo falta el lado de Google, que tienes que hacer tú porque es tu cuenta.

## Paso 1 — Crea el Sheet
1. Ve a **sheets.new** (crea una hoja nueva). Ponle nombre, por ejemplo "Leads cazul.fit".

## Paso 2 — Pega el script
1. En la hoja: menú **Extensiones → Apps Script**.
2. Borra todo lo que haya y pega esto:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Telefono', 'Fuente']);
    }
    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || '',
      data.email || '',
      data.telefono || '',
      data.fuente || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Dale **Guardar** (el iconito del disquete).

## Paso 3 — Publícalo como Web App
1. Arriba a la derecha: **Deploy → New deployment**.
2. Donde dice "Select type" (el engranaje), escoge **Web app**.
3. Configura:
   - **Execute as:** Me (tu correo)
   - **Who has access:** Anyone
4. **Deploy**. Te va a pedir permiso para tu cuenta — apruébalo (te puede salir un aviso de "Google hasn't verified this app", dale Advanced → Go to (tu proyecto) → Allow).
5. Copia la **Web app URL** (termina en `/exec`). Esa es tu llave.

## Paso 4 — Pon la URL en el proyecto
La URL va en una variable de entorno llamada **GOOGLE_SHEET_WEBHOOK_URL**.

- **En tu computadora (para probar local):** crea un archivo `.env.local` en la carpeta del proyecto con esta línea:
  ```
  GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXXX/exec
  ```
- **En Vercel (cuando publiques):** Proyecto → Settings → Environment Variables → agrega `GOOGLE_SHEET_WEBHOOK_URL` con esa misma URL → vuelve a hacer Deploy.

## Paso 5 — Pruébalo
1. Abre tu sitio, llena el formulario con datos de prueba.
2. Mira tu Google Sheet: debe aparecer una fila nueva con fecha, nombre, email, teléfono.

---

## Cómo funciona (el flujo completo)
1. Alguien llena el formulario de tu guía (nombre, email, teléfono).
2. El sitio manda esos datos a `/api/lead` (tu propio backend).
3. `/api/lead` valida, le agrega la fecha y la fuente, y se lo reenvía a tu URL de Google.
4. El script de Google agrega una fila nueva a tu hoja.
5. Tú terminas con una **lista viva de todos tus leads** (fecha, nombre, email, teléfono) que crece sola. Esa es tu lista de correos y tu lista para DMs.

**Notas:**
- Si Google falla por lo que sea, la persona igual recibe la guía. No la bloqueamos por un error de guardado.
- La URL de Google es secreta. Solo sirve para AGREGAR filas, no para leer tu hoja. Mantenla en la variable de entorno, no la pegues en el código ni en público.
- Si cambias el script después, tienes que volver a hacer **Deploy → Manage deployments → editar → New version**, o la URL nueva.
