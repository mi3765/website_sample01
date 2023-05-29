const circle = document.getElementById('circle');
// console.log(circle);
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

var rotateValue = circle.style.transform;
// console.log(rotateValue);
var rotateSum;

upBtn.onclick = function() {
    // 時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(-90deg)";
    // console.log(rotateSum);
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    // console.log(rotateSum);
}

downBtn.onclick = function() {
    // 反時計回りに90度回転させる
    rotateSum = rotateValue + "rotate(90deg)";
    // console.log(rotateSum);
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    // console.log(rotateSum);
}