console.log('dashboard model');
// require mongoose
var mongoose = require('mongoose');
// create the schema
var dashboardSchema = new mongoose.Schema({
  title: {
      type: String,
      minlength: 5,
      required: true
  },
  description: {
      type: String,
      minlength: 10,
      required: true
  },

  user_name: {
      type: String,
      required: true
  },
  _user: {
      type: String,
      required: true
  },
  tagged_user: {
      type: String,
      required: true
  },
  tagged_status: {
      type: Boolean,
      default: false,
  },
}, 
  {
      timestamps: true
  });

var Dashboard = mongoose.model('Dashboard', dashboardSchema);