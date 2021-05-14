// 函数防抖
// 原理：事件被触发n秒后执行，如果在n秒内又被触发，则重新计时
// 场景：1、按钮提交 2、搜索框联想
function debounce(func, delay){
    let timerId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}


// 函数节流
// 原理：函数在指定时间内多次点击，最终只执行一次
// 使用场景：1、鼠标不断点击 2、拖拽 3、缩放：监控浏览器resize
function throttle(func, delay) {
    let timerId;
    return function() {
        let context = this;
        let args = arguments;
        let now = +new Date();
        let lastTime;
        if(now < lastTime + delay) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                lastTime = now;
                func.apply(context, args);
            }, delay)
        }else{
            lastTime = now;
            func.apply(context, args);
        }
    }
}