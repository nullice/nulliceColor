import NulliceColor from "../../src/core/core"

test("RGB to HSL", () => {
    let color = new NulliceColor("#ff2244")
    expect(color).toEqual({ alpha: 1, r: 255, g: 34, b: 68 })
    let hsl = color.getHSL()
    expect(hsl).toEqual({ alpha: 1, h: 351, s: 100, l: 57 })
})
