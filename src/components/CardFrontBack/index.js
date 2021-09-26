import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {
  return /*html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame("proa", "logo")}
            </div>
            <div class="card -back">
                ${CardGame("boo", "logo")}
            </div>
        </article>
    `;
}

export default CardFrontBack;
