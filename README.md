# Google Drive Upload Form

This is a password-protected form based on Google Apps script which enables others to upload multiple files to your Google Drive. The advantages are

* as opposed to e-mail, the files go directly to where they belong (in case you use Google drive as your main file storage),
* as opposed to sharing a Google Drive folder, no Google account is required,
* as opposed to services like wetransfer.com, no intermediate steps (uploading, downloading) are necessary.
 
Currently the texts in the form are written in German, you need to translate them into your language.

In order to use this form, create new script in your Google Drive (https://script.google.com), paste the code of code.gs into it, save it, add the password in the script properties (see code.gs for instructions), append the other html files to it, and deploy it as a [web app](https://developers.google.com/apps-script/guides/web). Change styling, text and input fields as you like. You can also include this web app in an iframe on your website.

For demonstration purposes, the form here is from a fictional concert photography agency, enabling photographers to upload their photos. They have to input their name, the name and the date of the concert. Multiple images files can be selected and uploaded. During the upload, it is shown which file is currently processed, and also when all files have been uploaded.

The script creates a subfolder (whose name consists of the mentioned inputs above) in a prescribed Google Drive folder (add its ID in code.gs) with the uploades images in it. The script also sends an e-mail (add the e-mail in code.gs) to inform about this upload.

Notice that this script is based on the script "Work Collector" by Doug Saunders ([Link](https://script.google.com/d/1x3p9ZAv-SafEK06r_Vr7fVuUNtEfBg1SGhmSYWjQ0kuPTk-y55a7Nink/edit)). Among other things, I have added the password protection and the feature to upload multiple files.
