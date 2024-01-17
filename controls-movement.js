function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
        let moveSpeed = 2;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=(1+moveSpeed)
            }
            if(direction === 'north'){
                y+=(1+moveSpeed)
            }
            if(direction === 'east'){
                x+=(1+moveSpeed)
            }
            if(direction === 'south'){
                y-=(1+moveSpeed)
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'a'){
                direction = 'west'
            }
            if(e.key === 'w'){
                direction = 'north'
            }
            if(e.key === 'd'){
                direction = 'east'
            }
            if(e.key === 's'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
    system.checkAll(function(response: Response) {
        if (response.a.isCharacter && response.b.isWall) {
            // Player can't move through walls
            const { overlapV } = response;
            response.a.setPosition(
                response.a.x - overlapV.x,
                response.a.y - overlapV.y
            );
        } else if (response.a.isBullet && response.b.isEnemy) {
            // Bullet hits enemy
            system.remove(response.a); // Remove bullet
            response.b.takeDamage(); // Damage enemy
        }
    });
}