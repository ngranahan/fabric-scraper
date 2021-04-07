const cheerio = require('cheerio');

function productIsAvailable(html) {
  const $ = cheerio.load(html);
  const addToCart = $('form').find('#form-action-addToCart').length >= 1 ? true : false;

  return addToCart;
}

module.exports = {
  productIsAvailable
};