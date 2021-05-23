var userName 			= about.getUserName()
var myPath 				= "C:\\Users\\" + userName + "\\Desktop\\"
var fileName			= "myTextFile.txt"
var fileCompletePath	= myPath + fileName

function makeTextFile(){
	
	var myFile = new File(fileCompletePath)
	if( myFile.exists){
		MessageLog.trace("myFile exists")
		var message = "The file exists, do you want to add to it? "
		var ans 	= MessageBox.warning(message, MessageBox.Yes , MessageBox.No )
		
		//lineEdit dialog, take the answer and use that to write to the "myFile" .txt file
		
		if(ans == MessageBox.Yes){
			//add new line
			myFile.open(FileAccess.Append)
			myFile.writeLine("Additional information added to the file")
			myFile.close()
			MessageLog.trace("line added to text file")
		}else{
			//do nothing
			MessageLog.trace("nothing added to the text file")
		}
	}
	else{
		MessageLog.trace("MyFile does not exists")
		myFile.open(FileAccess.Append)
		myFile.writeLine("Text file now created")
		myFile.close()
	}
	MessageLog.trace("the file should be at = " + fileCompletePath)
}

function readTextFile(){
	var fileToRead = new File(fileCompletePath)
	if( fileToRead.exists){
	// then we want to read the file
		MessageLog.trace("will now read the text file")
		fileToRead.open(FileAccess.ReadOnly)
		var content = fileToRead.read()
		
		// make dialog box with readfilecontent as a message
		//https://docs.toonboom.com/help/harmony-20/scripting/script/classDialog.html
		
		var d = new Dialog()
		d.title = fileName
		
		var fileContent = new Label
		fileContent.text = content
		
		//var fileContent = new LineEdit
		//fileContent.text = content
		
		d.add(fileContent)
		
		d.exec()
		
		
		
		
		
		
		//MessageLog.trace("\n\n"+content+"\n\n")
	}else{
		MessageBox.information("File does not exist")
	}
}
