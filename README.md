# Astitva – Counselling & Wellness Centre

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
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim() || !data.age) {
      return jsonResponse({ status: 'error', message: 'Required fields are missing.' });
    }
    const age = Number(data.age);
    if (!Number.isInteger(age) || age < 1 || age > 120) {
      return jsonResponse({ status: 'error', message: 'Age must be a whole number from 1 to 120.' });
    }
    const submittedAt = new Date();
    const date = data.date || Utilities.formatDate(submittedAt, 'Asia/Kolkata', 'yyyy-MM-dd');
    const day = data.day || Utilities.formatDate(submittedAt, 'Asia/Kolkata', 'EEEE');
    const time = data.time || Utilities.formatDate(submittedAt, 'Asia/Kolkata', 'hh:mm:ss a');
    sheet.appendRow([
      data.timestamp || submittedAt.toISOString(),
      date,
      day,
      time,
      data.name,
      data.email,
      data.phone || '',
      age,
      data.message?.trim() || '',
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
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Date', 'Day', 'Time', 'Full Name', 'Email', 'Phone', 'Age', 'Message']);
    return;
  }
  throw new Error('This sheet already has data. Review its headers manually; setup did not change existing rows.');
}
```

4. Run `setup` once with the Apps Script authorization prompt.
5. Deploy with **Deploy → New deployment → Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Copy the Web App URL into `.env` (or `.env.local`):

```text
  VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

8. Restart `npm run dev`, submit the form, and verify that a new row is added.

The React form uses `text/plain` POST data to avoid a Google Apps Script CORS preflight. Message is optional and is saved as a blank cell when omitted. The URL is public configuration only; never place a Google account password or private API key in the frontend.

The contact form sends Date, Day, and Time in India Standard Time as private submission fields; they are saved to the sheet and are not shown on the page. If the Apps Script is already deployed, update its `doPost` code with the version above and deploy a new version. Add the `Date`, `Day`, and `Time` headers after `Timestamp` in the sheet so the columns match.

## Search engine setup

See [SEO.md](SEO.md) for the technical SEO audit, keyword map, domain configuration, sitemap and robots behavior, Search Console steps, and remaining business/privacy details that need confirmation. Set `VITE_SITE_URL` to the final HTTPS production origin before building the site. The example value in `.env.example` is reserved and is ignored when generating canonical URLs and sitemaps.
