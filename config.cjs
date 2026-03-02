const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"GGny0jEXqak1/+P3pwvK82V240ej/a69Buu7rAdzq0c="},"public":{"type":"Buffer","data":"3NIdeAG5MGI4ijR5UHUnnFcnv4LYcz1Ve8QShzb013Y="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YM1ZF5AWAeno83kmcgNuJKJ3paoZCmrDKSaJEHyVRWs="},"public":{"type":"Buffer","data":"lok/AZ0ygxlu+zZQOTdRMUjshGdCeftSI9cJaZksKz4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oNSLwA3SAx65jxYupDdqxGfUeuZ2i8CQW6im+f7pQkY="},"public":{"type":"Buffer","data":"A1WLU6svdIP0Nn6ONsqhMIZM3l7g7aJtNSzDLp2J+Ts="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QJ778Ue8WLw/qFlVW+JaZ5xqpxbdGTDOGTVYmJ6t/nM="},"public":{"type":"Buffer","data":"ktgbmgr/rSMY5gnoqedt9vkUcw7q/wpzzb7O/dmXmi0="}},"signature":{"type":"Buffer","data":"kBdDeTwzzDo3SF2FZYEVUofXxrTeNTSRV1JY2HQny8OqxX2JVTbEsdhuaJ/l8Zo/fr3lJHiKwqs9fwf/pAELDg=="},"keyId":1},"registrationId":30,"advSecretKey":"RwG9m0ObRmKOFzRspsWmmyhipCeUZb/IUdwCmW/v068=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"FMHOPHYP","me":{"id":"254112581810:8@s.whatsapp.net","lid":"188077272248523:8@lid"},"account":{"details":"CN2R4cIDEKbOl80GGAEgACgA","accountSignatureKey":"B/6Vew1zsT95AWvx9nVp9UgwM7Hn8XWohck8Y0YF6i0=","accountSignature":"/xlmkAJ6zEFOVhitXPDHbF0z755FIA/ZbrXrCfTxjTX2HZqbhID/L2BkTCPlA86vBDT87N4MY4parFBi2AKwBQ==","deviceSignature":"2MbpMqK8dxcdqGC/E0UjQdOIFkeJhCYEHI2riecAZmD/YVQgSZH93an2qq8rPC4B4F5m71HTd7ywp22KFIUQAA=="},"signalIdentities":[{"identifier":{"name":"254112581810:8@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQf+lXsNc7E/eQFr8fZ1afVIMDOx5/F1qIXJPGNGBeot"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIDQgI"},"lastAccountSyncTimestamp":1772480306,"lastPropHash":"PWk5B"}",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
