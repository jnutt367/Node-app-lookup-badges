var fs = require("fs");


function mergeValues(values, content) {
    //Cycle over the keys
    for (var key in values) {
        //Replace all {{key}} with the values from the values object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    //return merged content 
    return content;
}


function view(templateName, values, res) {
    //Read from the template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', { encoding: "utf8" });
    //Insert values into the content
    fileContents = mergeValues(values, fileContents);
    //Write out the contents to the response
    res.write(fileContents);

}

module.exports.view = view;