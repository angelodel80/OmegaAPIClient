'use strict';
var Mark = require('mark.js');

function omegaRestCtr($scope, $http) {
    console.log("start controller");
    console.log("testing mark:", Mark);
    $scope.name = 'Omega Client';
    $scope.data = '';
    $scope.content = '';
    $scope.contextual = '';
    $scope.keyword = '';

    $scope.action = function () {
        console.log('in function!');
        //$scope.data = 'in the action function';
        $http({
            method: 'GET',
            url: 'http://localhost:8084/OmegaRest/webresources/Texts/'
        }).then(function (response) {
            console.log(response);
            $scope.data = response.data;
            console.log($scope.data);
        }, function (alternative) {
            $scope.name = 'ERRORE NELLA APLICAZIONE OMEGA CLIENT';
        });


    };

    $scope.view = function (uri) {
        console.log('in function view', uri);

        $http({
            method: 'GET',
            url: 'http://localhost:8084/OmegaRest/webresources/Texts/text' + uri
        }).then(function (response) { // attenzione per il momento il server restituisce 302 per il datao trovato
            console.log(response);
            $scope.content = response.data;
           
        }, function (alternative) {
            console.log(alternative);
            if (alternative.status === 302) {
                console.log("text:", alternative.data.textContent);
                $scope.content = ' ';

                //var markContext = angular.element(document).find('div')[5];
                //console.log('markcontext:', markContext);
                

                var context = document.querySelector("#content");
                context.innerHTML = alternative.data.textContent;
                console.log('context:', context);
                var instance = new Mark(context);
                console.log('instance:', instance);
                instance.mark($scope.keyword);
                console.log('instance:', instance);
                console.log('instance:', context);
                //context.mark('have');

                $scope.contextual = 'info contestuali per source' + alternative.data.source.uri;
            } else {
                console.log("error:", data);
                $scope.content = data.statusText;
            }
        });

    };

    $scope.search = function (k) {
        console.log('in function search', $scope.keyword);
        console.log('in function search', k);
        $scope.content = '';
        $scope.contextual = '';
        $scope.keyword = k;
        var context = document.querySelector("#content");
        context.innerHTML = '';

        $http({
            method: 'GET',
            url: 'http://localhost:8084/OmegaRest/webresources/Search/content?keyword=' + k
        }).then(function (response) {
            console.log('the response in search function:', response);
            $scope.data = response.data.result;
            console.log('the data in search function:', $scope.data);
        }, function (alternative) {
            $scope.name = 'ERRORE NELLA APLICAZIONE OMEGA CLIENT';
        });



    };
};

module.exports = omegaRestCtr;