const mongoose = require('../mongodb');
var Schema = mongoose.Schema;

const RecommendationSchema = new Schema({});

const RecommendationModel = mongoose.model(
  'Recommendation',
  RecommendationSchema
);
module.exports = RecommendationModel;
