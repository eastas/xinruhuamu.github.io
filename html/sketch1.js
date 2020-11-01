let config = {
    //设计图的宽度
    paw: 2000,

}
let farmbg;
let catimg, dog, henimg;
//Jitter 类
//云类

class cloud {
    constructor() {
            this.x = random(width);
            this.y = random(height / 9);
            // this.diameter = random(10, 30);
            this.speed = random(.8, 1.5);
            this.flag = random(2.5, 5);
            this.width = farmcloud.width / this.flag;
            this.height = farmcloud.height / this.flag;
        }
        // mouseClicked(tchange);

    // tchange() {
    //     fill(255, 110, 24, .5)
    // }


    move() {
        // this.x += random(-this.speed, this.speed);
        // this.y += random(-this.speed, this.speed);
        if (this.x > width) {



            this.x = -100;
            this.y = random(height / 10);
            this.speed = random(0.8, 1.5);
            this.flag = random(2, 4);

            this.width = farmcloud.width / this.flag;
            this.height = farmcloud.height / this.flag;

        }
        this.x += this.speed;

        // this.y += this.speed;
    }

    display() {
        image(farmcloud, this.x, this.y, this.width, this.height)
            // ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}
class chicks {
    //  imgBox=[];
    constructor() {

        this.img = chickimg2;
        this.x = random(width / 15, width / 5);

        this.y = random(height / 2, height / 2.4);
        this.width = this.img.width / 2;
        this.height = this.img.height / 2;
        rotate(random(radians(90), radians(-10)));


        translate(this.x + this.width / 2, this.y + this.height / 2);

    }
    move() {

        if (this.x > width / 3.9) {
            this.x = random(width / 15, width / 5);
            this.y = random(height / 2, height / 2.5);



        } else {

            this.x = this.x + random(-.3, .8);
        }

    }
    display() {

        image(this.img, this.x, this.y, this.width, this.height);
        // image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);

    }


}
class dogs {
    constructor() {
        this.img = dogimg;
        // this.wing = henwingimg;
        // this.x = width / 1.3;
        this.x = random(width);

        this.y = height / 2;
        // this.y = height / 2.05;
        this.width = this.img.width / 3;
        this.height = this.img.height / 3;



    }


    tip() {
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {

            if (mouseIsPressed) {
                if (mouseButton == "center") {

                    // this.x = this.x;
                    // this.y = this.y;

                    if ((this.x > width / 1.35 && this.x < width / 1.1) && (this.y > height / 2.5 && this.y < height / 1.8)) {

                        // fill('255');

                        text('谢谢啦，汪汪', this.x - 16, this.y - 16);
                        text('对了，去找哈小青蛙大叔,它说有事找你', this.x - 20, this.y - 5);
                    } else {
                        text('对！就是回到菜地,汪汪，', this.x - 16, this.y - 16);

                    }

                } else {
                    text('哦！对头 我要德菜地边边看菜地，', this.x - 16, this.y - 16);
                    textSize(6);
                    text('!移动不了的话，试试按下鼠标滚轮键，', this.x - 10, this.y - 8);
                    textSize(8);

                }



            } else {
                // fill('255');

                text('完咯，完咯，我要搞啥子啊', this.x - 20, this.y - 15);
                text('', this.x - 20, this.y - 5);
            }


            // let a = (mouseX / width) * 90;
            // translate(this.wing.width, this.wing.height);
            // rotate(radians(a));
            // image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);




        }
    }
    move() {
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height) && mouseIsPressed) {
            if (mouseButton == "center") {

                this.x = mouseX - this.width / 2;
                this.y = mouseY - this.height / 2;

            }

        } else {

            this.x = this.x + random(-4, 4);
            this.y = this.y + random(-1, 1);
        }

        if (this.x >= width || this.x <= -this.width) {

            this.x = random(width);

        }
    }
    speak() {

    }

    display() {

        image(this.img, this.x, this.y, this.width, this.height);
        // image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);

    }


}
class hens {
    constructor() {
        this.img = henimg;
        this.wing = henwingimg;
        this.x = width / 5.4;
        // this.x = width / 4.2;
        this.y = height / 3.7;
        // this.y = height / 2.2;
        // this.y = height / 2.05;
        this.width = this.img.width / 3;
        this.height = this.img.height / 3;



    }


    tip() {
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {

            if (this.x <= width / 4.2 && this.x >= width / 18) {


            }

            if ((this.x <= width / 4.2 && this.x >= width / 15) && (this.y <= height / 1.9 && this.y >= height / 2.2)) {
                text('谢谢你啦，去帮帮小猫吧', this.x + 15, this.y - 5);



            } else {
                fill('#000');
                if (this.x == width / 5.4 && this.y == height / 3.5) {

                    text('', this.x + 15, this.y - 5);


                } else {

                    text('咯咯,我找不到鸡宝宝了', this.x + 15, this.y - 16);
                    text('带我找到它们吧', this.x + 15, this.y - 5);
                }


            }



        }
        if (this.x == width / 5.4 && this.y == height / 3.5) {


            text('有人吗？咯咯', this.x + 15, this.y - 5);
        }
        // let a = (mouseX / width) * 90;
        // translate(this.wing.width, this.wing.height);
        // rotate(radians(a));
        // image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);




    }
    findChild() {
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height) && mouseIsPressed) {
            this.x = mouseX - this.width / 2;
            this.y = mouseY - this.height / 2;




        }


    }
    speak() {

    }

    display() {

        image(this.img, this.x, this.y, this.width, this.height);
        image(this.wing, this.x + 5, this.y + 2, this.width / 1.8, this.height / 1.8);

    }


}

class flogs {
    constructor() {
        this.img = normalfrogimg;
        this.x = width / 1.41;
        this.y = height / 2.6;
        // this.x = width / 1.5;
        // this.y = height / 2.9;
        this.width = this.img.width / 3;
        this.height = this.img.height / 3;
        this.count = 0;



    }

    move() {

        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height) && mouseIsPressed) {
            if (mouseX <= this.x + this.width / 2) {
                this.x += random(1, 15);

            }
            if (mouseX >= this.x + this.width / 2) {
                this.x -= random(1, 15);


            }
            if (mouseY >= this.y + this.height / 2) {
                this.y -= random(1, 15);


            }
            if (mouseY <= this.y + this.height / 2) {
                this.y += random(1, 15);


            }

            // this.count++;

        }
    }
    speak() {

        // this.count = 0;
    }
    tip() {
        fill('#000');
        textSize(8);
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {


            // if (this.y == height / 2.6 && this.x == width / 1.41) {
            // fill('yellow');

            text('年轻人，呱，有梦想吗，呱呱', this.x - 30, this.y - 15);
            text('有的话就找到正确的荷叶吧进行挑战吧,呱！', this.x - 30, this.y - 5);


            // }




        }

        if ((mouseX >= width / 1.5 && mouseX <= width / 1.47) && (mouseY >= height / 2.9 && mouseY <= height / 2.85)) {

            text('厉害哦，这么快就发现了，呱呱', this.x - 30, this.y - 15);
            text('点击它，进入挑战吧，呱呱！', this.x - 20, this.y - 6);


        }

    }

    display() {
        image(this.img, this.x, this.y, this.width, this.height);
    }
}
class cats {
    constructor() {
        this.img = catimg;
        this.x = width / 2.05;
        this.y = height / 3.5;
        // this.y = height / 2.05;
        this.width = this.img.width / 3;
        this.height = this.img.height / 3;
        this.count = 0;



    }

    move() {

        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height) && mouseIsPressed) {
            if (mouseX <= this.x + this.width / 2) {
                this.x += random(1, 15);

            }
            if (mouseX >= this.x + this.width / 2) {
                this.x -= random(1, 15);


            }
            if (mouseY >= this.y + this.height / 2) {
                this.y -= random(1, 15);


            }
            if (mouseY <= this.y + this.height / 2) {
                this.y += random(1, 15);


            }

            // this.count++;

        }
    }
    speak() {

        // this.count = 0;
    }
    tip() {
        fill('#000');
        textSize(8);
        if ((mouseX >= this.x && mouseX <= this.x + this.width) && (mouseY >= this.y && mouseY <= this.y + this.height)) {


            if (this.y == height / 3.5 && this.x == width / 2.05) {
                // fill('yellow');

                text('喵喵喵，我下不去了，可以帮帮我吗', this.x - 8, this.y - 5);


            }
            if (this.y > height / 2.05) {
                text('', this.x - 8, this.y - 5);


            } else if (this.y == height / 3.5) {
                text('', this.x - 8, this.y - 5);


            } else {

                text('还有一点，加油', this.x - 8, this.y - 5);
            }


            if (this.y > height / 2.05) {
                // text('', this.x, this.y - 5);
                fill('green');

                text('^_^谢谢你啦，让我回到了地面', this.x - 8, this.y - 15);
                text('去找小狗吧，它会告诉你', this.x - 8, this.y - 5);



            }
        }

    }
    display() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

}

function preload() {
    //加载元素
    farmbg = loadImage('../images/farmscene/farmbg.png');
    catimg = loadImage('../images/farmscene/cat.png');
    dogimg = loadImage('../images/farmscene/dog.png');
    farmcloud = loadImage('../images/farmscene/farmcloud.png');
    farmcloud2 = loadImage('../images/farmscene/farmcloud2.png');
    // farmriverimg = loadImage('../images/farmscene/farmriver.png');
    henimg = loadImage('../images/farmscene/hen.png');

    chickimg1 = loadImage('../images/farmscene/chick1.png');
    chickimg2 = loadImage('../images/farmscene/chick2.png');
    chickimg3 = loadImage('../images/farmscene/chick3.png');
    henwingimg = loadImage('../images/farmscene/henwing.png');
    lotusleaf = loadImage('../images/farmscene/lotusleaf.png');
    lotusleaf2 = loadImage('../images/farmscene/lotusleaf2.png');
    failedfrog = loadImage('../images/farmscene/failedfrog.png');
    normalfrogimg = loadImage('../images/farmscene/normalfrog.png');
    // 加载叫声
    // catSpeak = loadSound("", [successCallback], [errorCallback], [whileLoading]);


}
// let x, y;


// Jitter 类
let clouds = []; // 声明物件
let chick = [];

function setup() {
    createCanvas(windowWidth, windowHeight);


    // 创造物件
    for (let i = 0; i < 8; i++) {
        clouds.push(new cloud());
    }
    // cloud1 = new cloud();
    cat = new cats();
    hen = new hens();
    dog = new dogs();
    flog = new flogs();
    for (let i = 0; i < 4; i++) {
        chick.push(new chicks());
    }


}

function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(244);

    background(farmbg);

    //循环生成云
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].move();
        clouds[i].display();
    }
    //河流
    //猫猫
    flog.display();
    flog.move();
    flog.tip();
    cat.display();
    cat.move();
    cat.speak();
    cat.tip();
    dog.tip();
    dog.move();
    dog.display();
    // 母鸡
    hen.display();
    hen.tip();
    hen.findChild();
    for (let i = 0; i < chick.length; i++) {
        // chick[i].move();
        chick[i].display();
        chick[i].move();
    }
    // chick.display();
    //
    // 狗狗







}





function tocalthe(pw) {
    let cw = width / 100;

    let rel = ((pw * width) / config.paw); //结果为当前canvan宽度的倍数



    return rel;

}