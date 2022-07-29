import '../css/custom.css';

    // CUSTOM
    const currentPath = window.location.pathname;
    const rootUrl = currentPath.split('/docs/')[0] + '/docs/';
    
    // // Add missing Event in Legend
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('tsd-kind-event');
    span.classList.add('tsd-kind-icon');
    span.textContent = "Event*";
    li.appendChild(span);
    const firstTsdLegend = document.querySelectorAll('ul.tsd-legend')[0];
    firstTsdLegend?.appendChild(li);
    
    // // add footnote for Legend
    const legend = document.querySelector(".tsd-legend-group");
    const footNoteForLegend = document.createElement('span');
    footNoteForLegend.textContent = "* An Event is a function which triggers playwright to manipulate the page. E.g. Clicking a button or entering text. They are categorised as such only so they are easier to find, they are still just functions.";
    footNoteForLegend.classList.add('foot-note-legend');
    legend?.appendChild(footNoteForLegend);
    
    // Clone legend and make sticky on right hand side
    const legendClone = legend!.cloneNode(true);
    const stickyLegend = document.createElement('legend-sticky');
    stickyLegend.appendChild(legendClone);
    const container = document.querySelector(".row");
    container?.appendChild(legendClone);
    const legendText = document.createElement('h3');
    legendText.innerText = 'Legend';
    stickyLegend.prepend(legendText);
    
    
    // Add API header
    const tree = document.getElementsByClassName("tree");
    const apiText = document.createElement('h2');
    apiText.innerText = 'API';
    tree[0]?.prepend(apiText);
    
    // Add link to easily view as basic list
    const viewList = document.createElement('a');
    const viewListParagraph = document.createElement('p');
    viewListParagraph.appendChild(viewList)
    const viewListText = document.createTextNode("View All Files");
    viewList.appendChild(viewListText);
    viewList.href = `${rootUrl}modules.html`;
    const apiList = document.querySelector('.js-category-list.category');
    tree[0]?.insertBefore(viewListParagraph, apiList);
    
    // add timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    const timestampText = document.createElement('span');
    timestampText.innerText = ` @ ${timestamp}`;
    const generatedText = document.querySelector(".tsd-generator p");
    generatedText?.appendChild(timestampText);
    
    // Remove buggy css which makes API box dissapear on window resize
    const apiBox = document.querySelector(".col-4.col-menu.menu-sticky-wrap.menu-highlight");
    apiBox?.classList.remove('col-menu');
    
    // add home icon
    const homeLink = document.createElement('a');
    homeLink.href = `${rootUrl}index.html`;
    const home = document.createElement('span');
    home.classList.add('home');
    homeLink.append(home);
    const toolbar = document.querySelector('.tsd-page-toolbar > .container');
    const tablewrap = document.querySelector('.table-wrap');
    toolbar?.insertBefore(homeLink, tablewrap);
    
    // add help icon
    const helpLink = document.createElement('a');
    helpLink.href = `${rootUrl}assets/how-to.html`;
    const help = document.createElement('span');
    help.classList.add('help');
    helpLink.append(help);
    toolbar?.insertBefore(helpLink, homeLink);
    helpLink.title = 'How to add to the AUIT documentation...'
    
    const middleColumn = document.querySelector('.col-4.menu-sticky-wrap.menu-highlight');

for (const item of document.querySelectorAll<HTMLElement>(
  '.js-category-title:not([data-id="root"])',
)) {
  item.addEventListener('click', () => {
    const id = item.dataset.id || '';

    const list = document.querySelector<HTMLElement>(
      `.js-category-list[data-id="${id}"]`,
    );

    const icon = document.querySelector(`.js-category-icon[data-id="${id}"]`);

    list?.classList.toggle('_open');
    icon?.classList.toggle('fa-folder-open');
  });
}

(() => {
  const pathname = window.location.pathname.replace('/docs', '');

  let activeElement = document.querySelector<HTMLElement>(
    `.js-category-link[data-id="${pathname}"]`,
  );

  if (!activeElement) {
    return;
  }

  activeElement.classList.add('_active');

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const parent: HTMLDivElement | null | undefined =
      activeElement?.closest<HTMLDivElement>('.js-category-list');

    if (!parent) {
      break;
    }

    parent.classList.add('_open');
    parent.parentNode
      ?.querySelector('.js-category-icon')
      ?.classList.add('category__folder--open');

    activeElement = parent.parentNode as HTMLElement;
  }
})();
