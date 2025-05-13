<h1>ElementorFormDataToGoogleSheets</h1>
<strong>ElementorFormDataToGoogleSheets</strong> is a Google Apps Script that connects <strong>Elementor Pro forms</strong> to <strong>Google Sheets</strong>, automatically saving form submissions. Ideal for <strong>Elementor form to Google Sheets integration</strong>, it’s easy to set up with no coding required.

<img src="https://grok.com/chat/screenshots/demo.gif" alt="Demo" /> <em>(Placeholder: Add GIF of integration)</em>
<h2>Features</h2>
<ul>
 	<li>Syncs <strong>Elementor form data to Google Sheets</strong> in real-time.</li>
 	<li>Customizes sheet names, column order, and excludes fields.</li>
 	<li>Handles nested form data cleanly.</li>
 	<li>Optional email notifications for submissions.</li>
 	<li>Open-source under MIT License.</li>
</ul>
<h2>Prerequisites</h2>
<ul>
 	<li><strong>Elementor Pro</strong> form in WordPress.</li>
 	<li><strong>Google Sheets</strong> with Apps Script access.</li>
</ul>
<h2>Setup Instructions</h2>
<ol>
 	<li><strong>Copy Script</strong>:
<ul>
 	<li>Get the code from <code>script.gs</code> in this repository.</li>
</ul>
</li>
 	<li><strong>Create Apps Script</strong>:
<ul>
 	<li>In <strong>Google Sheets</strong>, go to <strong>Extensions &gt; Apps Script</strong>.</li>
 	<li>Paste the code and save (e.g., "ElementorFormDataToGoogleSheets").</li>
</ul>
</li>
 	<li><strong>Deploy Web App</strong>:
<ul>
 	<li>Click <strong>Deploy &gt; New Deployment &gt; Web App</strong>.</li>
 	<li>Set <strong>Execute as</strong>: Me, <strong>Access</strong>: Anyone.</li>
 	<li>Copy the <strong>Web App URL</strong>.</li>
</ul>
</li>
 	<li><strong>Set Webhook</strong>:
<ul>
 	<li>In WordPress, edit your <strong>Elementor Pro form</strong>.</li>
 	<li>Add a <strong>Webhook</strong> action with the <strong>Web App URL</strong>.</li>
</ul>
</li>
 	<li><strong>Test</strong>:
<ul>
 	<li>Open the <strong>Web App URL</strong> in a browser; it should show:
<pre><code>Yepp this is the webhook URL, request received
</code></pre>
</li>
 	<li>Submit a test form to verify data in the sheet.</li>
</ul>
</li>
 	<li><strong>Email Notifications</strong> (Optional):
<ul>
 	<li>Set <code>emailNotification = true</code> and update <code>emailAddress</code> in the script.</li>
 	<li>Redeploy the script.</li>
</ul>
</li>
</ol>
<img src="https://grok.com/chat/screenshots/setup.png" alt="Setup" /> <em>(Placeholder: Add screenshot of deployment)</em>
<h2>Optional Fields</h2>
Customize your <strong>Elementor form to Google Sheets</strong> output:
<ul>
 	<li><strong><code>e_gs_SheetName</code></strong>: Set sheet tab name (default: form name).
<ul>
 	<li>Example: Hidden field with value <code>MyFormData</code>.</li>
</ul>
</li>
 	<li><strong><code>e_gs_order</code></strong>: Define column order (e.g., <code>name,email,phone</code>).</li>
 	<li><strong><code>e_gs_exclude</code></strong>: Exclude fields (e.g., <code>form_id,submit_time</code>).</li>
</ul>
Add as hidden fields in your <strong>Elementor form</strong>.
<h2>FAQ</h2>
<h3>How to connect Elementor to Google Sheets?</h3>
Use <strong>ElementorFormDataToGoogleSheets</strong>. Deploy the script as a web app and set the webhook in your form. See <a href="https://grok.com/chat/28913607-a70d-4c1f-a99c-367ae26c307b#setup-instructions">Setup Instructions</a>.
<h3>Can I customize the sheet name?</h3>
Yes, use a hidden field <code>e_gs_SheetName</code> in your form.
<h3>How to exclude fields?</h3>
Add a hidden field <code>e_gs_exclude</code> with comma-separated field names.
<h3>Does it handle nested data?</h3>
Yes, nested data is flattened for clean output.
<h2>Troubleshooting</h2>
<ul>
 	<li><strong>No data</strong>: Check webhook URL and form submission.</li>
 	<li><strong>Permission error</strong>: Ensure web app allows "Anyone" access.</li>
 	<li><strong>Email issues</strong>: Verify <code>emailNotification</code> and <code>emailAddress</code>.</li>
</ul>
Report issues in the <a href="https://github.com/antor9732/ElementorFormDataToGoogleSheets/issues">Issues tab</a>.
<h2>Contributing</h2>
<ol>
 	<li>Fork the repo.</li>
 	<li>Create a branch (<code>git checkout -b feature/your-feature</code>).</li>
 	<li>Commit changes (<code>git commit -m "Add feature"</code>).</li>
 	<li>Push (<code>git push origin feature/your-feature</code>).</li>
 	<li>Open a Pull Request.</li>
</ol>
<h2>License</h2>
MIT License. See <a href="https://grok.com/chat/LICENSE">LICENSE</a>.
<h2>Support</h2>
<ul>
 	<li>⭐ Star this repo on GitHub.</li>
 	<li>Share in <strong>WordPress</strong>, <strong>Elementor</strong>, or <strong>Google Sheets</strong> communities.</li>
 	<li>Report bugs via <a href="https://github.com/antor9732/ElementorFormDataToGoogleSheets/issues">Issues</a>.</li>
</ul>
<em>Updated: May 13, 2025</em>