var mongoose = require('mongoose'),
    Dashboard = mongoose.model('Dashboard');

function dashboardController() {
    var _this = this;
    this.add_list = function(req, res) {
        console.log("req.body==", req.body);
        var dashboard = new Dashboard(req.body);
        dashboard.save(function(err, dashboard) {
            if (err){
              res.json(err);
              console.log(err);
            }
            else{
            res.json(dashboard);
            console.log(dashboard);
          }
        });
    }
      this.get_lists = function(req, res) {
        Dashboard.find({}, function(err, data) {
            res.json(data);
        })
    }
       this.tag = function(req, res) {
        console.log("======tag=====", req.params.id);
        Dashboard.findOne({_id:req.params.id}, function(error, dashboard){
            console.log(dashboard);
            dashboard.tagged_status = true;
            dashboard.save(function(error){
                if(error){
                    console.log(error);
                    res.json(err);
                }
                else {
                    console.log('successfully tagded an answer');
                    res.json({message: 'Taged Someone!', tagged_status: dashboard});
                }
            })
        })
    }

   
}

module.exports = new dashboardController();