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
      TDP: product['TDP (Thermal Design Power)'],
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

function caseDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      brand:
        product['Brand'] || product['productName'].split(' ')[0] || 'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      inStock: product['inStock'],
      size: product['Case Type'],
      withPowerSupply: product['With Power Supply'] === 'Yes',
      withSidePanelWindow: product['Side Panel Window'] !== 'No'
    };
  });
}

function gpuDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      brand:
        product['Brand'] || product['productName'].split(' ')[0] || 'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      inStock: product['inStock'],
      memorySize: product['VGA Memory Size'],
      memoryType: product['Memory Type'],
      chipsetManufacture: product['Chipset Manufacturer'],
      GPUseries: product['GPU SERIES'],
      GPU: product['GPU']
    };
  });
}

function psuDataMapper(rawData) {
  return rawData.map(product => {
    return {
      name: product['productName'],
      brand:
        product['Brand'] || product['productName'].split(' ')[0] || 'unbranded',
      price: product['price'],
      image: product['image'],
      retailerId: product['sku_id'],
      retailerSKU: product['sku'],
      inStock: product['inStock'],
      maximumPower: product['Maximum Power'],
      fan: product['PSU Fans'],
      efficiency: product['Efficiency'],
      certified: product['Energy-Efficient'],
      inputVoltage: product['PSU Input Voltage']
    };
  });
}

module.exports = {
  cpuDataMapper,
  motherboardDataMapper,
  memoryDataMapper,
  caseDataMapper,
  gpuDataMapper,
  psuDataMapper
};
