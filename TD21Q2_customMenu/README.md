## Creating a custom menu
First the Harmony menu needs to be edited so that a new menu item exists
```
C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\resources\menus.xml
```
The packages location typically needs admin priveleges, so make a copy of it somewhere where you can save any edits before updating the master menus.xml. This file is easy to break so make sure to back up the original ( I save a copy as menus.xml_BAK )

##### add this line at ~line 661
``` html
<menu id="TD_2021_Q2" text="TD_2021_Q2"> </menu>
```
##### make sure to not remove existing `<menu>`, the code should look like this
![menu.xml screenshot](/images/customMenuLineNumbers.JPG "menu.xml screenshot")


## Adding items to that menu
Now that the menu exists, you can create a package that will add items to this menu when Harmony is initialised.

##### Put the content of this folder in the packages folder
```
C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ScriptingInterfaces\resources\packages
```

```
packages/
└── TD21Q2_customMenuw/
    ├── configure.js
    └── helloWirldInThisPackage.js
```

This speciffic configuration file will build 3 actions. 1 pointing to a function within the configuration file itself, 1 pointing to a function in the package folder, and 1 pointing a function in the *System Variable* location.

