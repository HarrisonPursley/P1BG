const {
    Box,
    Circle,
    Ellipse,
    Line,
    Point,
    Polygon,
} = require("detect-collisions");

const box = new Box(position, width, height, options);
const circle = new Circle(position, radius, options);
const ellipse = new Ellipse(position, radiusX, radiusY, step, options);
const line = new Line(start, end, options);
const point = new Point(position, options);
const polygon = new Polygon(position, points, options);

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

wall.strokeStyle = "#FFFFFF";
wall.beginPath();
system.draw(wall);

treasure.strokeStyle = "#FFD700"
treasure.beginPath();
system.draw(treasure);


    // ENVIRONMENT GEOMETRY
    // Treasure Room
    const wall = new Box((4, 64), 9, 1, isStatic);
    const wall = new Box((4, 72), 9, 1, isStatic);
    const wall = new Box((0, 68), 1, 9, isStatic);

    // Treasure Entity
    const treasure = new Circle((4, 68), 1, isTrigger);

    // Treasure Door
    const wall = new Box((48, 68), 1, 7, isTrigger);

    // Boss Room
    const wall = new Box((28, 80), 41, 1, isStatic);
    const wall = new Box((28, 56), 41, 1, isStatic);
    const wall = new Box((8, 60), 1, 9, isStatic);
    const wall = new Box((8, 76), 1, 9, isStatic);
    const wall = new Box((48, 60), 1, 9, isStatic);
    const wall = new Box((48, 76), 1, 9, isStatic);

    // Boss Door
    const wall = new Box((48, 68), 1, 7, isTrigger);

    // Boss Room Hallway
    const wall = new Box((64, 64), 33, 1, isStatic);
    const wall = new Box((68, 72), 41, 1, isStatic);
    const wall = new Box((88, 64), 1, 17, isStatic);
    const wall = new Box((72, 60), 1, 9, isStatic);
    const wall = new Box((84, 56), 9, 1, isStatic);

    // Shortcut Hallway
    const wall = new Box((60, 48), 25, 1, isStatic);
    const wall = new Box((56, 52), 1, 9, isStatic);

    // Shortcut
    const shortcut = new Box((48, 52), 1, 7, isTrigger);

    // Encounter 3
    const wall = new Box((80, 36), 1, 41, isStatic);
    const wall = new Box((68, 16), 25, 1, isStatic);
    const wall = new Box((48, 40), 1, 17, isStatic);
    const wall = new Box((64, 40), 17, 1, isStatic);
    const wall = new Box((72, 32), 1, 17, isStatic);
    const wall = new Box((56, 24), 1, 17, isStatic);
    const wall = new Box((60, 24), 9, 1, isStatic);

    // Encounter 2
    const wall = new Box((64, 8), 1, 17, isStatic);
    const wall = new Box((52, 0), 25, 1, isStatic);
    const wall = new Box((40, 8), 1, 17, isStatic);
    const wall = new Box((28, 16), 41, 1, isStatic);
    const wall = new Box((48, 20), 1, 9, isStatic);
    const wall = new Box((44, 24), 9, 1, isStatic);
    const wall = new Box((8, 36), 1, 41, isStatic);
    const wall = new Box((32, 28), 1, 9, isStatic);

    // Encounter 1
    const wall = new Box((12, 32), 9, 1, isStatic);
    const wall = new Box((16, 36), 1, 9, isStatic);
    const wall = new Box((36, 32), 25, 1, isStatic);
    const wall = new Box((24, 36), 1, 9, isStatic);
    const wall = new Box((32, 48), 1, 17, isStatic);
    const wall = new Box((36, 48), 9, 1, isStatic);
    const wall = new Box((40, 44), 1, 9, isStatic);

    // ENEMIES
    // Melee enemies
    const melee01 = new Box((28, 36), 1, 1, isTrigger);
    const melee02 = new Box((12, 44), 1, 1, isTrigger);
    const melee03 = new Box((60, 44), 1, 1, isTrigger);

    // Archer enemies
    const archer01 = new Box((28, 20), 1, 1, isTrigger);
    const archer02 = new Box((68, 28), 1, 1, isTrigger);
    const archer03 = new Box((52, 68), 1, 1, isTrigger);

    // Boss
    const boss = new Box((11, 68), 3, 3, isTrigger);
wall.stroke();