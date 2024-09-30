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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xDZ1VoaDRxblBQQmV5WmlRVUdjeWRhTE42KzRXRGNaWXJoSlAvOWFGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamNwNWFLeFBtNWxNZWZhQTBmSXA0dEdNeURqVUJaaXVucG1iSUErcGFHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTUZIbWtFTnpMVE1hYWtVaDF4UzE1RWdKQkJNN3kxd1lZRWxYUmx0L1dzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyQjFSbVVhYUJWbFZxWGlmMy9JZzZ0WlhGTHova0hUZU94M1JQdTVrWm1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJeUZBUzRVd1RIdXBjQUZsWXZQZXRiWGtVU2JMTXBHcWUwWFJ5OTB5bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRYeEg0NE93dEVRS2lsTWt3MERJWEhQVlBiQk5oMkRQL1lvODhiSVZpVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dkOHRlVUNDellUUTdkSi9waWNUNVZGZHdsZTlLb2pVaUVSSEpzdU9uWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm5GMkNobG9PM2hZamcrcW1rMWd3K2ZJVVdjMnBLUkJZak1ZSFAzQml4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcwSWp4cWVEQTd2U2pQNnU4SDh4ZXNGVDFqejNtL0FyNmUvdE8vZ2R0dWdWejF0R3IzTythdUFMS3N1NHZHNVh6dTdEa1JIdzYxTzVpYkdkeXRqS0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiI0QXlnc1ZpdkRNdVcvSEhrbmlreXRXb3lITVdIc0JEOE82MTBvNXZLWlljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfY2w0enl5MFJLaWNVRG80SVNfd0JnIiwicGhvbmVJZCI6IjljYjNhOTEyLTM3NjEtNGM4NS05NDk1LTQzYTk2ZDhhODViNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZCtUdnlUR2JScU5ISnZtbjJ3cS9BbzVRK1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEpFQ1M2aWpQaVlRWms5NXcwc2hmRERWT1dnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkxQ0s1OUYxIiwibWUiOnsiaWQiOiI0MDc3MDgxMTkyOTo4MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZW58J2WlPCdlbLwnZaG8J2WkvCdlorwnZW58J2WlPCdlbfwnZaO8J2Wi/CdlooifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ozeXREQVFtY1RwdHdZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFZdk42ekhXZlVtSElqTnBOMXJ2amNaZ3pQVnpZRXhyRlFXN2pvSFJqQWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJlRWpnYm0vRFlCSmJwUEVtVm5JcWNweVpYU1BzUmNER0FaYW9KSWltdTZGbEZ3ZDU1d2xUa244VzBMWnNJZUVsalhrTjFTUFkwNDJPNDNxY05nOEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBTDA2NGJvVlp3ZEtOcXNmeDhMMnpKYWtlL1BCSkduczRSTmJPWGF3Wjh2T2JGR3NqbDQyT2o2NlI4YnhCWWJldUxzMFBxOGVHRDlFaTFBYWJDQ1FCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzcwODExOTI5OjgxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFtTHplc3gxbjFKaHlJemFUZGE3NDNHWU16MWMyQk1heFVGdTQ2QjBZd0kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2ODUxNTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkJvIn0="
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
