https://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions.js#

//animation, DOGGO
let counter = 0;
const numImg = 7;
let doggo, doggoAnimation, doggoImg;
let doggoJumping = false;
let bgImg, fgImg;

//asset
let bone;
let boneY = 150, boneX = 350; //initial position for bone 
let dogX = 100, dogY = 100; //initial position for doggo
let bgX = 0, bgY = 0; //initial position for background and foreground 


///ˋˋˋˋFUNCTION `````///
function preload (){

//asset ˇˇˇˇˇˇˇˇ asset  
    bgImg = loadImage('img/background.jpg');
    fgImg = loadImage('img/foreground.png');
    bone = loadImage('img/bone.png');
    boneAnimation = loadAnimation('img/bone.png');
    doggoAnimation = loadAnimation('img/dong0.png', 'img/dong6.png'); //('first image', 'last image')
    
    //ˇˇDog running animation ˇˇˇˇ dog running animationˇˇˇˇ
    
}


function setup() {
    createCanvas(1600, 900); //it works 
    //doggoSprite.scale = 3.0;
    doggo = createSprite(200, height/2, 300, 300);
    bone = createSprite(boneX, boneY, 100, 100);

    bone.addAnimation('bone', boneAnimation);
    doggo.addAnimation('doggo', doggoAnimation);

}


function draw () {
    image(bgImg, bgX, bgY);

    if (!doggoJumping){
        moveDoggo();
    }

    //doggo.collide(bone);
    drawSprites();
    image(fgImg, bgX, bgY);

    counter++
    bgX--
}

function keyPressed (){ 
    if (key === ' ') {  
        //jump!
        doggoJumping = true; //turns on the click 
        dogY-=20; 
        setTimeout(restJumping, 500);
    }
}

    function restJumping(){ //not jumping 
        doggoJumping = false;
    }
    function moveDoggo (){
        doggo.setSpeed(0,5);
    }

function doggoJumping(){

}
///ˇˇˇ infinite scrollong of the bgˇˇ  so far FAILED
/*(function() {
    window.requestAnimationFrame = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || function(callback) { window.setTimeout(callback, 1000 / 60); };

    var canvas = document.getElementById('bg');
    //var context = canvas.getContext('2d'); //error 
    var looping = false;
    var totalSeconds = 0;

    var img = new Image();
    img.onload = imageLoaded;
    img.src = 'img/background.jpg';

    function imageLoaded() {
        draw(0);

        var btn = document.getElementById('btnStart');
        btn.addEventListener('click', function() {
            startStop();
        });
    }

    var lastFrameTime = 0;

    function startStop() {
        looping = !looping;

        if (looping) {
            lastFrameTime = Date.now();
            requestAnimationFrame(loop);
        }
    }

    function loop() {
        if (!looping) {
            return;
        }

        requestAnimationFrame(loop);

        var now = Date.now();
        var deltaSeconds = (now - lastFrameTime) / 1000;
        lastFrameTime = now;
        draw(deltaSeconds);
    }

//http://bdadam.com/blog/panning-and-scrolling-background-images-using-the-canvas-element.html
function draw(delta) { //can I have more than 1 draw functions?
    totalSeconds += delta; 

    const bgSpeed = 100; //background rolling speed
    const numBgs = Math.ceil(canvas.width / background.width) + 1;
    let xpos = totalSeconds * bgSpeed % background.width;

    context.save();
    context.translate(-xpos, 0);

 for (var i = 0; i < numBgs; i++) {
     context.drawImage(background, i * background.width, 0);
 }
 context.restore();
}
*/
//how to bring foreground to the front?
//how to make the backgrod rolling infinitlely? call... background function 
