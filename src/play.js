import { playSong } from './record'

export const playButton = document.querySelector('.play')
playButton.addEventListener('click', playSong)