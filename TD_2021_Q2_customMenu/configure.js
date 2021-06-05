function configure(packageFolder, packageName)
{
  if (about.isPaintMode())
    return;

  //Create Menu items
  // access script that is written in this configuration file
  ScriptManager.addMenuItem( { targetMenuId : "TD_2021_Q2",
                               id           : "TD_2021_Q2_1",
                               text         : "Say Hi",
                               action       : "SayHi in ./configure.js"} );
  // access script written in %script% folder
  ScriptManager.addMenuItem( { targetMenuId : "TD_2021_Q2",
                               id           : "TD_2021_Q2_2",
                               text         : "Find Unconnected Nodes",
                               action       : "findUnconnectedNodes in ./TD_8-2_findUnconnectedNodes.js"} );
                  
}

//Optional init function (not mandatory)
function init()
{
  MessageLog.trace("Run your initialization script here!");
}

function SayHi(){
  MessageBox.information("Hi!")
}

exports.configure = configure;
exports.init = init;
