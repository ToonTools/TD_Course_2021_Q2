function configure(packageFolder, packageName)
{
  if(about.isStageEssentials() || about.isStageAdvanced() || about.isPaintMode())
    return;

  ScriptManager.addView( { id : "TD_9_customView",
                           text : translator.tr("TD_9_customView"),
                           action : "createView in ./configure.js"} );
}
function createView()
{
  var view = require("./view.js");
  view.initView();
}
exports.configure = configure;