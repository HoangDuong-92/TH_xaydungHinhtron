let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;

    };
    this.getArea  = function () {
        return Math.PI * radius * radius;;

    };
};
let   circle1= new Circle(5);
// tạo ra một đối tượng  circle băng một lớp nhận vào tham sô là  bán kính là 5.
let radius1 = circle1.getRadius();
//tạo biến radius là bán kính đường tròn bằng thuộc tính ơ đối tượng circle thuộc lớp Circle
let area1 = circle1.getArea();
//tạo biến area  là diện tích đường tròn  băng thuộc tính  của dối tượng  circle thuộc lớp Circle.
alert("radius:" + radius1 + "; area:" + area1);

let circle2 = new Circle(9);
// tạo một đối tượng circle2  bằng  một lớp Circle nhận vào tham số là 9.
let radius2 = circle2.getRadius();
//tạo biến là bán kính đương tròn bằng thuộc tính ở đối tượng circle thuộc lớp circle
let area2 = circle2.getArea();
// tạo biến area là diện tích đường tròn bằng thuộc tính của đối tượng circle thuộc lớp circle
alert("radius:" + radius2 + "; area:" + area2);


let circle3 = new Circle(20);
let radius3 = circle3.getRadius();
let area3 = circle3.getArea();
alert("radius:" + radius3 + "; area:" + area3);
