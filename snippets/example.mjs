import AsposeFont from 'asposefontnodejs';

const font_file = "./fonts/Lora-Regular.ttf";
const font_file_type1 = "./fonts/acade1.afm";
const font_file_otf = "./fonts/Montserrat-Regular.eot";
const font_file_cff = "./fonts/12380_C0_0.cff";

console.log('Aspose.Font for Node.js via C++ example');

const AsposeFontModule = await AsposeFont();

let json;

//AsposeFontAbout - Get info about Product
json = AsposeFontModule.AsposeFontAbout();
console.log("AsposeFontAbout => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

//AsposeFontGetInfo - get metadata information
json = AsposeFontModule.AsposeFontGetInfo(font_file);
console.log("AsposeFontGetInfo => %O",  json.errorCode == 0 ? json.records.reduce((ret, a) => ret +
    "\nNameId : " + a.NameId
  + "; PlatformId : " + a.PlatformId
  + "; PlatformSpecificId : " + a.PlatformSpecificId
  + "; LanguageId : " + a.LanguageId
  + "; Info : " + a.Info,"") : json.errorText);

//AsposeSetInfo - set metadata info into font
const nameId = AsposeFontModule.TtfNameTableNameId.Description;
const platformId = AsposeFontModule.TtfNameTablePlatformId.Microsoft;
const platformSpecificId = AsposeFontModule.TtfNameTableMSPlatformSpecificId.Unicode_BMP_UCS2.value;
const langID = AsposeFontModule.TtfNameTableMSLanguageId.English_United_States.value;
const text = "Updated description";
json = AsposeFontModule.AsposeFontSetInfo(font_file, nameId, platformId, platformSpecificId, langID, text);
console.log("AsposeFontSetInfo => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);
    

//AsposeFontConvert - convert to supported formats
json = AsposeFontModule.AsposeFontConvert(font_file,AsposeFontModule.FontType.TTF,AsposeFontModule.FontSavingFormats.WOFF);
console.log("AsposeFontConvert => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

//AsposeFontConvertToTTF - convert to TTF
json = AsposeFontModule.AsposeFontConvertToTTF(font_file_type1,AsposeFontModule.FontType.Type1);
console.log("AsposeFontConvertToTTF : %O",  json.errorCode == 0 ? font_file + ' => ' + json.fileNameResult : json.errorText);

//AsposeFontConvertToWOFF - convert to WOFF
json = AsposeFontModule.AsposeFontConvertToWOFF(font_file_otf,AsposeFontModule.FontType.OTF);
console.log("AsposeFontConvertToWOFF : %O",  json.errorCode == 0 ? font_file + ' => ' + json.fileNameResult : json.errorText);

//AsposeFontConvertToWOFF2 - convert to WOFF2
json = AsposeFontModule.AsposeFontConvertToWOFF2(font_file_cff,AsposeFontModule.FontType.CFF);
console.log("AsposeFontConvertToWOFF2 : %O",  json.errorCode == 0 ? font_file + ' => ' + json.fileNameResult : json.errorText);

//AsposeFontConvertToSVG - convert to SVG
json = AsposeFontModule.AsposeFontConvertToSVG(font_file,AsposeFontModule.FontType.TTF);
console.log("AsposeFontConvertToSVG : %O",  json.errorCode == 0 ? font_file + ' => ' + json.fileNameResult : json.errorText);
