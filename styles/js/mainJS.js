var mainHighChartApp = angular.module("mainHighChartApp", []);

mainHighChartApp.controller("mainUser_controller", function ($scope, $http, $filter) {

    var url = "https://jsonplaceholder.typicode.com/todos";

    $http.get(url).then(function (response) {
        $scope.allDataUsers = response.data;
    });

    // model selected Title axis chart
    $scope.modelTitleX = 'X';
    $scope.modelTitleY = 'Y';
    
    $scope.selectedPropertyUserX = '';
    $scope.selectedPropertyUserY = '';

    // Get properties user
    $scope.getPropertiesUser = function () {
        console.log("--------------- getPropertiesUser ----------");
        if (angular.isObject($scope.allDataUsers)) {
            $scope.propertiesUser = [];
            for (property in $scope.allDataUsers[0]) {
                $scope.propertiesUser.push(property);
            }

            $scope.selectedPropertyUserX = $scope.propertiesUser[2];
            $scope.selectedPropertyUserY = $scope.propertiesUser[1];
            
        } else {
            alert("Not have user data yet!");
            console.log("Not have user data yet!");
        }
        if($scope.propertiesUser != undefined && $scope.propertiesUser != null && $scope.propertiesUser.length > 0){
            

            console.log("\n * Properties of user:");
            var logResult = _.reduce($scope.propertiesUser, function(memo, element){ return memo.concat(element)}, []);
            console.log("Test _.reduce Underscore: " + logResult);


            console.log(" - modelTitleX: " + $scope.modelTitleX);
            console.log(" - modelTitleY: " + $scope.modelTitleY);

            console.log(" - selectedPropertyUserX: " + $scope.selectedPropertyUserX);
            console.log(" - selectedPropertyUserY: " + $scope.selectedPropertyUserY);
        }
        else {
            alert("Not have user data yet!");
        }

    };

    $scope.previewCharts = function () {
        console.log("\n--------------- previewCharts ----------");
        console.log("typeof properties => " + typeof ($scope.propertiesUser));

        console.log(" - modelTitleX: " + $scope.modelTitleX);
        console.log(" - modelTitleY: " + $scope.modelTitleY);

        // model selected property user
        if($scope.propertiesUser != undefined && $scope.propertiesUser != null && $scope.propertiesUser.length > 0){
            

            console.log("\n * Properties of user:");
            var logResult = _.reduce($scope.propertiesUser, function(memo, element){ return memo.concat(element)}, []);
            console.log("Test _.reduce Underscore: " + logResult);


            console.log(" - modelTitleX: " + $scope.modelTitleX);
            console.log(" - modelTitleY: " + $scope.modelTitleY);

            console.log(" - selectedPropertyUserX: " + $scope.selectedPropertyUserX);
            console.log(" - selectedPropertyUserY: " + $scope.selectedPropertyUserY);
        }
        else {
            alert("Not have user data yet!");
        }
    };


});