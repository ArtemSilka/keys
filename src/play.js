import { playSong } from './record'

export const playButton = document.querySelector('.play-button')
playButton.addEventListener('click', playSong)