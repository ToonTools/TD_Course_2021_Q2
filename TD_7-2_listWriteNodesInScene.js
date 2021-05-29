function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}

function listWriteNodesInScene(){
	
	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()
	
    //TODO make this tidyer
    consoleWrite("\n" + sceneName + "\t" + projectPath)
	
	var writeNodes = node.getNodes(["WRITE"])
    
    for(n in writeNodes ){
        consoleWrite("\t " + n + " : " +writeNodes[n] )
    }

    consoleWrite("\n")

}

listWriteNodesInScene()

//for harmony standalone
//HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" "C:\Users\chris\Documents\BlueZoo\testHarmony\colourSpaceTest\colourSpaceTest.xstage"


//for control center
// ControlCenter -runStageScript "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot


