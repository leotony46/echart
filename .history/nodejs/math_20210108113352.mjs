// math.js
/* jslint esversion: 6 */
var num = 0;
var add = function (a, b) {
    return a + b;
};
export { num, add };
console.log("num：" + num);
console.log("add: " + add);

// 导入
function test(ele) {
    ele.textContent = add(1 + num);
}
