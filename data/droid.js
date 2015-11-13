import mongoose from 'mongoose';

var DroidSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  friends: [{
    type: String,
    ref: 'Droid'
  }],
  appearsIn: [{
    type: Number
  }],
  primaryFunction: {
    type: String
  }
});
DroidSchema.index({ id: 1, name: 1 });
var Droid = mongoose.model('Droid', DroidSchema);

export default Droid;
