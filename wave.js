export class Wave{
  constructor(){
    this.absoluteY = 500;
    this.color = 'rgba(0,87,158,0.4)';
    this.totalpoints = 5; // the number of totalpoints

  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
    console.log(":resize");
  }
  
  init(){
    this.intervalx = this.stageWidth / this.totalpoints;
    this.x =new Array(this.totalpoints);
    this.y =new Array(this.totalpoints);

    for (let i=0; this.totalpoints > i;  i++){
      this.x[i] = Math.floor(this.intervalx * i) + 1 ;
      this.y[i] = (this.absoluteY + Math.floor(Math.random()*80) - 40);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(0,0)
    for (let i=0; this.totalpoints > i; i++){
      ctx.lineTo(this.x[i], this.y[i]);
      console.log(this.x[i], this.y[i]);
    }
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.fill();
    ctx.closePath();

  }

}