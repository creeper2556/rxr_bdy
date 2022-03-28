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
let p = 0
let k = 0
let cd = 0
let gg: game.LedSprite = null
let yy: game.LedSprite = null
let zd: game.LedSprite = null
zd = game.createSprite(2, 2)
zd.delete()
yy = game.createSprite(2, 4)
gg = game.createSprite(2, 0)
let gx = -1
basic.forever(function () {
    cd += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (!(zd.get(LedSpriteProperty.Y) == 0) && k == 1) {
        zd.move(1)
        if (gg.isTouching(zd)) {
            win()
        }
        basic.pause(100)
    } else {
        k = 0
        zd.delete()
    }
    if (input.buttonIsPressed(Button.AB) && cd <= 0) {
        k = 1
        cd = 2
        zd = game.createSprite(yy.get(LedSpriteProperty.X), 3)
        zd.set(LedSpriteProperty.Direction, 0)
    }
})
basic.forever(function () {
    p = randint(0, 3)
    gx = (2 + zd.get(LedSpriteProperty.X)) % 5
    if (randint(0, 10) == 0) {
        gx = zd.get(LedSpriteProperty.X)
    }
    if (zd.isDeleted()) {
        gx = -1
    }
    if (gx != -1) {
        if (gx > gg.get(LedSpriteProperty.X)) {
            if (gg.get(LedSpriteProperty.X) + (5 - gx) < gx - gg.get(LedSpriteProperty.X)) {
                p = 0
            } else {
                p = 1
            }
        } else {
            if (gg.get(LedSpriteProperty.X) - gx < gx + (5 - gg.get(LedSpriteProperty.X))) {
                p = 0
            } else {
                p = 1
            }
        }
    }
    if (p == 0) {
        L(gg)
    } else {
        if (p == 1) {
            R(gg)
        }
    }
    basic.pause(200)
})
