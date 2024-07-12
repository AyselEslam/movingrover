function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadbackground;
    rover_imgTag.src = background_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed)
    if (keypressed == '38')
    {
        up();
        console.log("up");
    }
    if (keypressed == '40')
    {
        down();
        console.log("down");
    }
    if (keypressed == '37')
    {
        Left();
        console.log("left");
    }
    if (keypressed == '39')
    {
        right();
        console.log("right");
    }
}