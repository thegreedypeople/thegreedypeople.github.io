var app = angular.module("app1", []);

let foot = '<footer class="{{ asphalt }} container-fluid"><p class="p-4 container">© 2023 <a class="nodeco" href="https://thegreedypeople.github.io/">thegreedypeople</a></p></footer>';

//console.log(foot);

app.directive("footer", function() {
    return {
        restrict : "M",
        replace : true,
        template : foot
    };
});


// controllers


app.controller('app1Ctrl', function($scope) {

$scope.lastupdate = "March 4, 2023";;

$scope.project = [
"FFC0C7",
"FFF4A3",
"F3ECEA",
"D9EEE1",
"96D4D4",
"E7E9EB"
];

$scope.prod = 0 ; // tru-1 or fals-0
$scope.owner = "thegreedypeople";

$scope.footyear = "03232015".slice(4)+' - '+new Date().getFullYear();

$scope.navs = [
{nav:"Home",link:"/"},
{nav:"Blog",link:"/blog"}
];

});
