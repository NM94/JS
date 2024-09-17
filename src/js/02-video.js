import Player from '@vimeo/player'
import throttle from 'lodash.throttle'
const iframe = document.querySelector("#vimeo-player")
const player = new Player(iframe);
function  timeUD(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
    
};

player.on('timeupdate', throttle(timeUD,1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))