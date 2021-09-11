class Notification extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    
    const caption = wrapper.appendChild(document.createElement('h1'));
    caption.textContent = 'サイトを移転しました'

    const description = wrapper.appendChild(document.createElement('p'));
    description.textContent = '移転先は以下になります。'

    const siteLink = wrapper.appendChild(document.createElement('a'));
    const siteURL = 'https://kcabo.vercel.app/'
    siteLink.href = siteURL
    siteLink.textContent = siteURL

    const style = document.createElement('style');
    style.textContent = `
    .wrapper {
      line-height: 2;
      text-align: center;
      padding: 20px 0px;
      border: solid 2px gray;
      margin: 5px;
      font-size: 16px;
    }
    .wrapper > * {
      margin: 0;
    }
`;

    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define('new-site-notification', Notification);
