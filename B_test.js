var btn = document.querySelector('#color');
var color_code = document.querySelector('.color_code');
var btnCopy = document.querySelector('.color_copy');
var isCheck = document.getElementById('isCheck');

// lấy mã màu hex
function getBgColor() {
  var str = '0123456789ABCDEF';
  var colorCode = '#';
  for (var i=0; i<6; i++){
    colorCode += str.charAt(Math.floor(Math.random() * 16));
  }
  return colorCode
}

// set background theo màu đã lấy
btn.addEventListener("click", function(){
  var color = getBgColor();
  color_code.innerHTML = color;
  document.body.style.background = color;
  isCheck.checked = false;
})

// copy mã màu hex sau khi random
btnCopy.addEventListener("click", function() {
  navigator.clipboard.writeText(color_code.innerHTML);
  alert("Bạn đã copy mã màu: " + color_code.innerHTML)
})

// set màu gradient cho background khi bấm
isCheck.addEventListener("click", function(){
  if (isCheck.checked){
    var angle = Math.floor(Math.random() * 181);
    var color1 = getBgColor();
    var color2 = getBgColor();
    console.log(color1);
    console.log(color2);
    document.body.style.background = `linear-gradient(${angle}deg,${color1},${color2})`;
  }
})



