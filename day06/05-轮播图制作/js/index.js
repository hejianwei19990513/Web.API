window.addEventListener('load', function() {
    var circle = document.querySelector('.circle')
    var focus = document.querySelector('.focus')
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r')
    var ul = document.querySelector('.focus ul')
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    var img_wid = ul.children[0].offsetWidth
    console.log(img_wid);
    focus.addEventListener('mouseover',function(){
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
    })
    focus.addEventListener('mouseout',function(){
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
    })
    for (var i = 0 ; i < ul.children.length; i++) {
        var li = document.createElement('li');
        circle.appendChild(li);
        li.index = i
        li.addEventListener('click',function(){
            for (var i = 0 ; i < circle.children.length;i++) {
                circle.children[i].className = ''
            }
            var num1 = this.index
            this.className = 'current';
            animate(ul,-img_wid * num1)
            num = num1 ;

        })
    }
    circle.children[0].className = 'current'
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    var num = 0
    var flag = true
    arrow_r.addEventListener('click',function(){
        if(!flag) return false;
        flag = false
        if(num == ul.children.length-1) {
            ul.style.left = 0;
            num = 0
        }
        num++;
        num1 = num
        console.log(img_wid, 233)
        animate(ul,-img_wid * num,function(){
            flag = true
        })
        for(var i = 0 ; i < circle.children.length ;i++) {
            circle.children[i].className = ''
        }
        if(num1 == circle.children.length) {
            num1= 0
        }
        circle.children[num1].className ='current'
    })
    arrow_l.addEventListener('click',function(){
        if(num == 0) {
            ul.style.left = -img_wid * circle.children.length+ 'px';
            num = circle.children.length
        }
        num--;
        num1 = num
        animate(ul,-img_wid * num)
        for(var i = 0 ; i < circle.children.length ;i++) {
            circle.children[i].className = ''
        }
        if(num1 == circle.children.length) {
            num1= 0
        }
        circle.children[num1].className ='current'
    })
    focus.addEventListener('mouseover',function(){
        clearInterval(time)
    })
    focus.addEventListener('mouseout',function(){
        time=setInterval(function(){
            arrow_r.click()
        },1000)
    })
    var time = setInterval(function(){
        arrow_r.click()
    },1000)
})