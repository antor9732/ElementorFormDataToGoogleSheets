/**
 * Google Apps Script for Elementor Pro Form webhook.
 * Setup: In Google Sheets, go to Extensions > Apps Script, paste this code, save, and deploy as a web app (execute as yourself, allow anonymous access).
 * Use the deployed URL as the webhook in your Elementor Pro Form.
 * Test the URL in a browser; it will return "Yepp this is the webhook URL, request received".
 * Optional form fields: 
 * - "e_gs_SheetName" (default: form name)
 * - "e_gs_order" (column order, comma-separated)
 * - "e_gs_exclude" (columns to exclude, comma-separated)
 * Update: 05/13/2025
 */

let emailNotification = false; // Enable email notifications
let emailAddress = "Change_to_your_Email"; // Set email address

// Constants
let isNewSheet = false;
let postedData = [];
const EXCLUDE_PROPERTY = 'e_gs_exclude';
const ORDER_PROPERTY = 'e_gs_order';
const SHEET_NAME_PROPERTY = 'e_gs_SheetName';

// Handle GET request
function doGet() {
  return HtmlService.createHtmlOutput("Yepp this is the webhook URL, request received");
}

// Handle POST request (webhook)
function doPost(e) {
  const params = JSON.parse(JSON.stringify(e.parameter));
  postedData = params;
  insertToSheet(params);
  return HtmlService.createHtmlOutput("post request received");
}

// Flatten nested object
const flattenObject = ob => {
  let result = {};
  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if (typeof ob[i] !== 'object') {
      result[i] = ob[i];
      continue;
    }
    let flat = flattenObject(ob[i]);
    for (let x in flat) {
      if (flat.hasOwnProperty(x)) result[`${i}.${x}`] = flat[x];
    }
  }
  return result;
};

// Get headers
const getHeaders = (sheet, keys) => {
  let headers = isNewSheet ? [] : sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  headers = [...headers, ...keys.filter(h => !headers.includes(h))];
  headers = getColumnsOrder(headers);
  headers = excludeColumns(headers);
  return headers.filter(h => ![EXCLUDE_PROPERTY, ORDER_PROPERTY, SHEET_NAME_PROPERTY].includes(h));
};

// Get values
const getValues = (headers, flat) => headers.map(h => flat[h]);

// Insert row data
const insertRowData = (sheet, row, values, bold = false) => {
  sheet.getRange(row, 1, 1, values.length)
    .setValues([values])
    .setFontWeight(bold ? "bold" : "normal")
    .setHorizontalAlignment("center");
};

// Set headers and values
const setHeaders = (sheet, values) => insertRowData(sheet, 1, values, true);
const setValues = (sheet, values) => {
  const lastRow = Math.max(sheet.getLastRow(), 1);
  sheet.insertRowAfter(lastRow);
  insertRowData(sheet, lastRow + 1, values);
};

// Get or create sheet
const getFormSheet = sheetName => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    isNewSheet = true;
  }
  return sheet;
};

// Insert data to sheet
const insertToSheet = data => {
  const flat = flattenObject(data);
  const sheet = getFormSheet(data[SHEET_NAME_PROPERTY] || data["form_name"]);
  const headers = getHeaders(sheet, Object.keys(flat));
  setHeaders(sheet, headers);
  setValues(sheet, getValues(headers, flat));
  if (emailNotification) sendNotification(data, sheet.getUrl());
};

// Convert comma-separated string to array
const stringToArray = str => str.split(",").map(el => el.trim());

// Order columns
const getColumnsOrder = headers => {
  if (!postedData[ORDER_PROPERTY]) return headers;
  let order = stringToArray(postedData[ORDER_PROPERTY]).filter(h => headers.includes(h));
  return [...order, ...headers.filter(h => !order.includes(h))];
};

// Exclude columns
const excludeColumns = headers => {
  if (!postedData[EXCLUDE_PROPERTY]) return headers;
  const exclude = stringToArray(postedData[EXCLUDE_PROPERTY]);
  return headers.filter(h => !exclude.includes(h));
};

// Send email notification
const sendNotification = (data, url) => {
  MailApp.sendEmail(
    emailAddress,
    "New Elementor Form Submission",
    `New submission from ${data['form_name']} inserted at: ${url}`,
    { name: 'Automatic Emailer Script' }
  );
};