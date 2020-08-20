let beethoven = [
    { key: "G", startTime: 756 },
    { key: "G", startTime: 1136 },
    { key: "G", startTime: 1465 },
    { key: "Eb", startTime: 1837 },
    { key: "F", startTime: 3581 },
    { key: "F", startTime: 3915 },
    { key: "F", startTime: 4248 },
    { key: "D", startTime: 4643 }
]

let mozart = [
    { key: "F", startTime: 607},
    { key: "C", startTime: 1668 },
    { key: "F", startTime: 2081 },
    { key: "C", startTime: 2964 },
    { key: "F", startTime: 3266 },
    { key: "C", startTime: 3548 },
    { key: "F", startTime: 3832 },
    { key: "A", startTime: 4169 },
    { key: "C2", startTime: 4591 },
    { key: "Bb", startTime: 5746 },
    { key: "G", startTime: 6661 },
    { key: "Bb", startTime: 6980 },
    { key: "G", startTime: 7903 },
    { key: "Bb", startTime: 8199 },
    { key: "G", startTime: 8493 },
    { key: "E", startTime: 8813 },
    { key: "G", startTime: 9123 },
    { key: "C", startTime: 9554 }
]

let vivaldi = [
    { key: "G", startTime: 581 },
    { key: "B", startTime: 1107 },
    { key: "B", startTime: 1611 },
    { key: "B", startTime: 2134 },
    { key: "A", startTime: 2562 },
    { key: "G", startTime: 2826 },
    { key: "D2", startTime: 3185 },
    { key: "D2", startTime: 4465 },
    { key: "C2", startTime: 4705 },
    { key: "B", startTime: 4990 },
    { key: "B", startTime: 5439 },
    { key: "B", startTime: 5900 },
    { key: "A", startTime: 6316 },
    { key: "G", startTime: 6583 },
    { key: "D2", startTime: 6970 },
    { key: "D2", startTime: 8333 },
    { key: "C2", startTime: 8555 },
    { key: "B", startTime: 8838 },
    { key: "C2", startTime: 9305 },
    { key: "D2", startTime: 9551 },
    { key: "C2", startTime: 9836 },
    { key: "B", startTime: 10322 },
    { key: "A", startTime: 10863 }
]

export function playBeethoven() {
    beethoven.forEach(note => {
        const keys = document.querySelectorAll('.key')
        const target = note.key

        setTimeout(() => {
            keys.forEach(key => {
                if (key.dataset["note"] === target) {
                    key.classList.add('learn')
                    setTimeout(() => {
                        key.classList.remove('learn')
                    },250)
                }
            })
        }, note.startTime)
    })
}

export function playMozart() {
    mozart.forEach(note => {
        const keys = document.querySelectorAll('.key')
        const target = note.key

        setTimeout(() => {
            keys.forEach(key => {
                if (key.dataset["note"] === target) {
                    key.classList.add('learn')
                    setTimeout(() => {
                        key.classList.remove('learn')
                    }, 250)
                }
            })
        }, note.startTime)
    })
}

export function playVivaldi() {
    vivaldi.forEach(note => {
        const keys = document.querySelectorAll('.key')
        const target = note.key

        setTimeout(() => {
            keys.forEach(key => {
                if (key.dataset["note"] === target) {
                    key.classList.add('learn')
                    setTimeout(() => {
                        key.classList.remove('learn')
                    }, 250)
                }
            })
        }, note.startTime)
    })
}