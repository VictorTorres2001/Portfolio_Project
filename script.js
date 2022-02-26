window.onload = function(){
document.getElementById('name').onclick = changeColor;   
function changeColor() {
    function getColorCode() {
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var count = 0; count < 6; count++) {
           code =code+ makeColorCode[Math.floor(Math.random() * 16)];
        }
        return code;
     }
    document.getElementById('name').style.color = getColorCode()
    return true;
}
}