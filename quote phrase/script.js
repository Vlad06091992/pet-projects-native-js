window.addEventListener('load',function(){
    let phraseText = document.querySelector('.phrase')
    let authorText = document.querySelector('.author')
    let newQuote = document.querySelector('.newQuote')
    let main = document.querySelector('.main')
    let loader = document.querySelector('.loader')
    let twitter = document.querySelector('.twitter')
    
    const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    async function getPhrase() {
        try {
            loading()
            let response = await fetch(proxyUrl + apiUrl)
            let data = await response.json()
    
            data.quoteText.length > 100 ? phraseText.classList.toggle('longPhrase'):false
            phraseText.innerHTML = data.quoteText
            data.quoteAuthor == ''? authorText.innerHTML = 'Unknown' : authorText.innerHTML = data.quoteAuthor
            
    
            // if (data.quoteText.length > 100) {
            //     phraseText.classList.toggle('longPhrase')
            // }
    
    
            // phraseText.innerHTML = data.quoteText
            // if (data.quoteAuthor == '') {
            //     authorText.innerHTML = 'Unknown'
            // } else {
            //     authorText.innerHTML = data.quoteAuthor
            // }
    
            complete()
        }
        catch {
            getPhrase()
        }
    
    }
    
    function loading() {
        loader.style.display = "block"
        main.style.display = "none"
    }
    function complete() {
        loader.style.display = "none"
        main.style.display = "block"
    }
    
    newQuote.addEventListener("click", getPhrase)
    twitter.addEventListener("click", () => {
        {
            const quote = phraseText.innerText;
            const author = authorText.innerText;
            const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
            window.open(twitterUrl, '_blank');
        }
    })
    
    getPhrase()
})
