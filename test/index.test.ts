import ColorRGB from "./../src/core/core"
import NulliceColor from "./../src/core/core"

test("new NulliceColor-#fff", () => {
    let color = new NulliceColor("#fff")

    expect(color).toEqual({ alpha: 1, b: 255, g: 255, r: 255 })
})

test("new NulliceColor-#fff", () => {
    let color = new NulliceColor("#ff2")

    expect(color).toEqual({ alpha: 1, b: 34, g: 255, r: 255 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.RGB)
})

test("new NulliceColor-#fff2", () => {
    let color = new NulliceColor("#ff22")
    expect(color).toEqual({ alpha: 0.133, b: 34, g: 255, r: 255 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.RGB)
})

test("new NulliceColor-#f1f2f3f0", () => {
    let color = new NulliceColor("#f1f2f3f0")
    expect(color).toEqual({ alpha: 0.941, b: 243, g: 242, r: 241 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.RGB)
})

test("new NulliceColor-rgb(1,233,14)", () => {
    let color = new NulliceColor("rgb(1,233,14)")
    expect(color).toEqual({ alpha: 1, b: 14, g: 233, r: 1 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.RGB)
})

test("new NulliceColor-rgba(1,233,14,0.44)", () => {
    let color = new NulliceColor("rgba(1,233,14,0.44)")
    expect(color).toEqual({ alpha: 0.44, b: 14, g: 233, r: 1 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.RGB)
})

test("new NulliceColor-hsla(1,233%,14%,0.44)", () => {
    let color = new NulliceColor("hsla(1,233%,14%,0.44)")
    expect(color).toEqual({ alpha: 0.44, h: 1, s: 233, l: 14 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.HSL)
})

test("new NulliceColor-hsl(1,233,14,0.44)", () => {
    let color = new NulliceColor("hsl(1,233,14)")
    expect(color).toEqual({ alpha: 1, h: 1, s: 233, l: 14 })
    expect(color.colorModel).toEqual(NulliceColor.ColorModels.HSL)
})
