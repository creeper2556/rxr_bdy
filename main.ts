input.onButtonPressed(Button.A, function () {
    yy.move(-1)
})
input.onButtonPressed(Button.B, function () {
    yy.move(1)
})
let zd: game.LedSprite = null
let yy: game.LedSprite = null
yy = game.createSprite(2, 4)
let gg = game.createSprite(2, 0)
basic.forever(function () {
    gg.move(1)
    gg.ifOnEdgeBounce()
    basic.pause(2000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        zd = game.createSprite(yy.get(LedSpriteProperty.X), 3)
        zd.set(LedSpriteProperty.Direction, 0)
        while (!(zd.get(LedSpriteProperty.Y) == 0)) {
            zd.move(1)
            if (gg.isTouching(zd)) {
                game.gameOver()
            }
            basic.pause(100)
        }
        zd.delete()
    }
})
