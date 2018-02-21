var c = ['CE', 'CX', 'Prime', '84+', '89T'],
    cData = [],
    keyBind = [];
var index = 0;
var topBorder, bottomBorder, leftBorder, rightBorder, borderGroup;
var SCENE_W = 1000;
var SCENE_H = 1000;

function preload() {
    for (var i = 0; i < 5; i++) {
        cData.push(loadImage('assets/' + c[i] + ".png"));
    }
}

function setup() {
    createCanvas(1000, 600);
    (cc = createSprite(0, 0, 0, 0)).setDefaultCollider();
    cc.addImage(c[1], cData[3]);
    cc.maxSpeed = 5;
    cc.friction = 0.01;

    borderGroup = new Group();
    (topBorder = createSprite(0, 0, SCENE_W, 50)).addImage;
    (bottomBorder = createSprite(0, SCENE_H, SCENE_W, 50);
    (rightBorder = createSprite(SCENE_W / 2, SCENE_H / 2, 50, SCENE_H);
    (leftBorder = createSprite(-SCENE_W / 2, SCENE_H / 2, 50, SCENE_H);
    borderGroup.add(topBorder);
    borderGroup.add(bottomBorder);
    borderGroup.add(rightBorder);
    borderGroup.add(leftBorder);
    topBorder.immovable = true;
    bottomBorder.immovable = true;
    rightBorder.immovable = true;
    leftBorder.immovable = true;

    keyBind = ['W', 'A', 'S', 'D', 'SHIFT'];
    noCursor();
}

function draw() {
    background(0);

    if (keyDown(keyBind[1]))
        cc.rotation -= 4;
    if (keyDown(keyBind[3]))
        cc.rotation += 4;
    if (keyDown(keyBind[0]))
        cc.addSpeed(0.15, cc.rotation);
    if (keyDown(keyBind[2]))
        cc.addSpeed(-0.10, cc.rotation);

    if (keyDown(keyBind[4])) {
        camera.zoom = 0.5;
    } else {
        camera.zoom = 1;
    }
    camera.position.x = cc.position.x;
    camera.position.y = cc.position.y;
    cc.bounce(borderGroup);
    drawSprites();


}

function debug() {
    push();
    fill(255);
    textSize(30);
    text(int([cc.position.x, cc.position.y]), cc.position.x, cc.position.y);
    pop();
}
