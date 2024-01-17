const character = newImage('/P1BG/assets/Player/Player-Placeholder.png')

function handleDirectionChange(direction){
    //Static
    if(direction === null){
        character.src = `/P1BG/assets/Player/Player-Placeholder.png`
    }
    //Left
    if(direction === 'west'){
        character.src = `/P1BG/assets/Player/Player-Placeholder.png`
    }
    //Up
    if(direction === 'north'){
        character.src = `/P1BG/assets/Player/Player-Placeholder.png`
    }
    //Right
    if(direction === 'east'){
        character.src = `/P1BG/assets/Player/Player-Placeholder.png`
    }
    //Down
    if(direction === 'south'){
        character.src = `/P1BG/assets/Player/Player-Placeholder.png`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)