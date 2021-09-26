import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

function BoardGame(amountCard) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlContent = $htmlCardFrontBack.repeat(amountCard);

  return /*html*/ `
        <section class="board-game">
            ${$htmlContent}
        </section>
        `;
}

export default BoardGame; //Quando for usar a função em outro arquivo, deve criar esse export
