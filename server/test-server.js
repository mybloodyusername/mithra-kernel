import express from 'express'
import cors from 'cors'
import { dirname } from 'node:path'
import { fileURLToPath } from 'url'

const AD_DATA = [
    {
        widget: { selector: '#mithra-1', id: '1' },
        content: {
            id: '1',
            landingUrl: 'digikala.ir',
            media: {
                image: {
                    id: '1m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'This is a one time only chance to sing along Lady Gaga!',
            trackId: '1a2b3c4d5e6f7g8h9i0j',
            cta: {
                title: 'Join the Experience',
                color: '#ffffff',
                backgroundColor: '#e91e63',
                borderRadius: '12px',
            },
        },
    },
    {
        widget: { selector: '#mithra-2', id: '2' },
        content: {
            id: '2',
            landingUrl: 'nike.com',
            media: {
                image: {
                    id: '2m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: '60% off for Jordan collection and many more special offers for you',
            trackId: '2a3b4c5d6e7f8g9h0i1j',
            cta: {
                title: 'Shop Now',
                color: '#ffffff',
                backgroundColor: '#111111',
                borderRadius: '8px',
            },
        },
    },
    {
        widget: { selector: '#mithra-3', id: '3' },
        content: {
            id: '3',
            landingUrl: 'adidas.com',
            media: {
                image: {
                    id: '3m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Buy 2, get 3 and get a chance to win a G-Class!',
            trackId: '4a3b4c7d6e7f8g1h0i5j',
            cta: {
                title: 'Grab the Deal',
                color: '#ffffff',
                backgroundColor: '#000000',
                borderRadius: '6px',
            },
        },
    },
    {
        widget: { selector: '#mithra-4', id: '4' },
        content: {
            id: '4',
            landingUrl: 'apple.com',
            media: {
                image: {
                    id: '4m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Experience the future with the latest Apple devices.',
            trackId: '5b6c7d8e9f0g1h2i3j4k',
            cta: {
                title: 'Discover More',
                color: '#ffffff',
                backgroundColor: '#1d1d1f',
                borderRadius: '20px',
            },
        },
    },
    {
        widget: { selector: '#mithra-5', id: '5' },
        content: {
            id: '5',
            landingUrl: 'samsung.com',
            media: {
                image: {
                    id: '5m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Unfold the next generation of smartphones today.',
            trackId: '6c7d8e9f0g1h2i3j4k5l',
            cta: {
                title: 'Explore Galaxy',
                color: '#ffffff',
                backgroundColor: '#1428a0',
                borderRadius: '10px',
            },
        },
    },
    {
        widget: { selector: '#mithra-6', id: '6' },
        content: {
            id: '6',
            landingUrl: 'spotify.com',
            media: {
                image: {
                    id: '6m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Millions of songs. No credit card needed.',
            trackId: '7d8e9f0g1h2i3j4k5l6m',
            cta: {
                title: 'Start Listening',
                color: '#ffffff',
                backgroundColor: '#1db954',
                borderRadius: '50px',
            },
        },
    },
    {
        widget: { selector: '#mithra-7', id: '7' },
        content: {
            id: '7',
            landingUrl: 'netflix.com',
            media: {
                image: {
                    id: '7m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Unlimited movies, TV shows, and more.',
            trackId: '8e9f0g1h2i3j4k5l6m7n',
            cta: {
                title: 'Watch Now',
                color: '#ffffff',
                backgroundColor: '#e50914',
                borderRadius: '4px',
            },
        },
    },
    {
        widget: { selector: '#mithra-8', id: '8' },
        content: {
            id: '8',
            landingUrl: 'amazon.com',
            media: {
                image: {
                    id: '8m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Everything you need, delivered to your door.',
            trackId: '9f0g1h2i3j4k5l6m7n8o',
            cta: {
                title: 'Shop Today',
                color: '#000000',
                backgroundColor: '#ff9900',
                borderRadius: '6px',
            },
        },
    },
    {
        widget: { selector: '#mithra-9', id: '9' },
        content: {
            id: '9',
            landingUrl: 'tesla.com',
            media: {
                image: {
                    id: '9m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Electric cars, giant batteries and solar.',
            trackId: '0g1h2i3j4k5l6m7n8o9p',
            cta: {
                title: 'Order Yours',
                color: '#ffffff',
                backgroundColor: '#cc0000',
                borderRadius: '3px',
            },
        },
    },
    {
        widget: { selector: '#mithra-10', id: '10' },
        content: {
            id: '10',
            landingUrl: 'airbnb.com',
            media: {
                image: {
                    id: '10m',
                    width: 1200,
                    height: 900,
                    format: 'image/jpeg',
                    url: 'http://localhost:3000/media/pat-4-3.jpeg',
                },
                video: [],
            },
            slogan: 'Find adventures nearby or in faraway places.',
            trackId: '1h2i3j4k5l6m7n8o9p0q',
            cta: {
                title: 'Start Exploring',
                color: '#ffffff',
                backgroundColor: '#ff5a5f',
                borderRadius: '10px',
            },
        },
    },
]

const reqReferrer = (req) => {
    const origin = req.get('origin')
    const host = req.get('host')
    const referer = req.get('referer')
    return origin ?? referer ?? host ?? ''
}

const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.json())
app.use(
    cors({
        origin: true,
    })
)

app.use('/media', express.static(__dirname))

app.post('/api/publisher', (req, res) => {
    const referrer = reqReferrer(req)

    if (!referrer) {
        res.status(400).send('No referrer')
        return
    }

    res.json({
        referer: referrer,
        data: AD_DATA.filter((ad) =>
            req.body.foundedWidgetIds.includes(ad.widget.selector)
        ),
    })
})

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
    console.log(`Mithra Kernel Test server ----->`)
    console.log(`Express running at http://localhost:${PORT}\n`)
})
