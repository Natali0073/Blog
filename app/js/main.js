angular
  .module("myBlog", [])
  .controller('BlogController', BlogController)

BlogController.$inject = ['$scope'];

function BlogController($scope){
//     localStorage.clear();
    $scope.messageArray = [];
    $scope.disabled = true;

    $scope.arrayMessages = [
      {
        userName: "Oleksa",
        userMessage: "sit amet consectetur adipisicing elit of them jean shorts sed magna aliqua Lorem ipsum dolor met",
        id: 0
      },
      {
        userName: "Ihor",
        userMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: 1
      },
      {
        userName: "Anonimus",
        userMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        id: 2
      }
    ];
    $scope.arrayMessages.forEach(function(el){
      var element = JSON.stringify(el);
      localStorage.setItem(el.id, element);
    })
    var id = Object.keys(localStorage).length;

    $scope.save = function(){
        var blogMessage = {
            userName: $scope.userName,
            userMessage: $scope.userMessage
        };
        var obj = JSON.stringify(blogMessage);
        id += 1;
        localStorage.setItem(id, obj);
        $scope.userMessage = '';
        $scope.userName = '';

        var messageObj = JSON.parse(localStorage.getItem(id));
        $scope.messageArray.unshift(messageObj);
    };

    for(var key in localStorage){
        var messageObj = JSON.parse(localStorage.getItem(key));
        $scope.messageArray.push(messageObj);
    }
    $scope.messageArray.reverse();

    $scope.editMessage = function(val){

    }
}
