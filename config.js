const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255616030741";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_16_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTzIrSTRUQnU1OVRoTDZZUmlQOTNHc0FiQmpvZU04M2h0Uk45OWZBNEhJYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MTYwMzA3NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVDQTJENjc2MTg5NjM5NDlCMTJGNzJBQ0NCRjJBMDdBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkwNDU5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYxNjAzMDc0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDkzRDk4MkVBMjFCNDJBNUIzNDc1MkQ0N0Q5NkE0NjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTA0NTkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NjE2MDMwNzQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQTZFNDIzRTQyMEQyODY0NDBDRDk2MTI4Q0Y1Rjg4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MDQ1OTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MTYwMzA3NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNERTI0RkQzOEYzMTVFRjc2RTdDMzNDQUQxMUY3NjAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkwNDU5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUU2lxWE1XNVF6bXdFYzRsaVNrQlpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlNjc3YjZlLWUwZTctNDllNy05ZjIwLWRjOTM4Y2U3N2NkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxNDgsXG4gICAgICAxLFxuICAgICAgMTE1LFxuICAgICAgMjQsXG4gICAgICAyNTAsXG4gICAgICAxNjYsXG4gICAgICA5NyxcbiAgICAgIDI0MyxcbiAgICAgIDYsXG4gICAgICAxLFxuICAgICAgMTYsXG4gICAgICAxOTgsXG4gICAgICAxMjgsXG4gICAgICAyMjQsXG4gICAgICA3OCxcbiAgICAgIDc4LFxuICAgICAgOCxcbiAgICAgIDE1NCxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTgyLFxuICAgICAgMTI1LFxuICAgICAgMjEyLFxuICAgICAgNDMsXG4gICAgICAxMzUsXG4gICAgICAyMDksXG4gICAgICAxOTcsXG4gICAgICAyMDAsXG4gICAgICA5MixcbiAgICAgIDE5NSxcbiAgICAgIDgsXG4gICAgICA4NixcbiAgICAgIDE0NCxcbiAgICAgIDIxNSxcbiAgICAgIDE3OCxcbiAgICAgIDY5LFxuICAgICAgMjIwLFxuICAgICAgOTksXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjg3QjRNV1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxNjAzMDc0MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDMxODU4NjMzODEyMzI6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUSE9NVFpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeUdnckVIRU1uU2pyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkl0cEpxcWFxNlhuKzVMN3IyNmtuQWFIb0EwckR6QUg5N1R0cDlhb09NaXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGtlQ3RQNEpxOTNtWmV2TGo0bWZnRktQQkpLb3NrS2I3YTBkYkxGaThYdXJsTTUrcXg2UUx6OG10MWxISi85cUNHcVdaaU9RMVM3cTllbSszRVhXQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwienpvUllnamhTZ3RoQkhmd0N2amxzNUtuMm9tM3FRUHU1cTlic01LOTZxTjF0VEU3RFVudFZwbUtRRWRWSWR4alVUZU9SVWVSaDVhZy9TSUdpalh4RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjE2MDMwNzQxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTA0NTg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2FCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPYUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPQXJVaGVEOGdpRXdyZFJxYWdIOTdVNHdWR1RMQU50YVRwOC9hR2VKYnFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODE4NDIyMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTkwNDU5MDgwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
