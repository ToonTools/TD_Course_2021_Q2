function configure(packageFolder, packageName)
{
    if(about.isStageEssentials() || about.isStageAfvanced() || about.isPaintMode())
    return

    //create view
    ScriptManager.addView({ id      : "TD_2021_Q2_customWindow",
                            text    : translator.tr("TD_2021_Q2_customWindow"),
                            action  : "createView in ./configure.js"
    })
}

function createView(){
    var vew = requre("./view.js")
    view.initView()
}

exports.configure = configure