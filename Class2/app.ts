import { Point } from "./point";

const p1 = new Point(4, 34);
const p2 = new Point(4, 5);
console.log(p1.distance(p2));
p2.setY(39);
console.log(p2.getXY());
console.log(p2.distance(p1));
