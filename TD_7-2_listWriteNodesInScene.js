function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}

function getSceneSelectionInformation(){
	
	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()
	
    //TODO make this tidyer
	consoleWrite("sceneName : " 	+ sceneName) 
	consoleWrite("projectPath : " 	+ projectPath) 
	
	var writeNodes = node.getNodes(["WRITE"])
    
    for(n in writeNodes ){
        consoleWrite("\t " + n + " : " +writeNodes[n] )
    }

}


getSceneSelectionInformation()

