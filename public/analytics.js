const URL = "http://csharpseth.com:4000/analytics"
const PING_DELAY_SECONDS = 5

const mobile = (window.innerWidth <= 768)

async function POST(url, data) {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

POST(`${URL}/push/visit`, { mobile: mobile })
.then(res => {
    console.log(res)
})

setInterval(() => {
    POST(`${URL}/push/duration`, { mobile: mobile })
    .then(res => {
        console.log(res)
    })
}, (PING_DELAY_SECONDS * 1000))
