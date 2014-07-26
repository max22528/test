angular.module('changeNumberAnimate', [])
.factory('changeNumberAnimate', ['$interval','$timeout', function($interval,$timeout){
  var Timer,
      speed = 10,
      working = false; 

  var changeAction = function (obj) {
    if(!working){ 
      working = true;
      Timer = $interval(function(){          
        if(obj.newNum == obj.input){
          $interval.cancel(Timer);
          working = false; 
          return;  
        }
        else if(obj.newNum > obj.input){
          obj.newNum = obj.newNum - 1; 
        }
        else if(obj.newNum < obj.input){
          obj.newNum = obj.newNum + 1; 
        }      
      },speed);
    } 
  };
  return {
    changeNumber: function(inputSpeed){
      speed = inputSpeed || 10;
      if(working){ 
        $interval.cancel(Timer); 
        working = false;
      }
      this.input = parseInt(this.input,10);
      if(isNaN(this.input) || this.input < 0){
        this.input = 0;  
      } 
      changeAction(this);
    },
    getNewNum: function(){
      return newNum;
    }
  };

}]);