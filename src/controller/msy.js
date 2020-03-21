/**
 * @description fetch data controller
 */

const { scrapLinks } = require('../scraperService/scraper');

async function fetchData() {
  return await scrapLinks();
}

module.exports = {
  fetchData
};
