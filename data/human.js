import mongoose from 'mongoose';

var HumanSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  friends: [{
    type: String,
    ref: 'Human'
  }],
  appearsIn: [{
    type: Number
  }],
  homePlanet: {
    type: String
  }
}, { collection: 'humans' });
HumanSchema.index({ id: 1, name: 1 });
var Human = mongoose.model('Human', HumanSchema);

export default Human;
