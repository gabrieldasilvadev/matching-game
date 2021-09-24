import CardGame from "../../components/CardGame";

function BoardGame(cardGameAmount) {

    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(cardGameAmount)

    return $htmlBoardGame;
}

export default BoardGame; //Quando for usar a função em outro arquivo, deve criar esse export