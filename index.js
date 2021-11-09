import { Wave } from "./wave.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");    
    document.body.appendChild(this.canvas);

    this.wave = new Wave();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));

  }  
  
  resize() { // 해상도 증가 시키고 이를 축소 시켜 확대하더라도 ,Bitmap의 약점보완
    this.stageWidth = document.body.clientWidth;    
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2,2);

    this.wave.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
  

}



new App();