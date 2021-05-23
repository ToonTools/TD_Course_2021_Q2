//run this from command prompt pointed at a harmony server

ControlCentre.printToConsole("\n---started---\n")

var envList = ControlCentre.environments();
// go through all environments
for (var i = 0 ; i< envList.length ; i++){
    var selEnv = envList[i]
    var selEnv_name = selEnv.name
    ControlCentre.printToConsole("environment [" + i +"] " + selEnv_name )

    // go through all jobs in this environment

    var selEnv_jobList = ControlCentre.jobs(selEnv)
    for( var j = 0 ; j < selEnv_jobList.length ; j++ ){
        
        var selJob = selEnv_jobList[j]
        var selJob_name = selJob.name
        ControlCentre.printToConsole("\tjob [" + j +"] " + selJob_name )

    }

}
//Retrieve the entire message log and print it out.  
//var log = ControlCentre.messageLog(); 
//ControlCentre.printToConsole(log); 

ControlCentre.printToConsole("\n---finished---\n")


// ControlCenter -runScript C:\Github\ToonTools\TD_Course_2021_Q2\TD_6-1_controlCenter_listScenes.js

