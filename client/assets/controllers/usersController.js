console.log("usersController");
app.controller('usersController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
$scope.userLogin = {name:""}
console.log('index page =====$cookies====='+$cookies.get('name'));
// if($cookies.get('name') !== undefined){
//   // $cookies.remove('name')
//   $location.url('main');
// }

$scope.register = function(){
    usersFactory.register($scope.user, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $cookies.put('id', data.data._id);
        $cookies.put('name', data.data.name);
        $location.url('dashboard');
      }
    })
  }
$scope.login = function(){
  console.log("here----", $scope.userLogin);
  if($scope.userLogin.name === ""){
    $scope.message = "Please enter your name!!"
    $location.url('/');
  }else{
    usersFactory.login($scope.userLogin, function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{

          $scope.user = data.data;
          $cookies.put('name', $scope.userLogin.name)
          $location.url('dashboard');
        }
      });
  }
  }//end function
     
     
}]);