console.log('Dashboard Factory!!');
app.factory('dashboardFactory', ['$http', function($http) {
  // constructor for our factory
  var dashboards = [];
  var dashboard = {};

  function dashboardFactory(){
    var _this = this;
    this.add_list = function(data, callback){
      $http.post('/add_list', data).then(function(returned_data){
      console.log("add_list return===",returned_data);
      callback(returned_data);
      });

    };
      this.tag = function(id, callback){
      $http.get(`/tag/${id}`).then(function(returned_data){
      console.log("************",id);
      callback(returned_data);
      });

    };
     this.get_lists = function(callback){
        $http.get('/get_lists').then(function(returned_data){
        console.log("-----lists-----Factory-------return-----",returned_data);
        callback(returned_data);
      });
    };
 
  };
  
  return new dashboardFactory;
}]);

