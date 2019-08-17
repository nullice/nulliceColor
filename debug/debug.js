// Created by nullice on 2019/01/21 - 01:12

window.NulliceColor = window["nullice-color"].NulliceColor

let sRgb = new NulliceColor("#f92012")
let displayP3 = new NulliceColor("#f92012")
let Rec709 = new NulliceColor("#f92012")
let Rec2020 = new NulliceColor("#f92012")
let ACES_CG_Linear = new NulliceColor("#f92012")
let AdobeRGB = new NulliceColor("#f92012")
let CIE_RGB = new NulliceColor("#f92012")
let AppleRGB = new NulliceColor("#f92012")
let ColorMatchRGB = new NulliceColor("#f92012")
let ProPhotoRGB = new NulliceColor("#f92012")

displayP3.colorSpace = NulliceColor.ColorSpaces.DisplayP3
Rec709.colorSpace = NulliceColor.ColorSpaces.Rec709
Rec2020.colorSpace = NulliceColor.ColorSpaces.Rec2020
ACES_CG_Linear.colorSpace = NulliceColor.ColorSpaces.ACES_CG_Linear
AdobeRGB.colorSpace = NulliceColor.ColorSpaces.AdobeRGB
CIE_RGB.colorSpace = NulliceColor.ColorSpaces.CIE_RGB
AppleRGB.colorSpace = NulliceColor.ColorSpaces.AppleRGB
ColorMatchRGB.colorSpace = NulliceColor.ColorSpaces.ColorMatchRGB
ProPhotoRGB.colorSpace = NulliceColor.ColorSpaces.ProPhotoRGB

console.log("sRgb", sRgb)

console.log("sRgb => xyz", sRgb.getXYZ())
console.log("displayP3 => xyz", displayP3.getXYZ())
console.log("Rec709 => xyz", Rec709.getXYZ())
console.log("Rec2020 => xyz", Rec2020.getXYZ())
console.log("ACES_CG_Linear => xyz", ACES_CG_Linear.getXYZ())
console.log("AdobeRGB => xyz", AdobeRGB.getXYZ())
console.log("CIE_RGB => xyz", CIE_RGB.getXYZ())
console.log("AppleRGB => xyz", AppleRGB.getXYZ())
console.log("ColorMatchRGB => xyz", ColorMatchRGB.getXYZ())
console.log("ProPhotoRGB => xyz", ProPhotoRGB.getXYZ())

console.log("sRgb => Lab", sRgb.getLab())
console.log("displayP3 => Lab", displayP3.getLab())
console.log("Rec709 => Lab", Rec709.getLab())
console.log("Rec2020 => Lab", Rec2020.getLab())
console.log("ACES_CG_Linear => Lab", ACES_CG_Linear.getLab())
console.log("AdobeRGB => Lab", AdobeRGB.getLab())
console.log("CIE_RGB => Lab", CIE_RGB.getLab())
console.log("AppleRGB => Lab", AppleRGB.getLab())
console.log("ColorMatchRGB => Lab", ColorMatchRGB.getLab())
console.log("ProPhotoRGB => Lab", ProPhotoRGB.getLab())


console.log("sRGB to Rec2020", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.Rec2020))
console.log("sRGB to displayP3", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.DisplayP3))
console.log("sRGB to Rec709", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.Rec709))
console.log("sRGB to ACES_CG_Linear", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.ACES_CG_Linear))
console.log("sRGB to AdobeRGB", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.AdobeRGB))
console.log("sRGB to CIE_RGB", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.CIE_RGB))
console.log("sRGB to AppleRGB", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.AppleRGB))
console.log("sRGB to ColorMatchRGB", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.ColorMatchRGB))
console.log("sRGB to ProPhotoRGB", sRgb.getCopyWithColorSpace(NulliceColor.ColorSpaces.ProPhotoRGB))
