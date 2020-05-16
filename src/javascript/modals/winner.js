import { createElement } from "../helpers/domHelper";
import { showModal } from './modal';

export function showWinnerModal(fighter) {

    const winnerName = fighter.name;
    const attributes = { src: fighter.source };

    const winnerDetails = createElement({ tagName: 'div', className: 'modal-body' });
    const nameElement = createElement({ tagName: 'span', className: 'fighter-winnerName' });
    const imgElement = createElement({ tagName: 'img', className: 'fighter-image', attributes });

    nameElement.innerText = 'Winner is ' + winnerName + '\n';
    winnerDetails.append(nameElement, imgElement);

    const title = 'We are the champions, my friend!';
    const bodyElement = winnerDetails;
    showModal({ title, bodyElement });
}