import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';
import CardGame from './src/components/CardGame';
import PlayerName from './src/components/PlayerName';
import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';



const $root = document.querySelector('#root');
const $htmlPlayerName = PlayerName();


$root.insertAdjacentHTML(
    "beforeend",
    `   
        ${ScoreBoard()}
        ${BoardGame(2)}
    `
);