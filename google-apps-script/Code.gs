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
