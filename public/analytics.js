const URL = "http://csharpseth.com:4000/analytics"
const PING_DELAY_SECONDS = 5

const mobile = (window.innerWidth <= 768)

async function POST(url, data) {
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(response.status !== 200) return { success: false }
        return response.json()
    } catch (err) {
        
        return { success: false }
    }
}

async function EstablishAnalyticVisit() {
    try {
        POST(`${URL}/push/visit`, { mobile: mobile }).then(res => {
            
        })
    } catch (err) {
        console.log(err)
    }
}

EstablishAnalyticVisit()

const interval = setInterval(() => {
    try {
        fetch(`${URL}/push/duration`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mobile: false })
        }).then(res => res.json())
        .then(data => {
            if(!data) {
                clearInterval(interval)
            }
        }).catch(err => {
            clearInterval(interval)
        })
    } catch (err) {
        clearInterval(interval)
    }
}, (PING_DELAY_SECONDS * 1000))
