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

function jsonFormat(indent)
{
    if (typeof(indent)==='undefined') indent = 4;

    var documentText = document.text();

    var jsonParsed = JSON.parse(documentText);
    var formatted = JSON.stringify(jsonParsed, null, parseInt(indent));

    if (documentText === formatted){
        formatted = JSON.stringify(jsonParsed);
    }
    document.clear();
    document.insertText(0, 0, formatted);
}
