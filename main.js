canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

cars_width = 80;
cars_height = 40;

car1_X_pos = 3;
car1_Y_pos = 10;
car2_X_pos = 5;
car2_Y_pos = 60;

canvas_img = "racing_track.jpg";
car1_img = "car1.png";
car2_img = "green.PNG";

function getScreen() {
    background_canvas_image = new Image();
    background_canvas_image.onload = draw_img_canvas;
    background_canvas_image.src = canvas_img;

    car1_set_img = new Image();
    car1_set_img.onload = draw_car1;
    car1_set_img.src = car1_img;

    car2_set_img = new Image();
    car2_set_img.onload = draw_car2;
    car2_set_img.src = car2_img;
}

function draw_img_canvas() {
    ctx.drawImage(background_canvas_image,0,0,canvas.width,canvas.height);
}

function draw_car1() {
    ctx.drawImage(car1_set_img,car1_X_pos,car1_Y_pos,cars_width,cars_height);
}

function draw_car2() {
    ctx.drawImage(car2_set_img,car2_X_pos,car2_Y_pos,cars_width,cars_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        console.log("up");
        up_button();
    }
    if (keyPressed == "40") {
        console.log("down");
        down_button();
    }
    if (keyPressed == "37") {
        console.log("left");
        left_button();
    }
    if (keyPressed == "39") {
        console.log("right");
        right_button();
    }
    if (keyPressed == "65") {
        console.log("a");
        a_button();
    }
    if (keyPressed == "68") {
        console.log("d");
        d_button();
    }
    if (keyPressed == "83") {
        console.log("s");
        s_button();
    }
    if (keyPressed == "87") {
        console.log("w");
        w_button();
    }
}



