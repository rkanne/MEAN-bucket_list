console.log("dashboardController");

app.controller('dashboardController', ['$scope','usersFactory','dashboardFactory','$location', '$cookies','$routeParams', function($scope, usersFactory, dashboardFactory, $location, $cookies,routeParams) {
$scope.new = {};
$scope.cookies = {};
console.log($cookies.get('name'));
if($cookies.getAll() === undefined){
  console.log('++++undefined+++');
  $location.url('main');
}
var cookies = $cookies.getAll();
  user = function(){
    console.log("user=======");
     $scope.currentUser = $cookies.get('name');
      usersFactory.user($scope.user, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.users = data.data;
          $scope.currentUser = $cookies.get('name');
        }
      });
    }
  var all_users = function(){
    console.log("dashboard=======Page");
      usersFactory.all_users($scope.user, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else
        {
          $scope.all_users = data.data;
        }
      });

    }
     var get_lists = function(){
      $scope.cookies = $cookies.get('id');
      console.log("---cookies----",$scope.cookies);
      dashboardFactory.get_lists(function(data){
        // console.log("=======inside get_list=======", data.data);
        if (data.data.errors){
          $scope.errors = data.data.errors;
          console.log($scope.errors);
        }
        else
        {
           $scope.get_lists = data.data; 
          // console.log("$scope._user===", data.data);
         }
      });
    }

  $scope.add_list = function(){
      $scope.new._user = $cookies.get('id');
      $scope.new.user_name = $cookies.get('name');
      // console.log("$scope.new====", $scope.new);
      dashboardFactory.add_list($scope.new, function(data){
       console.log("I am inside of dashboard-Controller ");
      if (data.data.errors)
      {
         $scope.errors = data.data.errors;
          console.log("-----errors-----", $scope.errors);
      }
      else{
        $scope.new = {};
      }
      get_lists();
    })
  }
 $scope.tag = function(id){
   console.log("|||====inside tag======||||", id);
    dashboardFactory.tag(id, function(data){
    console.log("====inside++++++ tag======", data);

    if (data.data.errors){
        $scope.errors = data.data.errors;
        console.log($scope.errors);
      }
      else
      {
         console.log("====inside++++++ tag======", data.data, id);                    
         get_lists();
      }
    });
  }
  $scope.logout = function(){
    console.log("inside logout");
    usersFactory.logout($scope.user, function(data){
      $cookies.remove('name');
      $location.url('main');
    });
  }




  user();
  all_users();
  get_lists();

}]);