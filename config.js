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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09XM2tNZ0Y3a2pqODc1bHR0RUI5ek0ySHQvQlZRSTIyNEdGK2NlRG0yaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGRXTjNSMyt0WDBhRDNCWndMeGF2ZzVya2s0Y3ZSMFVOWmZDZmRIY2EwND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT3JYeUw5cGhHczIvUFJ4UWMrQWp2a2dFUFQ3dVRrQWRxdzBEa08vcGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSa0I4RG9KdUVaZEQ5S2JNZkhXNlpoeDdSR3BZMkpRRkFsYlZweEpkWFV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJWm9KOEFveWs3N3E0Zk42K21pcEdRWjNQL0EwZHJaUkhTNU5jTklMbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkwdFlMYmljNk94OWFKNW42SDMrSjYxcCtIRnBXelVGMUt2MHFoQ2hXWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURFWGk2T3pOWmVVQXZLQ0l1SU9VZDJaODdLb0tIU3NkU3laRWVaOG9FZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFZIeFhIc0NoaUxoeTRYbmxiL1FOUVFLb1V0SEVrVnR6YmNXcHZTTTh6RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN1RldOUmNlbS9yeGo5U3lxclM0anVMNis0V2xZVHgyRWtKZXBXempRRi9sZi9LZm9vcyt1dklDa3JHY2JlN0pGWjYzUFBRdWNjbERIT1F4MXNpbWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6Im5HSnFQNGxwemp6WThpMXFxZHV3YVlkYmxISE5pNUxTcUxSeHlFVDl3ODA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNUbnZycUFYUlphc0dDcjFvWlhobGciLCJwaG9uZUlkIjoiNjUwZTNlOTUtYjVlMy00NmQwLWJhZDgtNDdlZDA1ODU2MjQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HU2JnVDRJRFZCTGVCK2RReDRzRldYT0pNWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMQzZieTVyMjZiNjJwRDNoOUVyamlxVE1HNlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlpLRkdMRkYiLCJtZSI6eyJpZCI6IjQwNzcwODExOTI5Ojg2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlbnwnZaU8J2VsvCdlobwnZaS8J2WivCdlbnwnZaU8J2Vt/Cdlo7wnZaL8J2WiiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjd5dERBUXhZajd0d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicVl2TjZ6SFdmVW1ISWpOcE4xcnZqY1pnelBWellFeHJGUVc3am9IUmpBZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR1hDb0h1YUFxNG5LaEVQaHRLWURwMWtPQzV5UE1QeERqTjVMOEtoTHBQVmFKbHZnaXR0SExjSkFteUhoTko5TGl3QWwyU2pTNk1TcHVsdGNOZnpMQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Imt0bEhEUUlIblhpaWZwSGdVRVdTTXI2K2xmeXd2TllhSEp4a2RqZDExeXU2Qk13ZWZuZUlMTkIvbUIxM2V3QXlCWS9NVkZaQzFaaVZyYkxCZkhua2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDA3NzA4MTE5Mjk6ODZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYW1MemVzeDFuMUpoeUl6YVRkYTc0M0dZTXoxYzJCTWF4VUZ1NDZCMFl3SSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzk3MjQzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOQ1EifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "venom",
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
