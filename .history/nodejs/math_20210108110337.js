// math.js
/* jslint esversion: 7 */
var num = 0;
var add = function (a, b) {
    return a + b;
};
// export { num, add };

// 导入
import { num, add } from './math';
function test(ele) {
    ele.textContent = add(1 + num);
}