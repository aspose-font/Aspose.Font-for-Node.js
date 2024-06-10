const AsposeFont = require('asposefontnodejs');

const font_file = "./fonts/Montserrat-Regular.eot";

console.log('Aspose.Font for Node.js via C++ example');

AsposeFont().then(AsposeFontModule => {
    //call AsposeFontConvert to convert font
    const json = AsposeFontModule.AsposeFontConvertToWOFF(font_file,AsposeFontModule.FontType.OTF);
    console.log("AsposeFontConvertToWOFF : %O",  json.errorCode == 0 ? font_file + ' => ' + json.fileNameResult : json.errorText);
});
