window.addEventListener('load', () => {
    let videoElement = document.querySelector('video')
    let button = document.querySelector('button')
    let buttonContainer = document.querySelector('.buttonContainer')
    console.log(buttonContainer)


    async function selectMediaScreen() {
        let mediaStream = await window.navigator.mediaDevices.getDisplayMedia() //типа ссылка на видео
        console.log(mediaStream)
        console.log(videoElement)
        videoElement.srcObject = mediaStream //  даем тегу видео ссылку для восропизведения
        // videoElement.addEventListener('loadedmetadata', () => {
            videoElement.play()
        // })

    }


    // function selectMediaScreen() {
    //     let mediaStream = window.navigator.mediaDevices.getDisplayMedia()
    //         .then((response) => {
    //             videoElement.srcObject = response
    //             videoElement.addEventListener('loadedmetadata', () => {
    //                 videoElement.play()
    //             })

    //         })
    // }


    button.addEventListener('click', async () => {
        // Disable Button
        buttonContainer.disabled = true;
        // Start Picture in Picture
        await videoElement.requestPictureInPicture();
        // Reset Button
        videoElement.disabled = false;
    });



    selectMediaScreen()




    // button.addEventListener('click',async()=>{
    //     buttonContainer.hidden = true
    //     await videoElement.requestPictureInPicture()
    //     videoElement.hidden = false
    //     getMediaScreen()
    // })

    // window.navigator.mediaDevices.getDisplayMedia() //захват экрана
    // .then(console.log)
})

