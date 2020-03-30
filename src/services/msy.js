/**
 * @description service
 */

const { Cpu } = require('../db/model/index');

/**
 * Sequelize findOrCreate
 * @param {Array} productList
 */
async function findOrCreate(productList) {
  let createNumber = 0;
  const createProducts = [];
  await Promise.all(
    productList.map(async (product, i) => {
      const result = await Cpu.findOrCreate({
        where: { retailerSKU: product.retailerSKU },
        defaults: product
      });
      if (result[1]) {
        createNumber++, createProducts.push(result[0].dataValues);
      }
    })
  );
  console.log(createNumber, ' created: ', createProducts);
  return createProducts;
}

/**
 * Sequelize update
 * @param {Array} productList
 */
async function updateData(productList) {
  let updatedRow = 0;
  await Promise.all(
    productList.map(async (product, i) => {
      const { name, brand, price, image, inStock } = product;
      const result = await Cpu.update(
        { name, brand, price, image, inStock },
        {
          where: { retailerSKU: product.retailerSKU }
        }
      );
      result[0] > 0 && updatedRow++;
    })
  );

  return `updated rows: ${updatedRow}`;
}

/**
 * Mongoose findOneOrUpdate
 * @param {Array} productList
 * @param {*} model
 */
async function findOneOrUpdate(productList, Model) {
  let createNumber = 0;
  let updatedNumber = 0;
  const createdProducts = [];
  const updatedProducts = [];
  await Promise.all(
    productList.map(async (product, i) => {
      const result = await Model.find({ retailerSKU: product.retailerSKU });
      const isRecordExist = result.length > 0;
      if (isRecordExist) {
        const { name, brand, price, image, inStock } = product;
        await Model.updateOne(
          { retailerSKU: product.retailerSKU },
          {
            name,
            brand,
            price,
            image,
            inStock
          }
        );
        updatedNumber++;
        updatedProducts.push(product);
      } else {
        await Model.create(product);
        createNumber++;
        createdProducts.push(product);
      }
    })
  );
  console.log(createNumber, ' created ,', updatedNumber, ' updated');
  return { createdProducts, updatedProducts };
}

module.exports = {
  findOrCreate,
  updateData,
  findOneOrUpdate
};
