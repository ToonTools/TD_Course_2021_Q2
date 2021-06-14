/*
Input : speciffic scene
Output: message output of scene, its path & all names of write nodes in the scene

How to use: 
    within Harmony :  add listWriteNodesInScene() as a button and press it in the scene. output will me in message log.
    Command Prompt :    HarmonyPremium -compile <this script path> <Harmony scene path>
                        HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" "C:\Users\chris\Documents\BlueZoo\testHarmony\colourSpaceTest\colourSpaceTest.xstage"

See Notes/Readme.md for more information on executing command prompt in harmony/control center
*/

// helper function so that messages output through command prompt or through message log ( wherever the script is being run )
function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}

function listWriteNodesInScene(){

	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()

    // display the current location information
    consoleWrite("\n" + sceneName + "\t" + projectPath)
	
	var writeNodes = node.getNodes(["WRITE"])
    
    // list all write nodes in the scene
    for(n in writeNodes ){
        consoleWrite("\t " + n + " : " +writeNodes[n] )
    }

    consoleWrite("\n")
}

// callint the listWriteNodesInScene() function if this file is being targed by command prompt
listWriteNodesInScene()


//Controlcenter -runStageScript "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot
