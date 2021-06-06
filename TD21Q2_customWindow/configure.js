function configure(packageFolder, packageName){
  if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;

  ScriptManager.addView( { id : "TD21Q2_customWindow",
                           text : translator.tr("TD21Q2_customWindow"),
                           action : "createView in ./configure.js"} );
}
function createView(){
  var view = require("./view.js");
  view.initView();
}

exports.configure = configure;