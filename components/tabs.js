class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    this.cards = Array.from(this.cards).map(cardObject => new TabCard(cardObject));
    this.tabElement.addEventListener('click', () => this.selectTab());
  }
  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(nodeItem => { nodeItem.classList.remove('active-tab'); });
    const cards = document.querySelectorAll('.card');
    cards.forEach(nodeItem => { nodeItem.style.display = 'none'; });
    this.tabElement.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = 'flex';
  }
}

let tabs = document.querySelectorAll('.tab');

tabs.forEach(tabItem => {
  new TabLink(tabItem);
});
