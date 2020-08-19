
// export const sampleButton = document.querySelector('.sample-button')
// sampleButton.addEventListener('click', playSampleSong)

export let sampleSong1 = [
    { key: "D", startTime: 1000 },
    { key: "F", startTime: 2000 },
    { key: "A", startTime: 3000 }
]

export function playSampleSong() {
    sampleSong1.forEach(note => {
        const keys = document.querySelectorAll('.key')
        const target = note.key

        setTimeout(() => {
            keys.forEach(key => {
                if (key.dataset["note"] === target) {
                    key.classList.add('learn')
                    setTimeout(() => {
                        key.classList.remove('learn')
                    }, 500)
                }
            })
        }, note.startTime)
    })
}