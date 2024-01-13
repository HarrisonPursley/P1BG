move(inventory).to(0, 0)

const character = newImage('assets/Player/Player-Placeholder.png')

function handleDirectionChange(direction){
    //Static
    if(direction === null){
        character.src = `assets/Player/Player-Placeholder.png`
    }
    //Left
    if(direction === 'west'){
        character.src = `assets/Player/Player-Placeholder.png`
    }
    //Up
    if(direction === 'north'){
        character.src = `assets/Player/Player-Placeholder.png`
    }
    //Right
    if(direction === 'east'){
        character.src = `assets/Player/Player-Placeholder.png`
    }
    //Down
    if(direction === 'south'){
        character.src = `assets/Player/Player-Placeholder.png`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)