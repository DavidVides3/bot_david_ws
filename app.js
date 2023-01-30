const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



const flowLink5 = addKeyword(['Play Store']).addAnswer(
    [
        ' Aquí tienes el link de descarga',
        'https://play.google.com/store/games',
    ])
    .addAnswer('volver al menu',{
        buttons:[
            {body: '◀ '}
        ]
    })
const flowLink4 = addKeyword(['Roblox']).addAnswer(
    [
        ' Aquí tienes el link de descarga',
        'https://play.google.com/store/apps/details?id=com.roblox.client',
    ])
    .addAnswer('volver al menu',{
        buttons:[
            {body: '◀ '}
        ]
    })



const flowLink3 = addKeyword(['Free Fire']).addAnswer(
    [
        'Aquí tienes el link de descarga',
        'https://play.google.com/store/apps/details?id=com.dts.freefireth',
    ])
    .addAnswer('volver al menu',{
        buttons:[
            {body: '◀ '}
        ]
    })


const flowLink2 = addKeyword(['Stumble Guys']).addAnswer(
    [
        ' Aquí tienes el link de descarga',
        'https://play.google.com/store/apps/details?id=com.kitkagames.fallbuddies',
    ])
    .addAnswer('volver al menu',{
        buttons:[
            {body: '◀ '}
        ]
    })

const flowLink1 = addKeyword(['Subway Surfers']).addAnswer(
    [
        ' Aquí tienes el link',
        'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf',
    ])
    .addAnswer('volver al menu',{
        buttons:[
            {body: '◀ '}
        ]
    })

const flowPrincipal = addKeyword(['hola','◀ '])
    .addAnswer('Hola, ¿como estas?, bienvenido!!')
    .addAnswer(
        [
            '*Redes Sociales*',
            'Instagram: https://www.instagram.com/',
            'Tiktok: https://www.tiktok.com/',
        ],
    )
    .addAnswer('Elije una opcion para continuar',
        {
            buttons: [
                {body:'Subway Surfers' },
                {body:'Stumble Guys' },
                {body:'Free Fire' },
                {body:'Roblox' },
                {body:'Play Store'}
            ]
        }
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([
        flowPrincipal,
        flowLink1,
        flowLink2,
        flowLink3,
        flowLink4,
        flowLink5
    ])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
