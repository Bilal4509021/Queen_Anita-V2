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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZZU2QwdGNnWjAyVWJhNnNSdjhQNitBc2dZUjlEQ0VKUDBhUmZ2S3pHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2I5MXhYUTVVU3Z0M295VW1qQnYrVXlJWGp2ZU5Db2llM0FDcjdPNk1TUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR25JZ3hsam0xaHJvNzFPUWZsUWRYWlVKZVpNZTkwSEQ2QVlNdTA3ZldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdlgxcktPSFNnVzFoSkYzK1V4REpHVzk5S1ZRVFVEaDlsR2RpOXJoK2c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNTjQrVVozdDFTcFZKczkvOTI4dnVHdGt4eTVKb1BVZDBnU0lOd2FvMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDT2JlbEgycUgraTM5YUN6R2NEZlFzL0J6b1NndTBxbzdaazZoRmgvaFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hoSWw2c3Fhd1JXN1NkWDIrVDNIdXUrQi9LcVpYKzNvWWtHZXRWUmxscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGZsc0VHb3ZHclFlNTRjMk4rWmpId3VYY29qSnVNbTN4c1N4d0pGTnYwRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5ncVd5RndxRUlXZkFpR3k0ODdlV0lrSTVQcGg2YnpnYzJUM3Y4T09sN0E4Mm5iWHR3bnJTeitjTlpacXcza3FlYUxOdFp5dlBGM1BiV3FRWjF3aGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IjBPU3dleEpkTWZteEg1UXVnVHo3eWM5Q292WlFmMHVYZ2hyWnFLUSt4YXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MzYzMDc5MDIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYwNDNEOTQ0QTk5NzQ3QjQ3OUI0OEU1M0EyNzg0NzVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0NzQ3NzF9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTM2MzA3OTAyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOUQ4OURCQTY5NkI1NkQ2NEU5NDRBQzRGNEUzN0JDRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDc0NzcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5c1E3dlFzS1FuS1Rhd1h3ZHYzWDlRIiwicGhvbmVJZCI6IjU4NGMzNGQwLWYzYzMtNDk0ZS05NjhiLWQwYmRiZTZhYWE4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYUJMUGhidSt4MnF3Q1RKak1TNHQ1NzFlZms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGppVjJNTDNUNm1lL3piU3JhdWxKNnhiQXVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxYMVZUREFHIiwibWUiOnsiaWQiOiI5ODkzNjMwNzkwMjE6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWxvbmXigIw6OTAyMSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUtreUlJQ0VJWENxN1VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoidm5IUHZUVG4rL044bkladzVVbkYzWFQ1RWhSMlJpUnRnQ3AyTU5FRzJHaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2ZxRFErZzh1cHNqcGZMU1gwa2dCOHlFOGpROTRPbXZmdTErZWRIdEhYMVdtd21ETlN0K3p1VWVtUTRqdHRtNHBUQXVqQ2hLYmJYbjRSeGtOMXNXQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IlBWSlRtWnVaL25SbGZXV3I4S3BBOWNZcjBJNldJOXhjaXpIbzJDeGN1LzhGNHFicjNOQlM2NWdoNzJGZXdiUTdsZytPSU9OeWhNL0RQMzBxek9IUGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5MzYzMDc5MDIxOjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI1eHo3MDA1L3Z6Zkp5R2NPVkp4ZDEwK1JJVWRrWWtiWUFxZGpEUkJ0aHAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI0NzQ3NzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDExIn0="
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
