class Point {
  private _x: number = 0;
  private _y: number = 0;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  getX(): number {
    return this._x;
  }
  getY(): number {
    return this._y;
  }
  setX(x: number): void {
    this._x = x;
  }
  setY(y: number): void {
    this._y = y;
  }
  setXY(x: number, y: number) {
    this.setX(x);
    this.setY(y);
  }
  getXY(): number[] {
    return [this.getX(), this.getY()];
  }
  distance(anotherPoint: Point): number {
    const anotherXY = anotherPoint.getXY();
    const squareX = Math.pow(anotherXY[0] - this.getX(), 2);
    const squareY = Math.pow(anotherXY[1] - this.getY(), 2);
    return Math.sqrt(squareX + squareY);
  }
}

export { Point };
