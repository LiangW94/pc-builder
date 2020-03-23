/**
 * @description fetch data from external source
 */
const { buildPayload } = require('../utils/payloadHelper');
const { MSY_CONFIG } = require('../utils/constants');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
const axios = require('axios');
const cheerio = require('cheerio');

let allProductLinks = [];
let productList = [];
let productCounter = 0;

/**
 * @description scrap all product links from a page
 */
async function scrapLinks() {
  try {
    allProductLinks = [];
    productList = [];
    productCounter = 0;
    const cpuPayload = buildPayload(MSY_CONFIG.CATEGORY_ID.CPU);
    const allProductListPage = await axios.post(
      `${MSY_CONFIG.MSY_DOMAIN}/GetFilteredProduct`,
      cpuPayload
    );
    const $ = cheerio.load(allProductListPage.data);

    $('.product-item').each((i, element) => {
      const $element = $(element);
      const id = $element.attr('data-productid');
      const image = $element.find('div a img').attr('src');
      const href = $element.find('div div a').attr('href');
      const productLink = {
        id,
        href: `${MSY_CONFIG.MSY_DOMAIN}${href}`,
        image
      };
      allProductLinks.push(productLink);
    });
    console.log('all cpu links fetched');

    await Promise.all(
      allProductLinks.map((product, index) => scrapItemFromLink(product, index))
    );
    return new SuccessModel(productList);
  } catch (error) {
    console.log(error);
    console.log('fetch link error');
    return new ErrorModel();
  }
}

/**
 * scrap product details
 * @param {Object} product
 * @param {Number} index
 */
async function scrapItemFromLink(product, index) {
  try {
    const productDetailPage = await axios.get(product.href);
    const $ = cheerio.load(productDetailPage.data);

    // scrap name sku id price
    const productName = $('.product-name h1')
      .text()
      .trim();
    const sku = $('.sku .value')
      .text()
      .trim();
    const sku_id = $('.sku .value').attr('id');
    const price = $('.product-price span').attr('content');
    const { image } = product;
    const productDetail = { productName, sku, sku_id, price, image };

    // scrap specification
    $('#specification tbody tr').each((i, element) => {
      const $element = $(element);
      const title = $element
        .find('.spec-name')
        .text()
        .trim();
      const value = $element
        .find('.spec-value')
        .text()
        .trim();
      productDetail[title] = value;
    });

    // scrap stock availability
    const availability = $('#stock-availability tbody')
      .find('.spec-value')
      .first()
      .children()
      .first()
      .text();
    productDetail.inStock = availability === 'In Stock';

    productList.push(productDetail);
    productCounter++;

    // TODO: add to log
    console.log(index + 1, ' of ', allProductLinks.length, ' fetched');
    console.log({ productCounter });
    console.log(productDetail);
  } catch (error) {
    console.log(error);
    console.log('fetch item error: ', product);
    return new ErrorModel();
  }
}

module.exports = {
  scrapLinks
};
