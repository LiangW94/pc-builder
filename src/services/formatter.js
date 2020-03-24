/**
 *
 */

function cpuDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      category: 'cpu',
      brand:
        product['Brand'] ||
        product['CPU Brand'] ||
        product['productName'].split(' ')[0] ||
        'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      tpd: product['TDP (Thermal Design Power)'],
      //   performanceLevel: ,
      inStock: product['inStock'],
      socket: product['AMD CPU Socket'] || product['Intel CPU Socket'] || '',
      integratedGPU: product['Discrete Graphics Required'] === 'No'
    };
  });
}

module.exports = { cpuDataMapper };
