import "./styles/index.scss";
import { WHITE, BLACK, whiteKeys, blackKeys } from './keyboard'
import { isRecording, recordNote } from './rec'
import { playBeethoven, playMozart, playVivaldi } from './sample'

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
    setTimeout(() => {
        key.classList.add('active')
        setTimeout(() => {
            key.classList.remove('active')
        }, 500) 
    }, )
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

export const beethoven = document.querySelector('.beethoven')
export const mozart = document.querySelector('.mozart')
export const vivaldi = document.querySelector('.vivaldi')
beethoven.addEventListener('click', playBeethoven)
mozart.addEventListener('click', playMozart)
vivaldi.addEventListener('click', playVivaldi)

// modal 

const modal = document.querySelector('.modal-container')
const howTo = document.querySelector('.how-to')

howTo.addEventListener('click', () => {
    modal.classList.add('display')
    modal.addEventListener('click', () => {
        modal.classList.remove('display')
    })
})