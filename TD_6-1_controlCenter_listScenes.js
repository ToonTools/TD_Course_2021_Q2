//run this from command prompt pointed at a harmony server

ControlCentre.printToConsole("\n---started---\n")

var list = ControlCentre.environments();
for (var i = 0 ; i< list.length ; i++){
    var selectedEnvironment = list[i]
    ControlCentre.printToConsole("selectedEnvironment = " + selectedEnvironment )
}
//Retrieve the entire message log and print it out.  
//var log = ControlCentre.messageLog(); 
//ControlCentre.printToConsole(log); 

ControlCentre.printToConsole("\n---finished---\n")


// ControlCenter -runScript C:\Github\ToonTools\TD_Course_2021_Q2\TD_6-1_controlCenter_listScenes.js

