## 资源事件
### beforeunload
window，document 及其资源即将被卸载
```
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
  return confirmationMessage;                                //Webkit, Safari, Chrome etc.
});
```
> 从Firefox 4、 Chrome 51、Opera 38 和Safari 9.1开始，通用确认信息代替事件返回的字符串。

## f11全屏事件
