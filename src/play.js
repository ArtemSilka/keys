import { playSong } from './rec'

export const playButton = document.querySelector('.play-button')
playButton.addEventListener('click', playSong)