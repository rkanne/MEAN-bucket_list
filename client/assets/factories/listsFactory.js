console.log('Lists Factory!!');
app.factory('listsFactory', ['$http', function($http) {
  // constructor for our factory
  var bucket_lists = [];
  var bucket_list = {};

  function listsFactory(){
    var _this = this;
    this.bucket_lists = function(id, callback){
      console.log("I am in side the bucket_lists");
        $http.get('/bucket_lists/'+id).then(function(returned_data){
        console.log("=====id====", id);
        console.log("=====returned_data====", returned_data);
        callback(returned_data);
      });

    };
     this.get_user = function(id, callback){
      console.log("I am in side the get_user");
        $http.get('/get_user/'+id).then(function(returned_data){
        console.log("=====id====", id);
        console.log("=====returned_data====", returned_data);
        callback(returned_data);
      });

    };
 
  };
  
  return new listsFactory;
}]);

