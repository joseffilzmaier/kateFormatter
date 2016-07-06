var katescript = {
    "author": "Josef Filzmaier <j.filzmaier@gmx.at>",
    "license": "LGPLv2+",
    "revision": 1,
    "kate-version": "16.04",
    "functions": ["jsonFormat"],
    "actions": [
        {   "function": "jsonFormat",
            "name": "Formats Json",
            "category": "Editing",
            "shortcut": "Ctrl+Shift+J",
            "interactive": "false"
        }
    ]
}; // kate-script-header, must be at the start of the file without comments

require("json2.js");

function jsonFormat()
{
    var documentText = document.text();
    debug(documentText);

    var jsonParsed = JSON.parse(documentText);
    var formatted = JSON.stringify(jsonParsed, null, 4);
    debug(formatted);

    if (documentText === formatted){
        formatted = JSON.stringify(jsonParsed);
    }
    document.clear();
    document.insertText(0, 0, formatted);
}
