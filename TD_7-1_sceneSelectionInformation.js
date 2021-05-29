// get current scene name

// get user selection

// return current scene name & user selection


function getSceneSelectionInformation(){
	
	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()
		
	MessageLog.trace("sceneName : " 	+ sceneName) 
	MessageLog.trace("projectPath : " 	+ projectPath) 
}

