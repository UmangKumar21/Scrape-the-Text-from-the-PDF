function readImageData(){
  let id='Path_ID_of_uploaded_pdf_in_Google_drive';
  let folder=DriveApp.getFolderById(id);
  let files=folder.getFilesByType('application/pdf');
  while(files.hasNext()){
    let blob=files.next();
    let name=blob.getName();
    let mytitle=name.split(".")[0]
    let fileObject={
      title : mytitle,
      mimeType : 'application/pdf'
    }
    let docFile=Drive.Files.insert(fileObject,blob,{ocr:true});
    let doc=DocumentApp.openById(docFile.id);
    let text=doc.getBody().getText();
    Logger.log(text)
  }
