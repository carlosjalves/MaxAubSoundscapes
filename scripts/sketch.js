let som;
let som2;
let som3;
let som4;
let som5;
let som6;
let som7;
let Vol = 0;
let Vol2 = 0;
let Vol3 = 0;
let Vol4 = 0;
let Vol5 =0.3;
let Vol6 = 0;
let Vol7 = 0;
let paused = false;
let fundo;
let fundo2;
let conta2 = true;
let a;
let b;
let c;
let d;
let e;
let f;
let g;

function preload() {
    soundFormats("mp3","wav");
    som = loadSound("data/Jukebox.wav");
    som2 = loadSound("data/Cafe.wav");
    som3 = loadSound("data/Ouvido.wav");
    som4 = loadSound("data/Barbeiro.wav");
    som5 = loadSound("data/Street2.wav");
    som6 = loadSound("data/Arroz.wav");
    som7 = loadSound("data/Empregada.wav");
    fundo = loadImage('data/desenhofinal.png');
    //fundo2 = loadImage('data/desenhofinal.png');
}

function setup() {
    fundo.resize(0,windowHeight-50);
    createCanvas(fundo.width, windowHeight-50);
    rectMode(CENTER);
    imageMode(CORNER);

    som.loop();
    som2.loop();
    som3.loop();
    som4.loop();
    som5.loop();
    som6.loop();
    som7.loop();

    let imgFundo = createImg(
        'data/desenhofinal.png',
        ''
    );

    document.body.style.width = fundo.width+"px";

    imgFundo.style('height', windowHeight-50+'px');
    imgFundo.position(0, 0, 'absolute');
    imgFundo.style('z-index', '-1');
}

function draw() {

    som.setVolume(Vol);
    som2.setVolume(Vol2);
    som3.setVolume(Vol3);
    som4.setVolume(Vol4);
    som5.setVolume(Vol5);
    som6.setVolume(Vol6);
    som7.setVolume(Vol7);

    //Volume
    if (!conta2) {
        Vol = a;
        Vol2 = b;
        Vol3 = c;
        Vol4 = d;
        Vol5 = e;
        Vol6 = f;
        Vol7 = g;
    } else {
        //jukebox
        Vol = map(dist(width - width / 3.7, height - 180, mouseX, mouseY), 0, 200, 0.9, 0);
        //Café
        Vol2 = map(dist(width / 3 - 110, height - 200, mouseX, mouseY), 0, 200, 0.9, 0);
        //Ouvido
        Vol3 = map(dist(width - 250, height - 140, mouseX, mouseY), 0, 300, 0.9, 0);
        //Barbeiro
        Vol4 = map(dist(210, height - 160, mouseX, mouseY), 0, 200, 0.8, 0);
        //Arroz
        Vol6 = map(dist(width / 2 + 230, height / 2 - 140, mouseX, mouseY), 0, 200, 0.8, 0);
        //Empregada
        Vol7 = map(dist(width / 2 - 50, height / 2 + 10, mouseX, mouseY), 0, 200, 0.8, 0);

    }
    if (Vol < 0) {
        som.pause();
        Vol = 0;
    } else {
        if (som.isPaused() && (!paused)) {
            som.play();
        }
        if (conta2) {
            Vol5 = map(dist(width - width / 3.7, height - 180, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }

    if (Vol2 < 0) {
        som2.pause();
        Vol2 = 0;
    } else {
        if (som2.isPaused() && (!paused)) {
            som2.play();
        }
        if (conta2) {
            Vol5 = map(dist(width / 3 - 110, height - 200, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }

    if (Vol3 < 0) {
        som3.pause();
        Vol3 = 0;
    } else {
        if (som3.isPaused() && (!paused)) {
            som3.play();
        }
        if (conta2) {
            Vol5 = map(dist(width - 250, height - 140, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }

    if (Vol4 < 0) {
        som4.pause();
        Vol4 = 0;
    } else {
        if (som4.isPaused() && (!paused)) {
            som4.play();
        }
        if (conta2) {
            Vol5 = map(dist(210, height - 160, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }

    if (Vol6 < 0) {
        som6.pause();
        Vol6 = 0;
    } else {
        if (som6.isPaused() && (!paused)) {
            som6.play();
        }
        if (conta2) {
            Vol5 = map(dist(width / 2 + 230, height / 2 - 140, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }

    if (Vol7 < 0) {
        som7.pause();
        Vol7 = 0;
    } else {
        if (som7.isPaused() && (!paused)) {
            som7.play();
        }
        if (conta2) {
            Vol5 = map(dist(width / 2 - 50, height / 2 + 10, mouseX, mouseY), 0, 500, 0, 0.3);
        }
    }
}

function windowResized() {
    resizeCanvas(fundo.width, windowHeight);
}

document.body.addEventListener("wheel", changePosition);

function getPosition(e) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return {x, y};
}

function changePosition(e) {
    let position = getPosition(e);
    mouseX = position.x;
    mouseY = position.y;
}

function mousePressed() {

        if ((conta2) && (mouseX<fundo.width-120 && mouseY>120 && mouseY<windowHeight-20)) {
            conta2 = false;
            zoomIn(mouseX, mouseY);
            a = Vol;
            b = Vol2;
            c = Vol3;
            d = Vol4;
            e = Vol5;
            f = Vol6;
            g = Vol7;
        } else {
            zoom.out();
            conta2 = true;
        }
}

function zoomIn(px, py) {
    px -= window.scrollX;
    zoom.to({x: px, y: py, scale: 3});
}

//Sound on/off
let icon_sound = document.querySelector(".sound");
let val=0;

icon_sound.addEventListener("click", function() {

    if(val===0){
        document.querySelector(".sound_off").classList.replace("sound_off", "img_sound_off");
        som.pause();
        som2.pause();
        som3.pause();
        som4.pause();
        som5.pause();
        som6.pause();
        som7.pause();
        val=1;
        paused=true;
    }else{
        document.querySelector(".img_sound_off").classList.replace("img_sound_off", "sound_off");
        som.play();
        som2.play();
        som3.play();
        som4.play();
        som5.play();
        som6.play();
        som7.play();
        val=0;
        paused=false;
    }
});