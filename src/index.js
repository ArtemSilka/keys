import "./styles/index.scss";

const WHITE = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const BLACK = ['w', 'e', 't', 'y', 'u']

const keys = document.querySelectorAll('.key')

const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')


keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', e => {
    const key = e.key
    const whiteKeyIndex = WHITE.indexOf(key)
    const blackKeyIndex = BLACK.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})