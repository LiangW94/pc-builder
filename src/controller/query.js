const {
  CpuModel,
  MotherboardModel,
  MemoryModel,
  CaseModel,
  GpuModel,
  PsuModel,
  StorageModel,
  RecommendationModel,
} = require('../db/schema/index');
const { SuccessModel, ErrorModel } = require('../model/ResModel');
// const { encodeImage } = require('../utils/encoder');
const fs = require('fs');

async function searchByName(keyword, category) {
  try {
    const modelMapper = {
      cpu: CpuModel,
      motherboard: MotherboardModel,
      memory: MemoryModel,
      case: CaseModel,
      gpu: GpuModel,
      psu: PsuModel,
      storage: StorageModel,
    };
    const searchKeyWord = new RegExp(keyword, 'i');
    const searchPayload = keyword
      ? { $or: [{ name: searchKeyWord }, { brand: searchKeyWord }] }
      : {};

    if (category) {
      const Model = modelMapper[category];
      const result = await Model.find(searchPayload);
      return new SuccessModel(result);
    } else {
      // search all category
      const searchResult = [];

      for (const key in modelMapper) {
        const data = await modelMapper[key].find(searchPayload);
        data.length > 0 && searchResult.push(data);
      }
      const result = searchResult.flat();
      return new SuccessModel(result);
    }
  } catch (error) {
    return new ErrorModel({ errno: 1, message: error.message });
  }
}

async function fetchRecommendation() {
  try {
    const result = await RecommendationModel.find({});
    // let imageD = fs.readFileSync('./public/images/D.jpg');
    // imageD = encodeImage(imageD);
    return new SuccessModel({ result });
  } catch (error) {
    return new ErrorModel({ errno: 1, message: error.message });
  }
}

module.exports = {
  searchByName,
  fetchRecommendation,
};
