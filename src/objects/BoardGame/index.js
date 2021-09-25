import CardGame from "../../components/CardGame";
import './style.css';
import '../../styles/elements/base.css';

function BoardGame(amountCard) {

    const $htmlCardGame = CardGame();
    const $htmlContent= $htmlCardGame.repeat(amountCard);

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
        `;
}


export default BoardGame; //Quando for usar a função em outro arquivo, deve criar esse export