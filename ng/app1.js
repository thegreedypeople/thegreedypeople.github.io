var app = angular.module("app1", []);

var dev=1; // tru-1 or fals-0

let foot = '<div id="footer" class="mt-5 p-4 asphalt text-center">';
foot +='        <p>&copy; {{ footyear }}';
foot += '          <a href="https://{{ owner }}.github.io">{{ owner }}</a>.';
foot += '        </p>';
foot += '        <span class="tiny">This page was last updated on {{ lastupdate }}. <br>All rights reserved. All wrongs observed. </span>';
foot += '      </div>';

//console.log(foot);

// footer directive
app.directive("footer", function() {
    return {
        restrict : "M",
        replace : true,
        template : foot
    };
});

// controllers
app.controller('app1Ctrl', function($scope) {
$scope.lastupdate = "March 6, 2023";

$scope.showNav = false; //show navigation

$scope.navs = [
{nav:"Home",link:"/"},
{nav:"Blog",link:"/blog"}
];

//$scope.random = Math.floor(Math.random() * 6);

$scope.footyear = "03232015".slice(4)+' - '+new Date().getFullYear();

/*
$scope.project = [
"FFC0C7",
"FFF4A3",
"F3ECEA",
"D9EEE1",
"96D4D4",
"E7E9EB"
];
*/

$scope.owner = "thegreedypeople";

});
