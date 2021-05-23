// make a text fileCreatedDate

var userName 			= about.getUserName()
var myPath 				= "C:\\Users\\" + userName + "\\Desktop\\"
var fileName			= "myTextFile.txt"
var fileCompletePath	= myPath + fileName


function makeTextFile(){
	
	var myFile = new File(fileCompletePath)
	if( myFile.exists){
		MessageLog.trace("myFile exists")
	}
	else{
		MessageLog.trace("MyFile does not exists")
		
		myFile.open(FileAccess.WriteOnly)
		myFile.writeLine("my initial message")
		myFile.close()

	}
	
	MessageLog.trace("the file should be at = " + fileCompletePath)
	
}



// write to that text file

// read from that text file

// actions should have a message log output

