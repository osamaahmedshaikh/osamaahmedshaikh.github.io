var app = angular.module("myApp", []);
app.controller("ctrl", function($scope,$http){
  $http.get("http://localhost:8080/Biodata/")
        .then(function (response) { 
          console.log("Biodatapage")
          // 0 means calling the latest data only.
          console.log(response.data)
          $scope.title1 = response.data[0].title;
          $scope.smalltitle = response.data[0].small;
          $scope.fullname = response.data[0].fullname;
          $scope.address = response.data[0].address;
          $scope.phone = response.data[0].phone;
          $scope.email = response.data[0].Email;
          $scope.image = response.data[0].images;
         });
$scope.title1 = "Hi, I'm Osama.";
$scope.smalltitle = "Python and Fullstack Developer.";
$scope.image = "WhatsApp Image 2021-05-26 at 3.29.23 PM.jpeg";
$scope.fullname = "Osama Shaikh";
$scope.bio1 = "I am currently a fourth-year student at the University of Ontario Institute of Technology pursuing a Bachelor's degree in Information Technology, Last Semester ";
$scope.bio2 = " GPA: 3.64. I have a lot of developing experience as I have worked on a lot of personal projects over 2018, 2019, and 2020. This has allowed me to improve";
$scope.bio3= "my front end and back end programming skills.";
$scope.bio4 = "I am currently part of the Computer Science club at Ontario Tech University where I try to take part in coding ";
$scope.bio5 = "competitions to improve my skills and avail more knowledge.";
$scope.bio6 = "Skills: Word, PowerPoint, Excel, Access. Python, C++, C#, HTML5, CSS3, Bootstrap";
$scope.bio7 = ", JavaScript, jQuery, PHP, Angular.js, Node.js, JSON, AJAX, XML, NoSQL, SQL, MongoDB, AJAX, RESTful API, Git/GitHub, and WordPress.";
$scope.bio8 = "I appreciate  growing my network and anxious to get familiar with new things and meet individual representatives and experts to share my encounters and information.";
$scope.bio9 = " Visit";
$scope.bio10 = "my Github to see all my projects and the recent project that I am currently working on. https://github.com/osamaahmedshaikh ";
$scope.bio11 = "contact: 𝐨𝐬𝐚𝐦𝐚.𝐬𝐡𝐚𝐢𝐤𝐡@𝐨𝐧𝐭𝐚𝐫𝐢𝐨𝐭𝐞𝐜𝐡𝐮.𝐧𝐞𝐭";
$scope.skills = "My Skills";
$scope.skills1 = "Python";
$scope.percent1 = "95";
$scope.skills2 = "HTML5";
$scope.percent2 = "90";
$scope.skills3 = "CSS3";
$scope.percent3 = "90";
$scope.skills4 = "JavaScript";
$scope.percent4 = "75";
$scope.skills5 = "jquery";
$scope.percent5 = "70";
$scope.skills6 = "Angular";
$scope.percent6 = "79";
$scope.skills7 = "Node";
$scope.percent7 = "60";
$scope.skills8 = "MongoDB";
$scope.percent8 = "82";
$scope.skills9 = "SQL";
$scope.percent9 = "88";
$scope.projects = "My Projects";
$scope.address = " Toronto, Canada";
$scope.phone = " Phone: 647-719-7345";
$scope.email = " Email: osama.shaikh@ontariotechu.net";
    });