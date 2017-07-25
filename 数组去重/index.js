
//一数组去重
1.构建一个新的数组存放结果
2.for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比
3.若结果数组中没有该元素，则存到结果数组中.

Array.prototype.unique1 = function(){
   var res = [this[0]];
   for(var i = 1; i < this.length; i++){
var repeat = false;
for(var j = 0; j < res.length; j++){
   if(this[i] == res[j]){
    repeat = true;
    break;
   }
}
if(!repeat){
   res.push(this[i]);
}
   }
   return res;
}
var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
alert(arr.unique1());


1.创建一个新的数组存放结果
2.创建一个空对象
3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
Array.prototype.unique3 = function(){
 var res = [];
 var json = {};
 for(var i = 0; i < this.length; i++){
  if(!json[this[i]]){
   res.push(this[i]);
   json[this[i]] = 1;
  }
 }
 return res;
}
var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
alert(arr.unique3());
