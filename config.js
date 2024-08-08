//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Bilal4509021/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://wa.me/+989363079021";
global.website = process.env.GURL || "https://wa.me/+989364509021";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e37953804a8b1d1a4cf03.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "989363079021";
global.owner = process.env.OWNER_NUMBER || "989363079021";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e37953804a8b1d1a4cf03.jpg,https://f.uguu.se/jWFWSBXm.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZIYUhzYUNXNmFoTXREYXVnaTA1djFReWFjOFNiTGV6OTEzSDlDT3dWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHpVOERNUkpVNk1yY09wR1JNR3Z4dHhTMmdRZzI5cEdRVkJ0by93S04xTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS2ZzcUYzOENlN2NzcnZOb0psdFZPN3p6dlRjWTJUMWhmMHVWbFA0K0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdUtJaUYrQlRKUDA5R3dDRThrd1dMaEVvUUpBNUFvUmI0NjRzR0RsU3gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNS0t6UE5zKy9DUVh5TDJHaVViY0FaU1MwM2djNk51bWpPL3hMZXRkazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlmZmdxa0tWSWVib21QcnZnRlF0UWVYKzdOTjFPWWZMajdFcUJ2S3VBVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9wMzlibi9kK1cvT2NVMHQwWTdKSitxTER5bWRUM0hnU1FmK2hXT2xudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamRGK1lOWlVHNjdjU1lpQVdLb1NDbVd6SFAzLzZoZGhxUHVlWU9NbDVUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJXRmFaZmlqdUFid2ZHUzV1aE9Qa3lsWG45OHFyMEpTS0czSHhWQk45N1VLRXh6ZVNWaWpSTlRjb0hhamYvSEV3UVE5QWpIUDZuaTBpenFPSUs1K2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJiTXhOM2NHaU1Kd1Z5MGlEY3BHTWhVb0FvamxhV2krekNRTTErUHk0Q3l3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTM2MzA3OTAyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQzZERjgyNTJEMDYzQ0ZCOUIxRjM4M0FBRDE3Q0I0MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTAyODgwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkzNjMwNzkwMjFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEZENTA1NDQ1Rjc2NTJERDMxQUEwNjFDOTU1N0FCM0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzEwMjg4MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieXZWdmVOSTdTUzZJVEFBZXJuYm5KQSIsInBob25lSWQiOiIzMmM1MDMyMC01OTQ2LTQ1YmMtYmQwMy03NDE5ODE2MWRkODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclp6cWxsQVMxMyttWW0vWklPZ0c1WHFGeS9NPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1za3gyWEthVlY0RXpxYXg0UEVzelh4S3NVST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJITDY3QzVYNiIsIm1lIjp7ImlkIjoiOTg5MzYzMDc5MDIxOjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFsb25l4oCMOjkwMjEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lLa3lJSUNFSTd0MGJVR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZuSFB2VFRuKy9OOG5JWnc1VW5GM1hUNUVoUjJSaVJ0Z0NwMk1ORUcyR2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpNYTJjWDJVRk03U1FubzZDQTlTbDViZUNpc1QyRnU1SmxtOWFCMHpMbmdicTdwcG5uZEQ1MDNzVlhNL0t2Z211RWN3dDJ4cVZ4dFYwNW1tZ2g5NUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmOWNYODJzVG9QTGJHT3h2MnZvNDZRaklUeHBacHF3WHNBZHBYQm45NDJIbHprekVuMEhrSlM3TFQ2MTVLTkl3NTBscUM5Uk8zZjFvdXFLRXdKUWhnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk4OTM2MzA3OTAyMTozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNXh6NzAwNS92emZKeUdjT1ZKeGQxMCtSSVVka1lrYllBcWRqRFJCdGhwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTAyODc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwxMSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "MILAD",
  ownername: process.env.OWNER_NAME || "MILAD:9021",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
