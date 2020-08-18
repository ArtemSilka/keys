import "./styles/index.scss";
import { WHITE, BLACK, whiteKeys, blackKeys } from './keyboard'

const keys = document.querySelectorAll('.key')

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
    // fixed noise when press and hold key 
    if (e.repeat) return

    const key = e.key
    const whiteKeyIndex = WHITE.indexOf(key)
    const blackKeyIndex = BLACK.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})