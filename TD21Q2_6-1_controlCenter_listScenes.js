//run this from command prompt pointed at a harmony server
// control center documentation: https://docs.toonboom.com/help/harmony-20/scripting/dbscript/annotated.html

var envInput = "TCH_TheCatch"

ControlCentre.printToConsole("\n---started---\n")

var envList = ControlCentre.environments();
// go through all environments
for (var i = 0 ; i< envList.length ; i++){
    var selEnv = envList[i]
    var selEnv_name = selEnv.name

    // if this environment is the input environment, we will continue

    if( selEnv_name == envInput ){
        //do something
        ControlCentre.printToConsole("env [" + i +"] " + selEnv_name )

        // go through all jobs in this environment
    
        var selEnv_jobList = ControlCentre.jobs(selEnv)
        for( var j = 0 ; j < selEnv_jobList.length ; j++ ){
            
            var selJob = selEnv_jobList[j]
            var selJob_name = selJob.name
            ControlCentre.printToConsole("\tjob [" + j +"] " + selJob_name )
    
            // go through all scenes in this job
    
            var selJob_sceneList = ControlCentre.scenes(selJob)
            for( var k = 0 ; k < selJob_sceneList.length ; k++ ){
    
                var selScene = selJob_sceneList[k]
                var selScene_name = selScene.name
                var selScene_path = selScene.path
                ControlCentre.printToConsole("\t\tscene [" + k + "] " +selScene_name + "\t" + selScene_path )
            }
        }
    }
    else{
        //dont do anything
        ControlCentre.printToConsole("I don't care about : " + selEnv_name)
    }
}

ControlCentre.printToConsole("\n---finished---\n")

// ControlCenter -runScript C:\Github\ToonTools\TD_Course_2021_Q2\TD_6-1_controlCenter_listScenes.js