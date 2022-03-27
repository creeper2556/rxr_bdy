function L (sprite: game.LedSprite) {
    if (!(sprite.get(LedSpriteProperty.X) == 0)) {
        sprite.move(-1)
    } else {
        sprite.move(4)
    }
}
input.onButtonPressed(Button.A, function () {
    L(yy)
})
function win () {
    yy.delete()
    zd.delete()
    gg.delete()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("YOU WIN!")
}
input.onButtonPressed(Button.B, function () {
    R(yy)
})
function R (sprite: game.LedSprite) {
    if (!(sprite.get(LedSpriteProperty.X) == 4)) {
        sprite.move(1)
    } else {
        sprite.move(-4)
    }
}
let gx = 0
let p = 0
let gg: game.LedSprite = null
let yy: game.LedSprite = null
let zd: game.LedSprite = null
zd = game.createSprite(2, 2)
zd.delete()
yy = game.createSprite(2, 4)
gg = game.createSprite(2, 0)
let cd = 0
basic.forever(function () {
    p = randint(0, 3)
    if (p == 0) {
        L(gg)
    } else {
        if (p == 1) {
            R(gg)
        }
    }
    if (!(zd.isDeleted())) {
        gx = (0 + zd.get(LedSpriteProperty.X)) % 4
    }
    basic.pause(500)
})
basic.forever(function () {
    cd += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && cd <= 0) {
        cd = 2
        zd = game.createSprite(yy.get(LedSpriteProperty.X), 3)
        zd.set(LedSpriteProperty.Direction, 0)
        while (!(zd.get(LedSpriteProperty.Y) == 0)) {
            zd.move(1)
            if (gg.isTouching(zd)) {
                win()
            }
            basic.pause(100)
        }
        zd.delete()
    }
})
