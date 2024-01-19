var config = {
    type: Phaser.AUTO,
    width: 656,
    height: 528,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var walls;
var playerCanMove = false;
var playerHealth = 3;
var playerHealthText;
var playerStamina = 5;
var playerStaminaText;
var isBlocking = false;
var gameOverText;

// Preload assets
function preload ()
{
    // Title Cards
    this.load.image('title-card', '/assets/UI/TitleCard.png')
    this.load.image('you-died', '/assets/UI/YouDied.png')
    this.load.image('victory', '/assets/UI/Victory.png')
    
    // Entities
    // Player + anims
    this.load.image('player-idle','/assets/Player/Player-Idle.gif')
    this.load.image('player-north','/assets/Player/Player-North.gif')
    this.load.image('player-south','/assets/Player/Player-South.gif')
    this.load.image('player-east','/assets/Player/Player-East.gif')
    this.load.image('player-west','/assets/Player/Player-West.gif')
    this.load.image('player-blocking','/assets/Player/Player-Blocking.png')
    this.load.image('player-blocked','/assets/Player/Player-Blocked.gif')
    this.load.image('player-swing','/assets/Player/Player-Swing.gif')

    // Melee + anims
    this.load.image('zombaloid-idle', '/assets/Zombaloid/Zombaloid-Idle.png')
    this.load.image('zombaloid-east', '/assets/Zombaloid/Zombaloid-East.gif')
    this.load.image('zombaloid-west', '/assets/Zombaloid/Zombaloid-West.gif')
    this.load.image('zombaloid-attack', '/assets/Zombaloid/Zombaloid-Attack.gif')

    // Ranged + anims
    this.load.image('warlock-idle', '/assets/Warlock/Warlock-Idle.gif')
    this.load.image('warlock-north', '/assets/Warlock/Warlock-North.gif')
    this.load.image('warlock-south', '/assets/Warlock/Warlock-South.gif')
    this.load.image('warlock-attack', '/assets/Warlock/Warlock-Attack.gif')
    this.load.image('warlock-fireball', '/assets/Warlock/Fireball.gif')

    // Boss + anims
    this.load.image('demon-idle', '/assets/Demon/Demon-Idle.gif')
    this.load.image('demon-north', '/assets/Demon/Demon-North.gif')
    this.load.image('demon-east', '/assets/Demon/Demon-East.gif')
    this.load.image('demon-west', '/assets/Demon/Demon-West.gif')
    this.load.image('demon-attack-hammer', '/assets/Demon/Demon-Attack-Hammer.gif')
    this.load.image('demon-attack-fireball', '/assets/Demon/Demon-Attack-Fireball.gif')
    this.load.image('demon-fireball', '/assets/Demon/DemonFireball.gif')

    // Pickups
    this.load.image('heart', '/assets/Pickups/Life.gif')
    
    // Tiles
    // Shortcut Lever
    this.load.image('lever-static', '/assets/Tiles/LeverStatic.png')
    this.load.image('lever-pulled', '/assets/Tiles/LeverPulled.gif')

    // Shortcut Door
    this.load.image('shortcut-door', '/assets/Tiles/ShortcutDoor.png')

    // Boss Door
    this.load.image('boss-door', '/assets/Tiles/BossDoor.png')

    // Floors
    this.load.image('floor-a', '/assets/Tiles/FloorA.png')
    this.load.image('floor-b', '/assets/Tiles/FloorB.png')
    this.load.image('tiled-floor', '/assets/Tiles/TiledFloor.png')
    
    // Walls
    this.load.image('wall-h', '/assets/Tiles/WallH.png')
    this.load.image('wall-p', '/assets/Tiles/WallP.png')
    this.load.image('wall-v', '/assets/Tiles/WallV.png')
    this.load.image('tiled-walls', '/assets/Tiles/TiledWalls.png')

}

function create ()
{
    this.add.image(327, 263, 'tiled-floor');
    this.add.image(168, 168, 'zombaloid-idle');
    this.add.image(40, 232, 'zombaloid-idle');
    this.add.image(472, 232, 'zombaloid-idle');
    this.add.image(168, 40, 'warlock-idle');
    this.add.image(488, 104, 'warlock-idle');
    this.add.image(360, 424, 'warlock-idle');
    this.add.image(104, 424, 'demon-idle');

    player = this.physics.add.sprite(231, 231, 'player-idle');
    cursors = this.input.keyboard.createCursorKeys();
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, walls);
    this.physics.add.overlap(player, hearts, collectHearts, null, this);
    this.physics.add.collider(player, enemyProjectiles, takeDamage, null, this);
    this.physics.add.collider(player, enemyMelee, takeDamage, null, this);
    playerHealth = this.add.text(16, 16, '3 HP', { fontSize: '32px', fill: '#000' })
    playerStamina = this.add.text(16, 48, '5 SP', { fontSize: '32px', fill: '#000' })
    this.anims.create({
        key: 'left',
        frames: this.anims('player-west'),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims('player-east'),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims('player-north'),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims('player-south'),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'space',
        frames: this.anims('player-swing'),
        frameRate: 4,
        repeat: -1
    });
    this.anims.create({
        key: 'rshift',
        frames: this.anims('player-blocking'),
        frameRate: 4,
        repeat: -1
    });

    hearts = this.physics.add.staticGroup({
        key: 'heart'
    });


    function collectHearts (player, heart)
    {
        heart.disableBody(true, true);
        playerHealth += 1;
        playerHealthText.setText(playerHealth + ' HP');
    }
    function takeDamage (player, enemyProjectiles)
    {
        enemyProjectiles.disableBody(true, true);
        playerHealth -= 1;
        playerHealthText.setText(playerHealth + ' HP');
    }
    function takeDamage (player, enemyMelee)
    {
        playerHealth -= 1;
        playerHealthText.setText(playerHealth + ' HP');
    }
    function blockDamage (player, enemyProjectiles)
    {
        enemyProjectiles.disableBody(true, true);
        playerStamina -= 1;
        playerStaminaText.setText(playerStamina + ' SP');
    }
    function blockDamage (player, enemyMelee)
    {
        playerStamina -= 1;
        playerStaminaText.setText(playerStamina + ' SP');
    }
    function gameOver (player)
    {
        if (playerHealth < 1)
        {
            gameOverText.setText('You Died');
        }
    }

    walls = this.physics.add.staticGroup();
    walls.create(7, 7, 'wall-p');
    walls.create(71, 7, 'wall-p');
    walls.create(135, 7, 'wall-p');
    walls.create(135, 7, 'wall-p');
    walls.create(39, 7, 'wall-h');
    walls.create(7, 39, 'wall-v');
}

function update ()
{
    this.input.keyboard.on('keydown-W', listener)
    this.input.keyboard.on('keydown-A', listener)
    this.input.keyboard.on('keydown-S', listener)
    this.input.keyboard.on('keydown-D', listener)
    this.input.keyboard.on('keydown-SPACE', listener)
    this.input.keyboard.on('keydown-SHIFT', listener)
}