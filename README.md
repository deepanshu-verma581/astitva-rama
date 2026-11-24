# ASTIVA – Counselling & Wellness Centre

A responsive React and Vite website using a calm cream, beige and olive-green visual system. All image areas are reusable placeholders.

## Run locally

```bash
npm install
npm run dev
```

## Google Sheets contact form setup

1. Create a Google Sheet and keep the Spreadsheet open.
2. Open **Extensions → Apps Script**.
3. Replace the Apps Script editor contents with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    if (!data.name || !data.email || !data.subject || !data.message) {
      return jsonResponse({ status: 'error', message: 'Required fields are missing.' });
    }
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name,
      data.email,
      data.phone || '',
      data.subject,
      data.message,
    ]);
    return jsonResponse({ status: 'success' });
  } catch (error) {
    return jsonResponse({ status: 'error', message: error.toString() });
  }
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function setup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Subject', 'Message']);
}
```

4. Run `setup` once with the Apps Script authorization prompt.
5. Deploy with **Deploy → New deployment → Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Copy the Web App URL into `.env.local`:

```text
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

8. Restart `npm run dev`, submit the form, and verify that a new row is added.

The React form uses `text/plain` POST data to avoid a Google Apps Script CORS preflight. The URL is public configuration only; never place a Google account password or private API key in the frontend.
