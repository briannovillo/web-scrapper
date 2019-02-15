const fetch = require('./Fetch');
const takeSnapshot = require('./Snap');
const {getElement} = require('./Parse');
const saveArrayIntoFile = require('./File');

const scrape = async () => {
  const sites = [
    {
      url: 'https://www.lanacion.com.ar',
      element: '.content-titulo',
      fileName: './scraped/lanacion.txt',
      description: 'La Nacion'
    },
    {
      url: 'https://www.nytimes.com/es',
      element: '.headline',
      fileName: './scraped/nytimes.txt',
      description: 'NY Times en español'
    },
    {
      url: 'https://cnnespanol.cnn.com/category/argentina',
      element: 'h2',
      fileName: './scraped/cnn.txt',
      description: 'CNN en español, categoría Argentina'
    },
    {
      url: 'https://www.bbc.com/mundo/america_latina',
      element: 'h3',
      fileName: './scraped/bbc.txt',
      description: 'BBC en español, categoría America Latina'
    },
    {
      url: 'https://www.infobae.com',
      element: 'div .headline',
      fileName: './scraped/infobae.txt',
      description: 'Infobae'
    },
    {
      url: 'https://www.clarin.com',
      element: 'div .mt',
      fileName: './scraped/clarin.txt',
      description: 'Clarin'
    },
    {
      url: 'https://www.pagina12.com.ar',
      element: 'div .headline-content',
      fileName: './scraped/pagina12.txt',
      description: 'Pagina 12'
    }
  ];


  sites.map(async site => {
    const html = await fetch(site.url);
    const titles = getElement(html, site.element);
    await saveArrayIntoFile(site.fileName, titles);
    await takeSnapshot(site.url);
    console.log(site.description, titles);
  });
};

scrape();
