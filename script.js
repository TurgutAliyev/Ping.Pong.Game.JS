let ball = document.querySelector('#top');
let bar = document.querySelector('#pille');
let bar2 = document.querySelector('#pille1');
let vaxt1 = document.querySelector('#vaxt1');
let vaxt2 = document.querySelector('#vaxt2');
// let btn  = document.getElementById('btn');

// btn.style.display = 'none'

let ballX = 0;
let ballY = 0;
let x = 5;
let y = 5;
let barX = 0;
let barXx = 0;
let count = 0;
let count2 = 0;


document.addEventListener('keydown', barMove);
let set =  setInterval(ballMove, 40);


function barMove(e){

    if(e.keyCode == 39){
        if(barX<500){
            barX+=25;
        };
    }

    if(e.keyCode == 37){
        if(barX>0){
            barX-=25;
        }
    }

    bar.style.left = barX+'px';

    if(e.keyCode == 68){
        if(barXx < 500){
            barXx +=25;
        };
    }

    if(e.keyCode == 65){
        if(barXx > 0){
            barXx -=25;
        }
    }

    bar2.style.left = barXx +'px';
}


function ballMove(){
    if(ballX<0 || ballX>575){
        x*= - 1;
        ball.style.backgroundColor = 'blue'
    }
    else if(ballY<0 && ballX>=barXx-15 && ballX <= barXx+100){
        x++;
        y++;
        y*= -1;
        ball.style.backgroundColor = 'yellow'
    }else if(ballY<0){
        document.querySelector('#general').style.display = `none` ;
               count2 ++;
        vaxt2.innerHTML = count2;
         start()
    }

    ballX += x;
    ball.style.left = ballX + 'px';
    ballY += y;
    ball.style.top = ballY + 'px';

    if(ballY > 475){
        document.querySelector('#general').style.display = `none`
        count ++;
        vaxt1.innerHTML = count;
         start();
    }
    else if(ballY>470 && ballX>=barX-15 && ballX <= barX+100){
        x++;
        y++;
        y*= -1;
    }
}



function start(){
    console.log('test');
    clearInterval(set);
    ballX = 0;
    ballY = 0;
    x = 5;
    y = 5;
    barX = 0;
    barXx = 0;
    document.querySelector('#general').style.display = `block`
    set =  setInterval(ballMove, 40);
}