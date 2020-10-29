function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // console.log(obj.offsetLeft, target)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        } else {
            // console.log(obj.offsetLeft, step);
            obj.style.left = parseInt(getComputedStyle(obj)['left']) + step + 'px';
        }
    }, 15);
}