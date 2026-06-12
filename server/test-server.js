import express from "express";
import cors from "cors";

const SAMPLE_SCHEMA_1 = {
    type: 'row',
    style: {},
    children: [
        {
            type: 'media',
            style: {},
            children: []
        },
        {
            type: 'column',
            style: {},
            children: [
                {
                    type: 'slogan',
                    style: {},
                    children: []
                },
                {
                    type: 'cta',
                    style: {},
                    children: []
                }
            ]
        }
    ]
}
const SAMPLE_SCHEMA_2 = {
    type: 'row',
    style: {},
    children: [
        {
            type: 'media',
            style: {},
            children: []
        },
        {
            type: 'column',
            style: {},
            children: [
                {
                    type: 'slogan',
                    style: {},
                    children: []
                }
            ]
        }
    ]
}
const SAMPLE_SCHEMA_3 = {
    type: 'row',
    style: {},
    children: [
        {
            type: 'column',
            style: {},
            children: [
                {
                    type: 'slogan',
                    style: {},
                    children: []
                },
                {
                    type: 'cta',
                    style: {},
                    children: []
                }
            ]
        },
        {
            type: 'media',
            style: {},
            children: []
        },
    ]
}
const SAMPLE_SCHEMA_4 = {
    type: 'column',
    style: {},
    children: [
        {
            type: 'media',
            style: {},
            children: []
        },
        {
            type: 'slogan',
            style: {},
            children: []
        },
        {
            type: 'cta',
            style: {},
            children: []
        }
    ]
}
const SAMPLE_SCHEMA_5 = {
    type: 'media',
    style: {},
    children: []
}

const AD_DATA = [
    {
        widget: {
            schema: SAMPLE_SCHEMA_1,
            selector: '#mithra-1',
            isSlider: false,
            id: '1'
        },
        content: [
            {
                id: '1',
                landingUrl: 'digikala.ir',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'This is a one time only chance to sing along Lady Gaga!',
                trackId: '1a2b3c4d5e6f7g8h9i0j',
                cta: {
                    color: 'green'
                }
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-2',
            isSlider: false,
            id: '2'
        },
        content: [
            {
                id: '2',
                landingUrl: 'nike.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: '60% off for Jordan collection and many more special offers for you',
                trackId: '2a3b4c5d6e7f8g9h0i1j'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-3',
            isSlider: false,
            id: '3'
        },
        content: [
            {
                id: '3',
                landingUrl: 'adidas.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Buy 2, get 3 and get a chance to win a G-Class!',
                trackId: '4a3b4c7d6e7f8g1h0i5j'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-4',
            isSlider: false,
            id: '4'
        },
        content: [
            {
                id: '4',
                landingUrl: 'apple.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Experience the future with the latest Apple devices.',
                trackId: '5b6c7d8e9f0g1h2i3j4k'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-5',
            isSlider: false,
            id: '5'
        },
        content: [
            {
                id: '5',
                landingUrl: 'samsung.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Unfold the next generation of smartphones today.',
                trackId: '6c7d8e9f0g1h2i3j4k5l'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-6',
            isSlider: false,
            id: '6'
        },
        content: [
            {
                id: '6',
                landingUrl: 'spotify.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Millions of songs. No credit card needed.',
                trackId: '7d8e9f0g1h2i3j4k5l6m'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-7',
            isSlider: false,
            id: '7'
        },
        content: [
            {
                id: '7',
                landingUrl: 'netflix.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Unlimited movies, TV shows, and more.',
                trackId: '8e9f0g1h2i3j4k5l6m7n'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-8',
            isSlider: false,
            id: '8'
        },
        content: [
            {
                id: '8',
                landingUrl: 'amazon.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Everything you need, delivered to your door.',
                trackId: '9f0g1h2i3j4k5l6m7n8o'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-9',
            isSlider: false,
            id: '9'
        },
        content: [
            {
                id: '9',
                landingUrl: 'tesla.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Electric cars, giant batteries and solar.',
                trackId: '0g1h2i3j4k5l6m7n8o9p'
            }
        ]
    },
    {
        widget: {
            type: 'SAMPLE_1',
            selector: '#mithra-10',
            isSlider: false,
            id: '10'
        },
        content: [
            {
                id: '10',
                landingUrl: 'airbnb.com',
                media: {
                    image: [],
                    video: []
                },
                slogan: 'Find adventures nearby or in faraway places.',
                trackId: '1h2i3j4k5l6m7n8o9p0q'
            }
        ]
    }
]

const app = express();
const PORT = 3000;

const reqReferrer = (req) => {
    const origin = req.get('origin');
    const host = req.get('host');
    const referer = req.get('referer');
    return origin ?? referer ?? host ?? '';
}

app.use(express.json());
app.use(cors({
    origin: true,
}))

app.post('/api/publisher', (req, res) => {

    const referrer = reqReferrer(req);

    if (!referrer) {
        res.status(400).send('No referrer');
        return;
    }

    res.json({
        referer: referrer,
        data: AD_DATA.filter(ad => req.body.foundedWidgetIds.includes(ad.widget.selector))
    });
});

// Catch-all for 404s
app.use((req, res) => {
    res.status(404).json({error: 'Not found'});
});

app.listen(PORT, () => {
    console.log(`Mithra Kernel Test server ----->`)
    console.log(`Express running at http://localhost:${PORT}\n`);
});
