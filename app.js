const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



const flowLink5 = addKeyword(['VPN, PEGA TODO ROJO']).addAnswer(
    [
        '*PASO 1:*',
        'Descarga la aplicacion: https://cutt.ly/VPN-MrWorldGames',
        'VPN + REGEDIT',
        '',
        '*PASO 2:*',
        'Dejame una calificacion de 5 estrellas para que funcione.',
        'DISFRUTA DE LA APLICACION, LUEGO ME LO AGRADECES.',
    ])
    .addAnswer('Volver',{
        buttons:[
            {body: '◀ '}
        ]
    })
const flowLink4 = addKeyword(['GANA DINERO VIENDO VIDEOS']).addAnswer(
    [
        '*PASO 1:*',
        'Descarga la aplicacion: https://cutt.ly/Recargas_MrWorldGames',
        '',
        '*PASO 2:*',
        'Viendo videos acumularas puntos y luego los puedes canjear.',
        'canjealor por PayPal, Diamantes, Gemas y mucho mas...',
    ])
    .addAnswer('Volver',{
        buttons:[
            {body: '◀ '}
        ]
    })



const flowLink3 = addKeyword(['STUMBLE GUYS']).addAnswer(
    [
        '*PASO 1:*',
        'Descarga la aplicacion: https://cutt.ly/Stumble-MrWorldGames',
        '',
        '*PASO 2:*',
        'Dejame una calificacion de 5 estrellas para que funcione.',
        'DISFRUTA DE LA APLICACION, LUEGO ME LO AGRADECES.',
    ])
    .addAnswer('Volver',{
        buttons:[
            {body: '◀ '}
        ]
    })


const flowLink2 = addKeyword(['GENERADOR DE DIAMANTES']).addAnswer(
    [
        '*PASO 1:*',
        'Descarga la aplicacion: https://cutt.ly/Codigos-MrWorldGames',
        '',
        '*PASO 2:*',
        'Dejame una calificacion de 5 estrellas para que funcione.',
        'DISFRUTA DE LA APLICACION, LUEGO ME LO AGRADECES.',
    ])
    .addAnswer('Volver',{
        buttons:[
            {body: '◀ '}
        ]
    })

const flowLink1 = addKeyword(['RULETA MAGICA FF']).addAnswer(
    [
        '*PASO 1:*',
        'Descarga la aplicacion: https://cutt.ly/Ruleta-MrWorldGames',
        '',
        '*PASO 2:*',
        'Dejame una calificacion de 5 estrellas para que funcione.',
        'DISFRUTA DE LA APLICACION, LUEGO ME LO AGRADECES.',
    ])
    .addAnswer('Volver',{
        buttons:[
            {body: '◀ '}
        ]
    })

const flowPrincipal = addKeyword(['hola','◀ ','free','stumble','roblox','mr','world','games'])
    .addAnswer(        [
        '*Hola ¡¡Bienvenid@!!*',
        '',
        '*Sigueme en mis Redes Sociales*',
        '*YouTube:* https://cutt.ly/YouTubeMrWorldGames2',
        '*Instagram:* https://cutt.ly/InstagramMrWorldGames',
        '*TikTok:* https://cutt.ly/TikTokMrWorldGames',
        '*Play Store:* https://cutt.ly/PlayStore-MrWorldGames',
        '',
        'ELIGE UNA OPCIÓN:',
    ],
        {
            buttons: [
                {body:'RULETA MAGICA FF' },
                {body:'GENERADOR DE DIAMANTES' },
                {body:'STUMBLE GUYS' },
                {body:'GANA DINERO VIENDO VIDEOS' },
                {body:'VPN, PEGA TODO ROJO'}
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