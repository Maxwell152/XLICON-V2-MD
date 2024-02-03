import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2349120730021', 'WHITE', true], 
  ['2349120730021', 'MAXWELL OP', true],
  ['2349120730021', 'MAXWELL 𝘼𝙃𝙈𝘼𝘿 -(𝘼𝙝𝙢𝙢𝙞)', true], 
  ['2349120730021', '𝙼𝚉𝙽 𝙺𝙸𝙽𝙶 ⚡', true],
  ['2349120730021', 'MAXWELL OP', true],
  ['2349120730021', 'MAXWELL OP', true],
  
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['2349120730021', '2349120730021', '2349120730021','2349120730021','2349120730021'] 
global.prems = ['2349120730021','2349120730021','2349120730021', '2349120730021','2349120730021']
global.allowed = ['2349120730021', '2349120730021', '2349120730021', '2349120730021','2349120730021']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'MAXWELL-MD'
global.premium = 'true'
global.packname = 'MAXWELL TEAM' 
global.author = '@MAXWELL-MD' 
global.menuvid = 'https://telegra.ph/file/3afb32a4943d15bd99a13.mp4'
global.igfg = '▢✓ Follow My On Tiktok https://www.tiktok.com/@maxwell_gaming999?_t=8jZPez38wQ2&_r=1'
global.dygp = 'https://wa.me/qr/MY2JIUSBX5FJD1'
global.fgsc = 'https://wa.me/qr/MY2JIUSBX5FJD1' 
global.fgyt = 'https://www.tiktok.com/@maxwell_gaming999?_t=8jZPez38wQ2&_r=1'
global.fgpyp = 'https://www.tiktok.com/@maxwell_gaming999?_t=8jZPez38wQ2&_r=1'
global.fglog = 'MAXWELL.jpg' 
global.thumb = fs.readFileSync('./MAXWELL.jpg')


global.wait = '*🕣WAIT MAXWELL-MD IS LOADING BITCH ..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => 
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
