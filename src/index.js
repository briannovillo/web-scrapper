const fetch = require('./Fetch');
const takeSnapshot = require('./Snap');
const {getAllH2, getAllH3, getElement, getDivsWithClass} = require('./Parse');
const saveIntoFile = require('./File');

const scrape = async () => {
  const lanacionUrl = 'https://www.lanacion.com.ar';
  const lanacion = await fetch(lanacionUrl);
  const lanacionTitles = await getElement(lanacion, '.content-titulo');
  saveIntoFile('../scraped/lanacion.txt', lanacionTitles);
  console.log("La nacion:", lanacionTitles);

  const nyTimesUrl = 'https://www.nytimes.com/es';
  const nyTimes = await fetch(nyTimesUrl);
  const nyTimesTitles = await getElement(nyTimes, '.headline');
  saveIntoFile('../scraped/nytimes.txt', nyTimesTitles);
  console.log("NY Times en español:", nyTimesTitles);

  const ccnesUrl = 'https://cnnespanol.cnn.com/category/argentina';
  const cnnes = await fetch(ccnesUrl);
  const cnnesTitles = await getAllH2(cnnes);
  saveIntoFile('../scraped/cnn.txt', cnnesTitles);
  console.log("CNN en español, categoría Argentina:", cnnesTitles);

  const bbcUrl = 'https://www.bbc.com/mundo/america_latina';
  const bbc = await fetch(bbcUrl);
  const bbcTitles = await getAllH3(bbc);
  saveIntoFile('../scraped/bbc.txt', cnnesTitles);
  console.log("BBC en español, categoría America Latina", bbcTitles);

  const infobaeUrl = 'https://www.infobae.com';
  const infobae = await fetch(infobaeUrl);
  const infobaeTitles = await getDivsWithClass(infobae, '.headline');
  saveIntoFile('../scraped/infobae.txt', infobaeTitles);
  console.log("Infobae", infobaeTitles);

  const clarinUrl = 'https://www.clarin.com';
  const clarin = await fetch(clarinUrl);
  const clarinTitles = await getDivsWithClass(clarin, '.mt');
  saveIntoFile('../scraped/clarin.txt', clarinTitles);
  console.log("Clarin", clarinTitles);

  const pagina12Url = 'https://www.pagina12.com.ar';
  const pagina12 = await fetch(pagina12Url);
  const pagina12Titles = await getDivsWithClass(pagina12, '.headline-content');
  saveIntoFile('../scraped/pagina12.txt', pagina12Titles);
  console.log("Pagina 12", pagina12Titles);

  takeSnapshot(lanacionUrl);
  takeSnapshot(nyTimesUrl);
  takeSnapshot(ccnesUrl);
  takeSnapshot(bbcUrl);
  takeSnapshot(infobaeUrl);
  takeSnapshot(clarinUrl);
  takeSnapshot(pagina12Url);
};

scrape();
