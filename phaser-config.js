var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // Player + anims
    this.load.image('player','/assets/Player/Player-Idle.gif')
    this.load.image('player-north','/assets/Player/Player-North.gif')
    this.load.image('player-south','/assets/Player/Player-South.gif')
    this.load.image('player-east','/assets/Player/Player-East.gif')
    this.load.image('player-west','/assets/Player/Player-West.gif')
}

function create ()
{
    this.add.image(400, 300, 'player');
}

function update ()
{

}