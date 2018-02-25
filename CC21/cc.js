var c = ['CE', 'CX', 'Prime', '84+', '89T'],
    cData = [],
    keyBind = [];
var index = 0;
var topBorder, bottomBorder, leftBorder, rightBorder, borderGroup, wall;
var SCENE_W = 1000;
var SCENE_H = 1000;

function preload() {
    for (var i = 0; i < 5; i++) {
        cData.push(loadImage('assets/' + c[i] + ".png"));
    }
    wall = loadImage('assets/wall.png');
}

function setup() {
    createCanvas(1000, 600);
    (cc = createSprite(0, 0, 0, 0)).setDefaultCollider();
    cc.addImage(c[1], cData[3]);
    cc.maxSpeed = 5;
    cc.friction = 0.01;

    borderGroup = new Group();
    (topBorder = createSprite(0, 0, SCENE_W, 50)).addImage('wall', wall);
/*     topBorder.scale = 10; */
    (bottomBorder = createSprite(0, SCENE_H, SCENE_W, 50)).addImage('wall', wall);
    bottomBorder.rotation = 180;
/*     bottomBorder.scale = 10; */
    (rightBorder = createSprite(SCENE_W / 2, SCENE_H / 2, 50, SCENE_H)).addImage('wall', wall);
    rightBorder.rotation = 90;
/*     rightBorder.scale = 10; */
    (leftBorder = createSprite(-SCENE_W / 2, SCENE_H / 2, 50, SCENE_H)).addImage('wall', wall);
    leftBorder.rotation = 270;
/*     leftBorder.scale = 10; */
    borderGroup.add(topBorder);
    borderGroup.add(bottomBorder);
    borderGroup.add(rightBorder);
    borderGroup.add(leftBorder);
    topBorder.immovable = true;
    bottomBorder.immovable = true;
    rightBorder.immovable = true;
    leftBorder.immovable = true;

    keyBind = ['W', 'A', 'S', 'D', 'SHIFT', 'UP', 'LEFT', 'DOWN', 'RIGHT'];
    noCursor();
}

function draw() {
    background(0);
    
    if (keyDown(keyBind[1]) || keyDown(keyBind[6]))
        cc.rotation -= 4;
    if (keyDown(keyBind[3]) || keyDown(keyBind[8]))
        cc.rotation += 4;
    if (keyDown(keyBind[0]) || keyDown(keyBind[5]))
        cc.addSpeed(0.15, cc.rotation);
    if (keyDown(keyBind[2]) || keyDown(keyBind[7]))
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
