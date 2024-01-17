const {
    Box,
    Circle,
    Ellipse,
    Line,
    Point,
    Polygon,
} = require("detect-collisions");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

// ENVIRONMENT GEOMETRY
// Treasure Room
const box = new Box((4, 64), 9, 1, isStatic);
const box = new Box((4, 72), 9, 1, isStatic);
const box = new Box((0, 68), 1, 9, isStatic);

// Treasure Door
const box = new Box((48, 68), 1, 7, isTrigger);

// Boss Room
const box = new Box((28, 80), 41, 1, isStatic);
const box = new Box((28, 56), 41, 1, isStatic);
const box = new Box((8, 60), 1, 9, isStatic);
const box = new Box((8, 76), 1, 9, isStatic);
const box = new Box((48, 60), 1, 9, isStatic);
const box = new Box((48, 76), 1, 9, isStatic);

// Boss Door
const box = new Box((48, 68), 1, 7, isTrigger);

// Boss Room Hallway
const box = new Box((64, 64), 33, 1, isStatic);
const box = new Box((68, 72), 41, 1, isStatic);
const box = new Box((88, 64), 1, 17, isStatic);
const box = new Box((72, 60), 1, 9, isStatic);
const box = new Box((84, 56), 9, 1, isStatic);

// Shortcut Hallway
const box = new Box((60, 48), 25, 1, isStatic);
const box = new Box((56, 52), 1, 9, isStatic);

// Shortcut
const box = new Box((48, 52), 1, 7, isTrigger);

// Encounter 3
const box = new Box((80, 36), 1, 41, isStatic);
const box = new Box((68, 16), 25, 1, isStatic);
const box = new Box((48, 40), 1, 17, isStatic);
const box = new Box((64, 40), 17, 1, isStatic);
const box = new Box((72, 32), 1, 17, isStatic);
const box = new Box((56, 24), 1, 17, isStatic);
const box = new Box((60, 24), 9, 1, isStatic);

// Encounter 2
const box = new Box((64, 8), 1, 17, isStatic);
const box = new Box((52, 0), 25, 1, isStatic);
const box = new Box((40, 8), 1, 17, isStatic);
const box = new Box((28, 16), 41, 1, isStatic);
const box = new Box((48, 20), 1, 9, isStatic);
const box = new Box((44, 24), 9, 1, isStatic);
const box = new Box((8, 36), 1, 41, isStatic);
const box = new Box((32, 28), 1, 9, isStatic);

// Encounter 1
const box = new Box((12, 32), 9, 1, isStatic);
const box = new Box((16, 36), 1, 9, isStatic);
const box = new Box((36, 32), 25, 1, isStatic);
const box = new Box((24, 36), 1, 9, isStatic);
const box = new Box((32, 48), 1, 17, isStatic);
const box = new Box((36, 48), 9, 1, isStatic);
const box = new Box((40, 44), 1, 9, isStatic);

context.strokeStyle = "#000000";
context.beginPath();
system.draw(box);
context.stroke();