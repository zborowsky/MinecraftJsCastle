let towersPoints: number[][] = []
function buildTowers () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 0),
    pos(8, 27, 8),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(40, 0, 40),
    pos(48, 27, 48),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(40, 0, 0),
    pos(48, 27, 8),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 40),
    pos(8, 27, 48),
    FillOperation.Replace
    )
}
function buildWalls () {
    blocks.fill(
    BRICKS,
    pos(1, 0, 1),
    pos(6, 16, 46),
    FillOperation.Keep
    )
    blocks.fill(
    BRICKS,
    pos(41, 0, 1),
    pos(46, 16, 46),
    FillOperation.Keep
    )
    blocks.fill(
    BRICKS,
    pos(1, 0, 1),
    pos(46, 16, 6),
    FillOperation.Keep
    )
    blocks.fill(
    BRICKS,
    pos(1, 0, 41),
    pos(46, 16, 46),
    FillOperation.Keep
    )
}
function beautifyTower () {
    towersPoints = [
    [
    1,
    1,
    7,
    7
    ],
    [
    41,
    41,
    47,
    47
    ],
    [
    41,
    1,
    47,
    7
    ],
    [
    1,
    41,
    7,
    47
    ]
    ]
    for (let element of towersPoints) {
        blocks.fill(
        AIR,
        pos(element[0], 24, element[1]),
        pos(element[2], 27, element[3]),
        FillOperation.Replace
        )
        for (let i = 0; i <= 3; i++) {
            blocks.fill(
            AIR,
            pos(element[0] - 1, 27 - i, element[1] + i),
            pos(element[2] + 1, 27 - i, element[3] - i),
            FillOperation.Replace
            )
            blocks.fill(
            AIR,
            pos(element[0] + i, 27 - i, element[1] - 1),
            pos(element[2] - i, 27 - i, element[3] + 1),
            FillOperation.Replace
            )
        }
    }
}
function buildLand () {
    blocks.fill(
    DIRT,
    pos(-20, 0, -20),
    pos(60, -3, 60),
    FillOperation.Replace
    )
}
function buildBridge () {
    blocks.fill(
    CRACKED_STONE_BRICKS,
    pos(0, -1, 22),
    pos(-19, -1, 26),
    FillOperation.Replace
    )
    blocks.fill(
    CRACKED_STONE_BRICKS,
    pos(-3, 0, 22),
    pos(-16, 1, 22),
    FillOperation.Keep
    )
    blocks.fill(
    CRACKED_STONE_BRICKS,
    pos(-3, 0, 26),
    pos(-16, 1, 26),
    FillOperation.Keep
    )
}
function buildWater () {
    blocks.fill(
    WATER,
    pos(-17, -1, -17),
    pos(57, -3, -12),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-12, -1, 52),
    pos(57, -3, 57),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(-17, -1, -17),
    pos(-6, -3, 57),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(52, -1, -13),
    pos(57, -3, 57),
    FillOperation.Replace
    )
}
function buildEntry () {
    blocks.fill(
    AIR,
    pos(0, 0, 22),
    pos(8, 10, 26),
    FillOperation.Replace
    )
}
function buildFrontWindows () {
    blocks.fill(
    AIR,
    pos(1, 3, 2),
    pos(5, 8, 6),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(0, 3, 2),
    pos(0, 8, 6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(1, 13, 2),
    pos(5, 18, 6),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(0, 13, 2),
    pos(0, 18, 6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(5, 3, 42),
    pos(1, 8, 46),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(0, 3, 42),
    pos(0, 8, 46),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(5, 13, 42),
    pos(1, 18, 46),
    FillOperation.Replace
    )
    blocks.fill(
    GLASS_PANE,
    pos(0, 13, 42),
    pos(0, 18, 46),
    FillOperation.Replace
    )
}
player.onChat("zamek", function () {
    player.teleport(pos(0, 0, 0))
    gameplay.timeSet(gameplay.time(DAY))
    gameplay.setWeather(CLEAR)
    buildLand()
    buildTowers()
    buildWalls()
    buildEntry()
    buildWater()
    buildBridge()
    buildFrontWindows()
    beautifyTower()
    player.teleport(pos(-19, 0, 24))
})
