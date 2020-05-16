import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, attack, defense, health } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  const attackElement = createElement({ tagName: 'span', className: 'fighter-attack' });
  const defenseElement = createElement({ tagName: 'span', className: 'fighter-defense' });
  const healthElement = createElement({ tagName: 'span', className: 'fighter-health' });

  nameElement.innerText = 'Nickname: ' + name + '\n';
  attackElement.innerText = 'Attack power: ' + attack + '\n';
  defenseElement.innerText = 'Defense ability: ' +  defense + '\n';
  healthElement.innerText = 'Health: ' + health + '\n';

  fighterDetails.append(nameElement, attackElement, defenseElement, healthElement);

  return fighterDetails;
}
