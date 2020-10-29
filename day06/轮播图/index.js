var btn_l = document.querySelector('.btn-l')
var btn_r = document.querySelector('.btn-r')
var img = document.querySelector('.img')
var cicle = document.querySelector('.circle')
btn_l.addEventListener('click',function(){
    animate(img,600)
})
var i = 1
btn_r.addEventListener('click',function(){
    animate(img,-600*i);
    i++;
    console.log(i);
})