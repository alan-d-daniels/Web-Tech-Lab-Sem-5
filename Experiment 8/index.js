function cmtCtrl($scope){
    $scope.comments=[]
    $scope.postBtn=()=>{        
        if($scope.cmt!=''){
           
            $scope.heading="Comments";
            $scope.comments.push($scope.cmt); 
        }
    }

    $scope.remItem=($index)=>{
        $scope.comments.splice($index,1);
    }
}

function calcCtrl($scope){
    
    $scope.result=()=>{
        
        
        $scope.n1=Number($scope.n1);
        $scope.n2=Number($scope.n2);
        
        if($scope.operator=="+"){
            return "Result: "+($scope.n1+$scope.n2);
        }
        else if($scope.operator=="-"){
            return "Result: "+($scope.n1-$scope.n2);
            
        }
        else if($scope.operator=="X"){
            return "Result: "+($scope.n1*$scope.n2);
            
        }
        else if($scope.operator=="÷"){
            return "Result: "+($scope.n1/$scope.n2);        
        }
    }    

}

function todoCtrl($scope){
    $scope.tasks=[]
    $scope.addBtn=()=>{        
        if($scope.task!=''){
           
            $scope.heading="Tasks";
            $scope.tasks.push($scope.task); 
        }
    }

    $scope.remTask=($index)=>{
        $scope.tasks.splice($index,1);
    }
}


