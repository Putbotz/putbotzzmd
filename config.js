/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * 
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
*/

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> WEB APIKEY
    global.APIs = {
	alphaapi: 'https://api-alphabot.herokuapp.com',
    }
    
    //===> APIKEY 
    global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
    }
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner}`,`${setting.nomerowner}`]
    global.packname = `${setting.namaowner}`
    global.author = `ยฉ ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = 'โญ'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '๐๐ ๐๐๐๐๐? ๐คจ',
    botAdmin: '๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐',
    owner: '๐๐ ๐๐๐๐๐ ๐๐๐๐๐ ๐๐ ๐ ',
    group: '๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐',
    private: '๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐',
    bot: '๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐',
    wait: '๐๐๐๐๐๐๐...',
    done: '๐๐๐๐ ๐๐๐๐ ๐ค',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
