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
$scope.lastupdate = "March 5, 2023";

$scope.navs = [
{nav:"Home",link:"/"},
{nav:"Blog",link:"/blog"}
];

// dream images
$scope.list = "https://dream.ai/listing/";
$scope.dreams = [
{ 
title: "Shallow Bay",
link: "2f1d10cf-9413-4e89-b651-9c0dcb29a430"},
{ 
title: "Himaya",
link: "7e644fe7-db9c-4490-ad29-0bdf194794c3"},
{ 
title: "The Greedy People",
link: "da85a037-d036-4b20-a16d-fa8165a63170"},
{ 
title: "DOTFB: Descendants of the first born",
link: "dbdb701b-a5b0-42e3-8557-325059b6c7d9"},
{ 
title:"dance with the devil",
link:"8cd22744-a261-420e-aed2-47751d76d42b"},
{
title:"the witch of mercury",
link:"84db3f58-85e7-42ba-8906-d93ebfb0be99"}];

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
