function configure(packageFolder, packageName)
{
  if (about.isPaintMode())
    return;

  //Create Menu items
  ScriptManager.addMenuItem( { targetMenuId : "PLAY_MENU_ID",
                               id           : "MiniPlaybackShowDialogMenuID",
                               text         : "Mini Playback...",
                               action       : "MiniPlaybackDialog in ./configure.js",
                               shortcut     : "MiniPlayDialogShortcut" } );
}

//Optional init function (not mandatory)
function init()
{
  MessageLog.trace("Run your initialization script here!");
}

exports.configure = configure;
exports.init = init;
