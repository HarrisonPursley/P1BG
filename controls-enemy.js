const {
    Box,
    Circle,
    Ellipse,
    Line,
    Point,
    Polygon,
} = require("detect-collisions");

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