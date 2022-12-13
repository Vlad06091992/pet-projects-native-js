let audio = document.querySelector('audio')
let title = document.querySelector('#title')
let artist = document.querySelector('#artist')
let splashScreen = document.querySelector(".player-img")
let playButton = document.querySelector('.main-button')
let prevButton = document.querySelector('.fa-backward')
let nextButton = document.querySelector('.fa-forward')
let progressBar = document.querySelector('.progress')
let totalTime = document.getElementById('total-time')
let time = document.getElementById('current-time')
let progressContainer = document.querySelector('.progress-container')

isPlaying = false
let currentSongIndex = 0
const songs = [
    {
        name: "jacinto-1",
        displayName: 'Electric Chill Machine',
        artist: "Jacinto"
    },
    {
        name: "jacinto-2",
        displayName: 'Seven nation army (remix)',
        artist: "Jacinto Design"
    },
    {
        name: "jacinto-3",
        displayName: 'Goodnight, Disco Queen',
        artist: "Jacinto Design"
    },
    {
        name: "metric-1",
        displayName: 'Front Row (Remix)',
        artist: "Metric/Jacinto Design"
    },

]

function toggleButton() {
    isPlaying ? playButton.classList.replace("fa-play", "fa-pause") : playButton.classList.replace("fa-pause", "fa-play")
}

function play() {


    audio.play()
    isPlaying = true
    toggleButton()
}

function playNextSong() {
    currentSongIndex >= songs.length - 1 ? currentSongIndex = 0 : currentSongIndex++

    loadSong()
    play()
}

function playPrevSong() {
    currentSongIndex < 1 ? currentSongIndex = songs.length - 1 : currentSongIndex--
    loadSong()
    play()
}


function pause() {
    isPlaying = false
    audio.pause()
}

function loadSong() {
    audio.src = `./music/${songs[currentSongIndex].name}.mp3`
    title.innerHTML = songs[currentSongIndex].displayName
    artist.innerHTML = songs[currentSongIndex].artist
    splashScreen.src = `./img/${songs[currentSongIndex].name}.jpg`

}


playButton.addEventListener('click', () => {
    isPlaying ? pause() : play()
    toggleButton()
})

nextButton.addEventListener('click', () => {
    playNextSong()
})

prevButton.addEventListener('click', () => {
    playPrevSong()
})

audio.addEventListener('timeupdate', (e) => {
    let { currentTime, duration } = e.srcElement
    let valueProgress = (currentTime / duration) * 100
    progressBar.style.width = `${valueProgress}%`



    let durationMinutes = Math.floor(duration / 60)
    let durationSeconds = Math.floor(duration % 60)
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`
    }
    if (!isNaN(durationMinutes) && !isNaN(durationSeconds)) {
        totalTime.innerHTML = `${durationMinutes}:${durationSeconds}`
    }
    let currentTimeMinutes = Math.floor(currentTime / 60)
    let currentTimeSeconds = Math.floor(currentTime % 60)
    if (currentTimeSeconds < 10) {
        currentTimeSeconds = `0${currentTimeSeconds}`
    }
    if (!isNaN(currentTimeMinutes) && !isNaN(currentTimeSeconds)) {
        time.innerHTML = `${currentTimeMinutes}:${currentTimeSeconds}`
    }


    function setProgressBar(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const { duration } = audio;
        if (duration) {
            audio.currentTime = (clickX / width) * duration;
        }
    }
    progressContainer.addEventListener('click', setProgressBar)

})

audio.addEventListener('ended', playNextSong)