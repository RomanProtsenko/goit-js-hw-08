import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

function getCurrentTime (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

window.addEventListener('DOMContentLoaded', setCurrentTime);

function setCurrentTime() {
  const currentTime = localStorage.getItem(CURRENT_TIME);
  if (currentTime) {
    player.setCurrentTime(JSON.parse(currentTime));
  }
}
