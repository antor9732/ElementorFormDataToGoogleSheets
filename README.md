ElementorToGoogleSheets
Google Apps Script to connect Elementor Pro Forms to Google Sheets via webhook, with support for custom sheet names, column ordering, and exclusion.
Overview
This script captures form submissions from Elementor Pro Forms and stores them in a Google Sheet. It supports:

Automatic sheet creation based on form name or a custom field.
Custom column ordering via a form field.
Exclusion of specific columns.
Optional email notifications for new submissions.

Setup

Open Google Sheets:

Create or open a Google Sheet where form data will be stored.
Go to Extensions > Apps Script.


Paste the Script:

Copy the script from Code.gs in this repository.
Paste it into the Apps Script editor and click Save.


Deploy as Web App:

Click Deploy > New Deployment.
Select Web App.
Set:
Execute as: Me (your email).
Who has access: Anyone (or Anyone, even anonymous, if allowed).


Click Deploy and authorize permissions.
Copy the Web App URL provided.


Configure Elementor Pro Form:

In Elementor, create or edit a form.
Add a Webhook action and paste the Web App URL.
Ensure the form has a form_name field (default in Elementor).



Usage

Submit the Elementor form to send data to the Google Sheet.
A new sheet is created (named after form_name or a custom field) if it doesn’t exist.
Form data is added as rows, with headers automatically generated from form fields.

Optional Form Fields
Add these hidden fields to your Elementor form to customize behavior:

e_gs_SheetName: Set the Google Sheet name (default: form_name).
Example: ContactFormData


e_gs_order: Comma-separated list of column names in desired order.
Example: name,email,phone


e_gs_exclude: Comma-separated list of columns to exclude.
Example: submit_time,form_id



Testing

Paste the Web App URL in a browser. You should see: Yepp this is the webhook URL, request received.
Submit a test form in Elementor and check the Google Sheet for new data.
Enable email notifications (edit emailNotification and emailAddress in the script) to receive alerts for new submissions.

Troubleshooting

No data in sheet: Verify the Web App URL is correct in Elementor and the script is deployed with anonymous access.
Permission errors: Ensure you authorized all required permissions during deployment.
Server errors: Check Apps Script Executions logs for details (View > Executions).
Email issues: Confirm emailAddress is valid and Google’s email quota isn’t exceeded.

Contributing
Feel free to fork this repository, submit issues, or create pull requests to improve the script.
License
MIT License
Last updated: May 13, 2025
