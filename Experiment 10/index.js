var app=angular.module("myapp",["ngRoute"]);
app.controller("myctrl",($scope)=>{
    $scope.checkGender=()=>{
        if($scope.gender===undefined){
            $scope.gen_error="Gender is required"           
        }
        else{
            $scope.gen_error=""  
        }
       }
    
    $scope.checkState=()=>{
    if($scope.state===undefined){
        $scope.st_error="Select your Talent"           
    }
    else{
        $scope.st_error=""  
    }
    }

    $scope.checkName=function(){
        if(/\d/.test($scope.name)){
            $scope.nm_error="Name can't have numbers"
            
        }
        else{
            $scope.nm_error=""
            
        }}



    $scope.checkDept=function(){
        if(/\d/.test($scope.dept)){
            $scope.dept_error="Department can't have numbers"
            
        }
        else{
            $scope.dept_error=""
            
        }
        }


        $scope.checkYear=function(){
        if($scope.yr>=1 && $scope.yr<=4){
            $scope.yr_error=""            
        }
        else{
            $scope.yr_error="Year should between 1 to 4"            
        }}


        $scope.checkMob=function(){
            if($scope.ph!=undefined && $scope.ph.length===10){
                $scope.mob_error=""
                
            }
            else{
                $scope.mob_error="Mobile No must have 10 digits"
                
            }}

})

app.config(function($routeProvider){
    $routeProvider.when('/page1',{
        templateUrl:'./exp1.html'
    })
    .when('/page2',{
        templateUrl:'./exp2.html'
    })
    .when('/page3',{
        templateUrl:'./exp3.html'
    })
    .when('/page4',{
        templateUrl:'./exp4.html'
    })
    
    .otherwise({redirectTo:'/page1'})
    })


