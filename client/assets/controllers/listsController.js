console.log("listsController");

app.controller('listsController', ['$scope','usersFactory','listsFactory','$location', '$cookies','$routeParams', function($scope, usersFactory, listsFactory, $location, $cookies,routeParams) {
$scope.new = {};
$scope.cookies = {};
console.log($cookies.get('name'));
if($cookies.getAll() === undefined){
  console.log('++++undefined+++');
  $location.url('index');
}
var cookies = $cookies.getAll();
  user = function(){
    console.log("bids=======");
     $scope.currentUser = routeParams.id;
      usersFactory.user($scope.user, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.users = data.data;
          $scope.currentUser = routeParams.id;
        }
      });
    }
 var bucket_lists = function(){
    $scope.routeParams = routeParams.id;
    console.log("===== bucket_lists=======",routeParams.id);
      listsFactory.bucket_lists(routeParams.id, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
          console.log($scope.errors)
        }
        else
        {
         $scope.bucket_lists = data.data;
          console.log("6666666", data.data);
         }
      });
    }
    var get_user = function(){
    console.log("===== get_user=======",routeParams.id);
      listsFactory.get_user(routeParams.id, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
          console.log($scope.errors)
        }
        else
        {
          $scope.get_user = data.data;
          console.log("get_user----",data.data._id);
         }
      });
    }


  $scope.logout = function(){
    console.log("inside logout");
    usersFactory.logout($scope.user, function(data){
      $cookies.remove('name');
      $location.url('index');
    });
  }




  user();
  bucket_lists();
  get_user();

}]);