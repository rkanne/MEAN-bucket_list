var mongoose = require('mongoose'),
    Dashboard = mongoose.model('Dashboard');
    User = mongoose.model('User');

function listsController() {
    var _this = this;
      this.bucket_lists = function(req, res) {
        console.log("id---",req.params.id);
        Dashboard.find({}, function(err, data) {
        if(err){
            console.log("something went wrong");
        } else {
            res.json(data);

         }
            
        })
    }
    this.get_user = function(req, res) {
        console.log("user---",req.params.id);
        User.findOne({_id: req.params.id}, function(err, data) {
        if(err){
            console.log("something went wrong");
        } else {
            res.json(data);
            console.log(data);

         }
            
        })
    }

   
}

module.exports = new listsController();