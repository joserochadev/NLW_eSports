import express from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertStringHoursToMinutes } from "./utils/convert-string-hours-to-minutes"
import { convertMinutesToStringHours } from "./utils/convert-minutes-to-string-hours"

const app = express()
const prisma = new PrismaClient()

const PORT = process.env.PORT || 3333


app.use(express.json())
app.use(cors())



app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.json(games)
})


app.post('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id
    
    const body: any = req.body

    const ad = await prisma.ad.create({
        data: {
            gameId: gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hoursStart: convertStringHoursToMinutes(body.hoursStart),
            hoursEnd: convertStringHoursToMinutes(body.hoursEnd),
            useVoiceChannel: body.useVoiceChannel

        }
    })

    return res.status(201).json(ad)
})


app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hoursStart: true,
            hoursEnd: true
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return res.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hoursStart: convertMinutesToStringHours(ad.hoursStart),
            hoursEnd: convertMinutesToStringHours(ad.hoursEnd),
        }
    }))
})


app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })
    return res.json({
        discord: ad.discord
    })
})

app.listen(PORT, () => console.log(`rodando...${PORT}`))