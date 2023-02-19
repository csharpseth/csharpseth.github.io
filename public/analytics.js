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

POST("http://csharpseth.com:4000/analytics/record_visit", { mobile: mobile })
.then(res => {
    console.log(res)
})
