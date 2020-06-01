// in the script properties of this google script you have to
// add a password entry with the key "password"

// e-mail address to which infos about new uploads are sent
var emailTo = "...EMAIL...";

// id of the folder for the uploads
var folderId = "...FOLDER ID...";
 
var folder = DriveApp.getFolderById(folderId);

function doGet(request) {
  return HtmlService.createTemplateFromFile("main").evaluate().setTitle("Upload der Fotos");
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function createSubFolder(name, concert, date) {
  var subfolder = folder.createFolder(date + " - " + concert + " - " + name);
  var subfolderId = subfolder.getId();
  return subfolderId;
}

function checkPassword(password) {
  var correctPassword = ScriptProperties.getProperty("password");
  return (correctPassword == password);
}  

function uploadFileToDrive(subfolderId, base64Data, fileName) {
  var subfolder = DriveApp.getFolderById(subfolderId);
  var splitBase = base64Data.split(",");
  var type = splitBase[0].split(";")[0].replace("data:","");
  var byteCharacters = Utilities.base64Decode(splitBase[1]);
  var myBlob = Utilities.newBlob(byteCharacters, type, fileName);
  var file = subfolder.createFile(myBlob);
  return subfolderId;
}


function sendInfoMail(name, number) {
  var subject = "Neuer Upload";
  var recipient = emailTo;
  var body = name + " hat " + number + " Fotos über das Formular hochgeladen."
  GmailApp.sendEmail(recipient, subject, body);
}  

