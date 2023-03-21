// Define canvas element and set its size
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get context of canvas element
const ctx = canvas.getContext('2d');

// Define variables
let numShapes = Math.random() * 20;  // number of shapes to draw
let shapes = [];    // array to store shapes

// Define Shape class
class Shape {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
  }

  // Draw method to draw shape on canvas
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();
  }

  // Update method to update shape's position
  update() {
    this.x = this.x + Math.cos(this.angle) * this.speed;
    this.y = this.y + Math.sin(this.angle) * this.speed;
  }

  // Check boundaries method to make sure shape stays within canvas
  checkBoundaries() {
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.angle = Math.PI - this.angle;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.angle = -this.angle;
    }
  }
}

// Initialize shapes
for (let i = 0; i < numShapes; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 50 + 20;
  const speed = Math.random() * 2 + 1;
  shapes.push(new Shape(x, y, radius, speed));
}

// Animation loop to draw and update shapes
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw();
    shapes[i].update();
    shapes[i].checkBoundaries();
  }
}

animate();
