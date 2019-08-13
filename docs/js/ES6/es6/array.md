## Array 对象属性
* constructor	返回对创建此对象的数组函数的引用。
* length	设置或返回数组中元素的数目。
* prototype	使您有能力向对象添加属性和方法。
## 传统Array 对象方法
* toSource()	返回该对象的源代码。
* toString()	把数组转换为字符串，并返回结果。
* toLocaleString()	把数组转换为本地数组，并返回结果。
* valueOf()	返回数组对象的原始值

| 修改原数组 | 不修改原数组 |
| :------ | :------ |
| push， pop | concat | 
| unshift，shift | join | 
| sort | slice |
| reverse | indexOf()，lastIndexOf()|
| splice | forEach |
| copyWithin | map |
| fill | filter |
|  | some |
|  | every |
|  | reduce，reduceRight |
|  | includes |
|  | finde，findIndex |
|  | entries()，keys()，values() |

### 修改原数组
* push()	向数组的末尾添加一个或更多元素，并返回新的长度。
* unshift()	向数组的开头添加一个或更多元素，并返回新的长度。

* pop()	删除并返回数组的最后一个元素
* shift()	删除并返回数组的第一个元素

* sort()	对数组的元素进行排序
* reverse()	颠倒数组中元素的顺序。
* splice()	删除元素，并向数组添加新元素。
#### splice
##### 语法
arrayObject.splice(index,howmany,item1,.....,itemX)
```
var arr = new Array();
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

arr.splice(2,1);               //"George", "John"
arr.splice(1,0,"William");     //"George", "William", "John"
arr.splice(2,1,"haha");        //"George", "William", "haha"
```
### 不修改原数组
* concat()	连接两个或更多的数组，并返回结果。
* join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
* slice()	从某个已有的数组返回选定的元素
#### slice
##### 语法 
arrayObject.slice(start,end);
* start 必需。规定从何处开始选取。可为负，从数组尾部开始算起。
* end	可选。规定从何处结束选取。如果没有指定，那么切分的数组包含从 start 到数组结束的所有元素。可为负，从数组尾部开始算起。
```
var arr = new Array();
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

arr.slice(2,1);         //[]
arr.slice(1,2);         //"William"
arr.slice(-2,-1);         //"William"
```
> 将类似数组的对象(比如arguments)转换为真实的数组
Array.prototype.slice.call(arguments);
## ES5新增数组
* 索引方法：indexOf()，lastIndexOf()
* 迭代方法：forEach()、map()、filter()、some()、every()
* 归并方法：reduce()、reduceRight()
> 方法并不会修改原数组
### 索引方法
#### indexOf
```
array.indexOf(searchElement[, fromIndex])
```
* 返回整数索引值，如果没有匹配（严格匹配），返回-1。
* fromIndex可选，表示从这个位置开始搜索，若缺省或格式不合要求，使用默认值0。
```
var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x")); // 1 ("x"被忽略)
console.log(data.indexOf(5, "3")); // 4 (从3号位开始搜索)
```
#### lastIndexOf
```
array.lastIndexOf(searchElement[, fromIndex])
```
* 从字符串的末尾开始查找，而不是从开头。
* fromIndex的默认值是array.length - 1。
```
var data = [2, 5, 7, 3, 5];

console.log(data.lastIndexOf(5)); // 4
console.log(data.lastIndexOf(5, 3)); // 1 (从后往前，索引值小于3的开始搜索)

console.log(data.lastIndexOf(4)); // -1 (未找到)
```
> 两个方法在比较第一个参数与数组中的每一项时，会使用全等操作符， 要求必须完全相等,否则返回-1。
### 迭代方法
每个方法都接受两个参数，第一个参数callback（回调函数，必选），第二个参数是一个可选的上下文参数。
* 其中第一个参数callback接受三个参数， 当前项的值、当前项在数组中的索引、数组对象本身。即 function(value,index,arr) {}；需要注意的是与我们常用的jQuery中封装的方法区别在第一个参数和第二个参数，即index和value的顺序是相反的。
* 第二个参数是一个可选的上下文参数，是执行第一个函数参数的作用域对象，也就是上面说的callback中this所指向的值。 如果这第2个可选参数不指定，则使用全局对象代替（在浏览器是为window），严格模式下甚至是undefined。
需要注意的是除了forEach()方法，其余的迭代方法中callback需要有return值否则会返回undefined。
#### forEach
forEach()对数组进行遍历循环，对数组中的每一项运行给定的函数，这个方法没有返回值。
```
[].forEach(function(value, index, array) {
    // ...
}, [ thisObject]);
```
* forEach除了接受一个必须的回调函数参数，还可以接受一个可选的上下文参数（改变回调函数里面的this指向）（第2个参数）。
* 如果这第2个可选参数不指定，则使用全局对象代替（在浏览器是为window），严格模式下甚至是undefined.
```
[1, 2, 3, 4].forEach(function (item, index, array) {
  console.log(array[index] == item); // true
  sum += item;
});

alert(sum); // 10

var database = {
  users: ["张含韵", "江一燕", "李小璐"],
  sendEmail: function (user) {
    if (this.isValidUser(user)) {
      console.log("你好，" + user);
    } else {
      console.log("抱歉，"+ user +"，你不是本家人");	
    }
  },
  isValidUser: function (user) {
    return /^张/.test(user);
  }
};

// 给每个人法邮件
database.users.forEach(  // database.users中人遍历
  database.sendEmail,    // 发送邮件
  database               // 使用database代替上面标红的this
);

// 结果：
// 你好，张含韵
// 抱歉，江一燕，你不是本家人
// 抱歉，李小璐，你不是本家
```
#### map
map()指“映射”，对数组中的每一项运行给定的函数，返回每次函数调用的结果组成的数组。
```
[].map(function(value, index, array) {
    // ...
}, [ thisObject]);
```
```
var data = [1, 2, 3, 4];

var arrayOfSquares = data.map(function (item) {
  return item * item;
});

alert(arrayOfSquares); // 1, 4, 9, 16
```
#### filter
filter()，“过滤”，对数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
```
array.filter(callback,[ thisObject]);
```
* filter的callback函数需要返回布尔值true或false。
* 返回值只要是弱等于== true/false就可以了，而非非得返回 === true/false。
```
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var flag = arr3.filter(function(value, index) {
  return value % 3 === 0;
}); 
console.log(flag);  // [3, 6, 9]
```
#### every
every()，判断数组中每一项都是否满足所给条件，当所有项都满足条件，才会返回true。
```
array.every(callback,[ thisObject]);
```
```
var arr4 = [1, 2, 3, 4, 5];
var flag = arr4.every(function(value, index) {
  return value % 2 === 0;
}); 
console.log(flag);  // false
```
#### some
some()，判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
```
array.some(callback,[ thisObject]);
```
```
var arr5 = [1, 2, 3, 4, 5];
var flag = arr5.some(function(value, index) {
  return value % 2 === 0;
}); 
console.log(flag);   // true
```
### 归并方法
这两个方法相比前面可能稍微复杂一些，它们都会迭代数组中的所有项，然后生成一个最终返回值。这两个方法接收两个参数。
* 第一个参数callback，函数接受4个参数分别是（初始值total必选，当前值currentValue必选，索引值currentIndex可选，当前数组arr可选），函数需要返回一个值，这个值会在下一次迭代中作为初始值。
* 第二个参数是迭代初始值（initialValue），参数可选，如果缺省，初始值为数组第一项，从数组第一个项开始叠加，缺省参数要比正常传值少一次运算。
#### reduce
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。* * reduce() 对于空数组是不会执行回调函数的。
```
array. reduce(function(total, currentValue, currentIndex, array) {
    // ...
});
```
```
var arr9 = [1, 2, 3, 4];
var sum9 =arr9.reduce(function (total, curr, index, array) {
  return total * curr;
});
console.log(sum9);  // 24 
var sum9_1 =arr9.reduce(function (total, curr, index, array) {
  return total * curr;
}, 10);
console.log(sum9_1);  // 240
```
#### reduceRight
reduceRight()和reduce()相比，用法类似，差异在于reduceRight是从数组的末尾开始实现的。
```
array.reduceRight(callback,[ thisObject]);
```
```
var arr9 = [2, 45, 30, 80];
var flag = arr9.reduceRight(function (total, curr, index) {
  return total - curr;
});
var flag_1 = arr9.reduceRight(function (total, curr, index) {
  return total - curr;
},200);
console.log(flag);  // 3
console.log(flag_1);  // 43
```
### Array方法
#### isArray
判断参数是否是”Array”返回true或false。
```
var a = [1,2,3];
Array.isArray(a);   //true
```
## ES6数组方法

### Array方法
#### Array.from()
用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
```
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```
Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
```
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
```
#### Array.of()
用于将一组值，转换为数组。
```
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
```
### 实例方法
#### 会改变原数组 
##### copyWithin
在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
```
array. copyWithin(target, start = 0, end = this.length);
```
* target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
* start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
* end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```
// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]
```
##### fill
使用给定值，填充一个数组。
```
array. copyWithin(target, start = 0, end = this.length);
```
* target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
* start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
* end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```
['a', 'b', 'c'].fill(7);   // [7, 7, 7]

let arr = new Array(3).fill([]);
arr[0].push(5);       // [[5], [5], [5]]
```
#### 不会改变原数组
##### find
用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
```
array.reduceRight(callback,[ thisObject]);
```
```
[1, 4, -5, 10].find((n) => n < 0)
// -5
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```
##### findIndex
findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
```
array.reduceRight(callback,[ thisObject]);
```
```
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```
##### includes
返回一个布尔值，表示某个数组是否包含给定的值。
```
[1, 2, 3].includes(2)     // true
```
##### entries()，keys() 和 values()
ES6提供了三个新方法：entries()、keys()和values()，用来遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对数组的键名的遍历、values()是对数组键值的遍历，entries()方法是对数值的键值对的遍历。
```
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```
如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
```
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
```

### 参考链接
[ES5中新增的Array方法详细说明][1]

[给你最全的数组方法（之一ES5中的Array拓展方法）][2]


  [1]: http://www.zhangxinxu.com/wordpress/2013/04/es5%E6%96%B0%E5%A2%9E%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/?replytocom=288644
  [2]: https://zhuanlan.zhihu.com/p/28203292