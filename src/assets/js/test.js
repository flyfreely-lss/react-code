
    let a = 6;
    let b = 9;
    function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
      console.log(strings);
      console.log(aValExpression);
      console.log(bValExpression);
      console.log(sumExpression);
      return 'foobar';
    }
    let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
    let taggedResult=simpleTag`${a}+${b}=${a+b}`;
    // ["", " + ", " = ", ""]
    // 6
    // 9
    // 15
    console.log(untaggedResult);    // "6 + 9 = 15"
    console.log(taggedResult);      // "foobar"


  //****************************************** */
  var obj = {};
  // 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。
  // 数据描述符可选键值：value,writable
  Object.defineProperty(obj,'name',{
    value: 'Jack',
    writable: true,
    enumerable: true,
    configurable: true
  })
  // 存取描述符可选键值：get,set
  var bValue = 36;
  Object.defineProperty(obj, 'age', {
    get() { console.log('get...'); return bValue; },
    set(newValue) { bValue = newValue; },
    enumerable: true,
    configurable: true
  })
