$(function(){
var width = $(window).width();

// 定期的に紙吹雪を降らす
var create = function(){

var kami = $("<div>")
.addClass("kami")
.css("left", rand(width))
.css("background", color());
$("body").append(kami);

// 数秒後にその要素はHTML上から取り除く
setTimeout(function(){
kami.remove();
}, 6000);

setTimeout(create, 300);
}
setTimeout(create, 300);

// 0~nまでの整数を返却
function rand(n){
return Math.floor( Math.random() * n );
}

// 十色の色をランダムに返す
function color(){
var colors = [
"rgb(255, 80, 79)",
"rgb(255, 230, 61)",
"rgb(80, 220, 100)",
"rgb(65, 195, 157)",
"rgb(77, 181, 220)",
"rgb(42, 115, 190)",
"rgb(110, 36, 165)",
"rgb(228, 91, 180)",
"rgb(50, 50, 50)",
"rgb(200, 200, 200)"
];

return colors[ rand(colors.length) ];
}
});