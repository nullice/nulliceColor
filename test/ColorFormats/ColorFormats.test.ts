import { ColorFormat_HEXA } from "../../src/core/ColorFormats/ColorFormat.HEXA"
import { ColorFormat_AHEX } from "../../src/core/ColorFormats/ColorFormat.AHEX"
import { ColorFormat_RGBA } from "../../src/core/ColorFormats/ColorFormat.RGBA"
import { ColorFormat_RGB } from "../../src/core/ColorFormats/ColorFormat.RGB"

test("ColorFormat.parse HEXA", () => {
    let colorOb

    colorOb = ColorFormat_HEXA.parse("#ff0011")
    expect(colorOb).toEqual({ alpha: 1, r: 255, g: 0, b: 17 })

    colorOb = ColorFormat_HEXA.parse("#f221")
    expect(colorOb).toEqual({ alpha: 0.067, r: 255, g: 34, b: 34 })

    colorOb = ColorFormat_HEXA.parse("#ff2")
    expect(colorOb).toEqual({ alpha: 1, r: 255, g: 255, b: 34 })

    colorOb = ColorFormat_HEXA.parse("#ff32122e")
    expect(colorOb).toEqual({ alpha: 0.18, r: 255, g: 50, b: 18 })
})

test("ColorFormat.parse AHEX", () => {
    let colorOb

    colorOb = ColorFormat_AHEX.parse("#ff0011")
    expect(colorOb).toEqual({ alpha: 1, r: 255, g: 0, b: 17 })

    colorOb = ColorFormat_AHEX.parse("#1f22")
    expect(colorOb).toEqual({ alpha: 0.067, r: 255, g: 34, b: 34 })

    colorOb = ColorFormat_AHEX.parse("#ff2")
    expect(colorOb).toEqual({ alpha: 1, r: 255, g: 255, b: 34 })

    colorOb = ColorFormat_AHEX.parse("#2eff3212")
    expect(colorOb).toEqual({ alpha: 0.18, r: 255, g: 50, b: 18 })
})

test("ColorFormat.parse RGBA", () => {
    let colorOb

    colorOb = ColorFormat_RGBA.parse("rgb(1, 255, 21)")
    expect(colorOb).toEqual({ r: 1, g: 255, b: 21 })

    colorOb = ColorFormat_RGBA.parse("rgbA(1, 255.0, 34.0,0.25)")
    expect(colorOb).toEqual({ alpha: 0.25, r: 1, g: 255, b: 34 })
})

test("ColorFormat.parse RGB", () => {
    let colorOb

    colorOb = ColorFormat_RGB.parse("rgb(10, 255, 21)")
    expect(colorOb).toEqual({ r: 10, g: 255, b: 21 })

    colorOb = ColorFormat_RGB.parse("rgb(1, 255.0, 34.0,0.25)")
    expect(colorOb).toEqual({   r: 1, g: 255, b: 34 })
})
