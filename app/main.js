angular.module("myBlog", [])
        .controller('myCtrl', myCtrl)

myCtrl.$inject = ['$scope'];

function myCtrl($scope){
//     localStorage.clear();
    $scope.messageArray = [];
    var id = Object.keys(localStorage).length;
    
    $scope.save = function(){
        var blogMessage = {
            name: $scope.name,
            text: $scope.text
        };
        var obj = JSON.stringify(blogMessage);
        id += 1;
        localStorage.setItem(id, obj);
        $scope.text = '';
        $scope.name = '';

        var messageObj = JSON.parse(localStorage.getItem(id));
        $scope.messageArray.push(messageObj);
    };
  
    for(var key in localStorage){
        var messageObj = JSON.parse(localStorage.getItem(key));
        $scope.messageArray.push(messageObj);
    }
}