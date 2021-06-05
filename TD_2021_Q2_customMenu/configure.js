function configure(packageFolder, packageName)
{
  if (about.isPaintMode())
    return;

  //Create Menu items
  ScriptManager.addMenuItem( { targetMenuId : "TD_2021_Q2",
                               id           : "TD_2021_Q2_1",
                               text         : "Say Hi",
                               action       : "SayHi in ./configure.js"} );
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
