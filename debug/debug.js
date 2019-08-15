// Created by nullice on 2019/01/21 - 01:12

window.NulliceColor = window["nullice-color"].NulliceColor

let sRgb = new NulliceColor("#f92012")
let displayP3 = new NulliceColor("#f92012")

displayP3.colorSpace = NulliceColor.ColorSpaces.DisplayP3

console.log("sRgb", sRgb)

console.log("sRgb => xyz", sRgb.getXYZ())
console.log("displayP3 => xyz", displayP3.getXYZ())
console.log("sRgb => Lab", sRgb.getLab())
console.log("displayP3 => Lab", displayP3.getLab())
console.log("sRGB to displayP3", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.DisplayP3))
