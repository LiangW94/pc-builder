/**
 *
 */

function cpuDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
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

function motherboardDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      brand:
        product['Brand'] || product['productName'].split(' ')[0] || 'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      //   performanceLevel: ,
      inStock: product['inStock'],
      socket:
        product['CPU Socket Type'] ||
        product['AMD CPU Socket'] ||
        product['Intel CPU Socket'] ||
        '',
      chipset: product['Chipset'] || '',
      supportM2: product['M.2'] !== undefined,
      size: product['Form Factor'],
      wirelessLAN: product['Wireless LAN'] !== undefined
    };
  });
}

function memoryDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      brand:
        product['Brand'] || product['productName'].split(' ')[0] || 'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      //   performanceLevel: ,
      inStock: product['inStock'],
      capacity: product['RAM Capacity'] || '',
      frequency: product['RAM Speed'],
      ddr: product['productName'].indexOf('DDR4') > -1 ? 'DDR4' : 'DDR3',
      isDesktop: product['productName'].indexOf('Desktop') > -1,
      voltage: product['Voltage']
    };
  });
}

module.exports = { cpuDataMapper, motherboardDataMapper, memoryDataMapper };
