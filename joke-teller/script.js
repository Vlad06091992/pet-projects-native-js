
window.addEventListener('load', () => {
    let button = document.querySelector('.button')
    let audio = document.querySelector('.audio')

    console.log(audio)

    async function getJoke() {

        let response = await JokeAPI.getJokes()
        let data = await response.json()
        let setup = await data.setup
        let delivery = await data.delivery
        if (data && delivery) {
            let joke = `${setup}...${delivery}`
            console.log(joke)
            getAudio(joke)
        }

        else {
            getJoke()
        }


    }



    async function getAudio(phrase) {
        let key = '2d632dfa56ea427cbe22bd9d9e7c9f8a'
        let response = await fetch(`http://api.voicerss.org/?key=${key}&hl=en-us&c=MP3&f=16khz_16bit_stereo&src=${phrase}`)
        let url = await response.url
        audio.src = await url

    }


    getJoke()

    button.addEventListener('click', () => {
        audio.play()
        button.disabled = true
    })

    audio.addEventListener('ended', () => {
        getJoke()
        button.disabled = false
    })

    // getAudio('My name is Vlad')
})


