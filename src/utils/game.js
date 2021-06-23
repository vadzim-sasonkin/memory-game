export const cardStatuses = {
  HIDDEN: 'hidden',
  SHOWN: 'shown',
  GUESSED: 'guessed',
};

export function isCardDisabled(status, cards) {
  if (status === cardStatuses.GUESSED) {
    return true;
  }
  if (status === cardStatuses.SHOWN) {
    return false;
  }
  return cards.filter((card) => card.status === cardStatuses.SHOWN).length >= 2;
}
