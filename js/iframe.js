$(function () {
// ページ遷移
$('#location').click(function() {
window.location.href = '/';
// target="_top"
// top.location.href = '/';
});

// 3秒後にページ遷移
$('#jump').click(function() {
setTimeout(function(){
window.location.href = '2020.html';
}, 1800); 
});

// refresh埋め込み
$('#refresh').click(function() {  
$('head').append('<meta http-equiv="refresh" content="3; URL=/">');
});  

// Submit
$('#send').click(function() {
// action、methodの指定
// $('#values').attr({
//   'action':'send.php',
//   'method':'get'
// });
$('#values').submit();
});
});


