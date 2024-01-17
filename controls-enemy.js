const {
    Box,
    Circle,
    Ellipse,
    Line,
    Point,
    Polygon,
} = require("detect-collisions");

// Melees
const melee01 = new Box((28, 36), 1, 1, isTrigger);
const melee02 = new Box((12, 44), 1, 1, isTrigger);
const melee03 = new Box((60, 44), 1, 1, isTrigger);

// Archers
const archer01 = new Box((28, 20), 1, 1, isTrigger);
const archer02 = new Box((68, 28), 1, 1, isTrigger);
const archer03 = new Box((52, 68), 1, 1, isTrigger);

// Boss
const boss = new Box((11, 68), 3, 3, isTrigger);
import { moveToCoordinates } from './controls-movement.js';
function controlEnemies(left, bottom, callback) {
    let direction = null;
    let x = left;
    let y = bottom;
    let moveSpeed = 1;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    function moveEnemy() {
        if (direction === 'west') {
            x -= (1 + moveSpeed)
        }
        if (direction === 'north') {
            y += (1 + moveSpeed)
        }
        if (direction === 'east') {
            x += (1 + moveSpeed)
        }
        if (direction === 'south') {
            y -= (1 + moveSpeed)
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
}