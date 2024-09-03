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
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "0770811929";
global.owner = process.env.OWNER_NUMBER || "0770811929";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pyZ1Y5WkpGbFM3a2x6bHRLU2oxbjlKZTUvU2FEbDV1dTkyR1RCcFhHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDlDeXNvSnZpTFQ3dEZhQW1KS29lcXVrdmthZnJhZ1NBZUwrc2oxZ2hDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS0dhVVpxcFFUR3hHL0pwOG9GUzBoZHdscjE1RmRvclc5Y0hzL2xkNDFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTY0NqLy9rSjc1d20wOG5UakxFNmU4WnkwVU1BR2lGOEhVVWtRRVZwK1NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCcDZDSGZOVkI3dzFHRGVqYWxRV3JSaTJkNEIwU3hQUHhJbjNXMzJFbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkltU3VVVXYwV21mR1JNcFQrWEhxdmM0MlY1elFDTkNSZVdKQnUxa01EbFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JMRnFIV245TnpiYnZxSDNHWmtVZWZORkxmTzRBTTNnR2pQRW8wWGUxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklMYmlTZUo2U3gwSnNoUFgxRkZ0Zmg4NXByQitGZFdKZnVaWFV2RVloRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ0VEpMNGx0Q2N1MVRFc0lmVENFb3RpajBxcU1nUG5hZlBOTmpSUzdoKzdSdUtRc0ZRYlNZdC9ZT0RNT0JlQmFMd2dsSnh5Rm5nM1YxbmRnOHJBekFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IjJmbWpPY3IzejU4dDZUZldmbGpHbWJ6Mms0cHY1cmN4TTJEaklHVTQ1em89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDdFNjFDQzVEMDZBOTk3NUNBQ0JFRDE3RTNEMDMzMTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTMzOTM2M30seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTRGRUI3QUE5MkExOTcwNjMxMUUzRjI4NDYzMjUxMDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTMzOTM2M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNEllWjdrMjJTYXlFWTVYcGFISW9sUSIsInBob25lSWQiOiI5NjM1YWNmYy04MTA0LTRhZWMtOTIzNC1hNTQ3YzI5MmMwYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTldHWGg3RU92SmpteStxVStGL3FpN0RZTW9vPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0cWJVL2RCNG5CSjFQazY3bEpTV0lCVXNHdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGUk1OVjkxMyIsIm1lIjp7ImlkIjoiNDA3NzA4MTE5Mjk6NDRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlpTwnZWy8J2WhvCdlpLwnZaK8J2VufCdlpTwnZW38J2WjvCdlovwnZaKIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKRHl0REFRMDYzYXRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxWXZONnpIV2ZVbUhJak5wTjFydmpjWmd6UFZ6WUV4ckZRVzdqb0hSakFnPSIsImFjY291bnRTaWduYXR1cmUiOiJCZ1A3d2VsNjY5TDd0a0VKdTl0MEJIdi85WThzU3pRV1BVbW5pejdyTUU1K3l0ci9POXFqODJKNittY2hnZytGZ3E1S28wS01ZYWE0NHJZOXgwZy9Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTk0yNklWUVhYU0dXUnZMdGx4QlRZQ3J4ZzBnSlp4Nk81cGN6dW5FSHdKZHE0TGJIVHVSOVNZbER1UmJVdHZmNzRITVhaV1NEbnFUQUxFRWhQUEJ4Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0MDc3MDgxMTkyOTo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbUx6ZXN4MW4xSmh5SXphVGRhNzQzR1lNejFjMkJNYXhVRnU0NkIwWXdJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzM5MzU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5CYyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
