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
// 方式-：使用时间戳实现
function throttle1(func, wait) {
    let previousTime = 0;
    return function() {
        const context = this;
        const args = arguments;
        const now = +new Date()
        if(wait < now - previousTime){
            previousTime = now;
            func.apply(context, args);
        }
    }
}

// 方式二：使用定时器实现
function throttle2(func, wait) {
    let timerId;
    return function() {
        const context = this;
        const args = arguments;
        if(!timerId) {
            timerId = setTimeout(() => {
                timerId = null
                func.apply(context, args)
            }, wait)
        }
    }
}