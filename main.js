xX = 0
yY = 0
tX = 0
tY = 0
function preload(){
    mu = loadImage("https://i.postimg.cc/fRXS3LTn/Screen-Shot-2024-03-11-at-5-21-50-pm-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(800, 533)
    canvas.center()

    imag = createCapture(VIDEO)
    imag.hide()

    poser = ml5.poseNet(imag, loading)
    poser.on("pose", PosDaNos)
}

function draw(){
    image(imag, 0, 0, 800, 533)
    image(mu, tX, tY, 150, 100)
}

function loading(){
    console.log("I hate loading screens")
}

function PosDaNos(results){
    if(results.length > 0){
        console.log(results)
        xX = results[0].pose.nose.x
        yY = results[0].pose.nose.y
        tX = xX + 100
        tY = yY + 100
    }
}

function takeSnap(){
    save("im_uncle_dairy")
}