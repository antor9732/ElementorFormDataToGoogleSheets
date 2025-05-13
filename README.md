**ElementorFormDataToGoogleSheets**
ElementorFormDataToGoogleSheets is a Google Apps Script that connects Elementor Pro forms to Google Sheets, automatically saving form submissions. Ideal for Elementor form to Google Sheets integration, it’s easy to set up with no coding required.
 (Placeholder: Add GIF of integration)
Features

Syncs Elementor form data to Google Sheets in real-time.
Customizes sheet names, column order, and excludes fields.
Handles nested form data cleanly.
Optional email notifications for submissions.
Open-source under MIT License.

Prerequisites

Elementor Pro form in WordPress.
Google Sheets with Apps Script access.

Setup Instructions

Copy Script:

Get the code from script.gs in this repository.


Create Apps Script:

In Google Sheets, go to Extensions > Apps Script.
Paste the code and save (e.g., "ElementorFormDataToGoogleSheets").


Deploy Web App:

Click Deploy > New Deployment > Web App.
Set Execute as: Me, Access: Anyone.
Copy the Web App URL.


Set Webhook:

In WordPress, edit your Elementor Pro form.
Add a Webhook action with the Web App URL.


Test:

Open the Web App URL in a browser; it should show:Yepp this is the webhook URL, request received


Submit a test form to verify data in the sheet.


Email Notifications (Optional):

Set emailNotification = true and update emailAddress in the script.
Redeploy the script.



 (Placeholder: Add screenshot of deployment)
Optional Fields
Customize your Elementor form to Google Sheets output:

e_gs_SheetName: Set sheet tab name (default: form name).
Example: Hidden field with value MyFormData.


e_gs_order: Define column order (e.g., name,email,phone).
e_gs_exclude: Exclude fields (e.g., form_id,submit_time).

Add as hidden fields in your Elementor form.
FAQ
How to connect Elementor to Google Sheets?
Use ElementorFormDataToGoogleSheets. Deploy the script as a web app and set the webhook in your form. See Setup Instructions.
Can I customize the sheet name?
Yes, use a hidden field e_gs_SheetName in your form.
How to exclude fields?
Add a hidden field e_gs_exclude with comma-separated field names.
Does it handle nested data?
Yes, nested data is flattened for clean output.
Troubleshooting

No data: Check webhook URL and form submission.
Permission error: Ensure web app allows "Anyone" access.
Email issues: Verify emailNotification and emailAddress.

Report issues in the Issues tab.
Contributing

Fork the repo.
Create a branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add feature").
Push (git push origin feature/your-feature).
Open a Pull Request.

License
MIT License. See LICENSE.
Support

⭐ Star this repo on GitHub.
Share in WordPress, Elementor, or Google Sheets communities.
Report bugs via Issues.

Updated: May 13, 2025
