import "./styles/index.scss";
import { WHITE, BLACK, whiteKeys, blackKeys } from './keyboard'
import { isRecording, recordNote } from './record'
import { playSampleSong } from './sample'

const keys = document.querySelectorAll('.key')

// sounds
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

export function playNote(key) {
    if (isRecording()) recordNote(key.dataset.note)
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0;
    noteAudio.play()
    key.classList.add('active')
    // setTimeout(() => {
    //     key.classList.remove('active'), 100000
    // })
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

// keyboard
document.addEventListener('keydown', e => {
    if (e.repeat) return

    const key = e.key
    const whiteKeyIndex = WHITE.indexOf(key)
    const blackKeyIndex = BLACK.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

// sample 

export const sampleButton = document.querySelector('.beethoven')
sampleButton.addEventListener('click', playSampleSong)
