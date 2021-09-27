import CardGame from "../CardGame";
import './style.css';


function CardFrontBack() {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
       const $origin = event.target;
       const $cardFrontBack = $origin.closest('.card-front-back');

       $cardFrontBack.classList.toggle('-active');
    }

  return /*html*/ `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
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
