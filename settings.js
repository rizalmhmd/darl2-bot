//═══════════════════════════//
// 𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹
// 𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹
// 𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹
// 𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹
// 𓈃ּ Darlyn
//════════════════════════════//
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
//// global.author = 'Darlyn | ≛ ⃝🧋•𝑫𝒂𝒓𝒍𝒚𝒏⸙𔘓ৎ୭🩹៸៸◗ ⋆ 🪜 ⏜⃞ჩ ♞ ᵈᵃʳˡʸⁿ — 𖦹࣪ᰍ\nhttps://appweb-darlyn.vercel.app𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹\\\
//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['51918303426', '51923513366'] // cambiar numero del owner 
global.premium = ['51918303426']              // cambiar numero premium
global.ownernomer = '51918303426'             // cambiar numero del owner
global.ownername = 'Darlyn'
global.botname = '<div> 𝑆𝑜𝑓𝑓𝑓 </div>'
global.footer = '<div> 𝑆𝑜𝑓𝑓𝑓 </div>'
global.ig = 'https://appweb-darlyn.vercel.app'
global.region = 'Peru, trujillo'
global.sc = 'https://appweb-darlyn.vercel.app'
global.myweb = 'https://github.com/darlyn1234/darl2-bot'
global.packname = '𓈃ּ ៹🍏𝗱𝑎𝙧̲𝘭𝐲̲𝘯̲𐂂!s⁹⁷☻‹𝟹'
global.author = 'Darlyn . 🩹⋆ 🪜 ⏜⃞ჩ ♞ ᵈᵃʳˡʸⁿ — 𖦹࣪ᰍ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Listo ✓',
    admin: 'Esta función es solo para administradores!',
    botAdmin: 'El bot debe ser administrador primero!',
    owner: 'Esta función es solo para el owner!',
    group: 'Función utilizada solo para grupos!',
    private: 'Funciones utilizadas solo para chat privado!',
    bot: 'Esta función es solo para bot',
    wait: 'En proceso...',
    error: 'Error! Posiblemente la ApiKey haya caducado!',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DarlynMedia/Darlyn-botxd.jpg')
global.darlyn =fs.readFileSync('./DarlynMedia/dar-lyn/jennie.jpg')
global.botdarlyn = fs.readFileSync('./DarlynMedia/dar-lyn/nayeon.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
