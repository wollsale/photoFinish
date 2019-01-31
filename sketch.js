var video;



var x = 0;
var crop = 4;
var go = false;

function setup() {
    video = createCapture(VIDEO, ready);
    createCanvas(1080, video.height);
    pixelDensity(1);
    background(51);
    video.size(video.width, video.height);
}

function ready() {
    go = true;
    console.log(video);
}

function exportCanvas() {
    save("image.jpg");
}

function draw() {
    filter(GRAY);
    video.loadPixels();

    var w = video.width;
    var h = video.height;

    // copy(srcImg, x, y, width, height, dx, dy, dwidth, dheight)
    if (go) {
        setTimeout(() => {
            copy(video, w / 2, 0, crop, h, x, 0, crop, h);
            x = x + crop;
        }, 2000);
    }

    if (x > width) {
        go = false;
        exportCanvas();
        noLoop();
    }
}