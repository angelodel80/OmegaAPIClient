'use strict';

 function omegaRestCtr($scope,$http){
    console.log("start controller");
    $scope.name = 'Omega Client';
    $scope.data = '';
    $scope.content = '';
    $scope.action = function(){
        console.log('in function!');
        //$scope.data = 'in the action function';
        $http({
			method : 'GET',
            //url : 'http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false'
            url: 'http://localhost:8084/OmegaRest/webresources/Texts/'
		}).then(function(response) {
            console.log(response);
            $scope.data = response.data;
		});

        console.log($scope.data);
    }

    $scope.view = function(uri){
        console.log('in function view',uri);
       
        $http({
			method : 'GET',
            //url : 'http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=false'
            url: 'http://localhost:8084/OmegaRest/webresources/Texts/text'+uri
		}).then(function(response) {
            console.log(response);
            $scope.content = response.data;
        }, function(data){
            console.log(data);
            if(data.status === 302){
                console.log("text:", data.data.textContent);
                $scope.content = data.data.textContent;
            } else {
                console.log("error:", data);
                $scope.content = data.statusText;
            }
        }
    );

        //

    }
};

module.exports = omegaRestCtr;