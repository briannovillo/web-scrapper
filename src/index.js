const fetch = require('./Fetch');
const {getAllH1, getAllH2, getAllH3, getDivsWithClass, getAWithClass} = require('./Parse');

const scrape = async () => {
  const lanacion = await fetch('https://www.lanacion.com.ar');
  console.log("La nacion:", await getAllH2(lanacion));

  const cnnes = await fetch('https://cnnespanol.cnn.com/category/argentina');
  console.log("CNN en español, categoría Argentina:", await getAllH2(cnnes));

  const bbc = await fetch('https://www.bbc.com/mundo/america_latina');
  console.log("BBC en español, categoría America Latina", await getAllH3(bbc));

  const infobae = await fetch('https://www.infobae.com');
  console.log("Infobae", await getDivsWithClass(infobae, '.headline'));

  const clarin = await fetch('https://www.clarin.com');
  console.log("Clarin", await getDivsWithClass(clarin, '.mt'));

  //const pagina12 = await fetch('https://www.pagina12.com.ar');
  //console.log("Pagina 12", await getDivsWithClass(pagina12, '.headline-content .element'));

  //const cronica = await fetch('https://www.cronica.com.ar');
  //console.log("Cronica", await getAWithClass(cronica, '.cover-link'));
};

scrape();
