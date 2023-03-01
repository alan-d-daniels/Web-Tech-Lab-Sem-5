$(document).ready(function(){
    $(document).keydown(function(event){
        var car = $('#car')
        var arrow = {left: 65, up: 87, right: 68, down: 83};       

        function right(){
            car.css('transform','rotate(360deg)');
            car.animate({left:'+=5px'},1);

        }

        function down(){
            car.css('transform','rotate(90deg)');
            car.animate({top:'+=5px'},1);

        }

        function up(){
            car.css('transform','rotate(270deg)');
            car.animate({top:'-=5px'},1);

        }

        function left(){
            car.css('transform','rotate(180deg)');
            car.animate({left:'-=5px'},1);

        }

        function reset(){
            car.css('transform','rotate(360deg)');            
            car.css({
                'top': '-607px',
                'right' : '-380px',
                'bottom' : '607px',
                'left': '380px'    
            });
        }



        if(event.which===arrow.right){
            if(parseInt(car.css("left"))<930){
                right();
                
            }
            else{                
                reset();
            } 
            
            if(Math.abs(parseInt(car.css("top")))>=612 && Math.abs(parseInt(car.css("top")))<=662){                
                reset();
            }
            if(Math.abs(parseInt(car.css("top")))>=337 && Math.abs(parseInt(car.css("top")))<=572){                
                reset();
            }
            
                        
            

        }
        else if(event.which===arrow.down){
            if(parseInt(car.css("left"))>=380 && parseInt(car.css("left"))<=925){
                if(parseInt(car.css("left"))>=500 && parseInt(car.css("left"))<=660){
                    down();
                    
                }
                else{
                    reset();
                }
                
                
            }
            else{
                down();
            }

            if( Math.abs(parseInt(car.css("top")))<=337){
                reset();
            }
            
            

        }
        else if(event.which===arrow.up){
            if(parseInt(car.css("left"))>=380 && parseInt(car.css("left"))<=925){
                if(parseInt(car.css("left"))>=500 && parseInt(car.css("left"))<=660){
                    up();
                    
                }
                else{
                    reset();
                }
                
                
            }
            else{
                up();

            }

            if(Math.abs(parseInt(car.css("top")))>=667){
                
                reset();
            }
           
            

        }
        else if(event.which===arrow.left){
            if(parseInt(car.css("left"))<930){
                left();
                
            }
            else{                
                reset();
            } 
            
            if(Math.abs(parseInt(car.css("top")))>=612 && Math.abs(parseInt(car.css("top")))<=662){                
                reset();
            }
            if(Math.abs(parseInt(car.css("top")))>=337 && Math.abs(parseInt(car.css("top")))<=572){                
                reset();
            }

        }
        
    })

    $("#at").click(function(){
        $("#txt").append(" <b>Appended text</b>.");
      });
    
    $("#al").click(function(){
        $("#lst").append("<li class='list-group-item'>Appended Item</li>");
    });  

    $("#pt").click(function(){
        $("#txt").prepend(" <b>Prepended text</b>.");
      });
    
    $("#pl").click(function(){
        $("#lst").prepend("<li class='list-group-item'>Prepended Item</li>");
    }); 
    $("#rl").click(function(){
        location.reload(true);
    }); 

    $("#gc").click(function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        var color= "#" + randomColor;
        $(".trapezoid").css("border-bottom-color",color);
      });

    $("#bc").click(function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        var color= "#" + randomColor;
        $(".rectangle").css("background-color",color);
    });

    $("#ti").click(function(){
        $(".circle").css("width","+=10");
        $(".circle").css("height","+=10");     
    });

    $("#td").click(function(){
        $(".circle").css("width","-=10");
        $(".circle").css("height","-=10"); 
    });
    $("#rl1").click(function(){
        location.reload(true);
    }); 
})
