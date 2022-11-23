window.addEventListener('load', () => {
    let arrayPhotos = []
    const count = 10;
    const apiKey = 'TfI28zSx9Y2qLagzPAzu1COdD0OrsxLap8uKXfHfHDw';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

    let imageContainer = document.querySelector('.imageContainer')
    let loader = document.querySelector('.loader')

    function helperAttrubutes(element, attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        // element.setAttribute(name, value);
    }

    function getPhotos() {
        fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((responseArray) => {
                arrayPhotos = responseArray
                loadPhotos()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function loadPhotos() {
        
        arrayPhotos.forEach((photo) => {
            let div = document.createElement('div')
            div.classList.add('wrapper')
            let link = document.createElement('a')
            let img = document.createElement('img')
            helperAttrubutes(link, {
                href: photo.links.html,
                target: '_blank'
            })
            helperAttrubutes(img, {
                src: photo.urls.regular,
                alt: photo.alt_description,
                title: photo.alt_description,
            })
            console.log(imageContainer)
            imageContainer.appendChild(div)
            div.appendChild(link)
            link.appendChild(img)
        })
        loader.hidden = true
    }

    window.addEventListener('scroll', () => {
        
        if (window.scrollY + window.innerHeight / 2 > document.body.offsetHeight - (window.innerHeight * 1.2)) {
           
            console.log('Загрузка фотографий')
            loader.hidden = false
            getPhotos()
        }
    })
   
    getPhotos()


})
