"use strict";
const twoPointCartesianDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
console.log(twoPointCartesianDistance(3, 2, 9, 7));
console.log(Math.sqrt(61)); 
