import { playButton } from './play'
import { playNote } from './index'

const keys = document.querySelectorAll('.key')
const recordButton = document.querySelector('.record-button')

let recordingStartTime
let songNotes

const keyMap = [...keys].reduce((map, key) => {
    map[key.dataset.note] = key
    return map
}, {})

recordButton.addEventListener('click', toggleRecording)

function toggleRecording() {
    recordButton.classList.toggle('active')
    if (isRecording()) {
        startRecording()
    } else {
        stopRecording()
    }
}

export function isRecording() {
    return recordButton.classList.contains('active')
}

function startRecording() {
    recordingStartTime = Date.now()
    songNotes = []
    playButton.classList.remove('show')
}

function stopRecording() {
    playButton.classList.add('show')
}

export function playSong() {
    console.log(songNotes)
    if (songNotes.length === 0) return
    songNotes.forEach(note => {
        setTimeout(() => {
            playNote(keyMap[note.key])
        }, note.startTime)
    })
}

export function recordNote(note) {
    songNotes.push({
        key: note,
        startTime: Date.now() - recordingStartTime
    })
}