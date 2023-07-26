const radixColors = require("@radix-ui/colors")
const colors = [
  "amber",
  "amberA",
  "amberDark",
  "amberDarkA",
  "blackA",
  "blue",
  "blueA",
  "blueDark",
  "blueDarkA",
  "bronze",
  "bronzeA",
  "bronzeDark",
  "bronzeDarkA",
  "brown",
  "brownA",
  "brownDark",
  "brownDarkA",
  "crimson",
  "crimsonA",
  "crimsonDark",
  "crimsonDarkA",
  "cyan",
  "cyanA",
  "cyanDark",
  "cyanDarkA",
  "gold",
  "goldA",
  "goldDark",
  "goldDarkA",
  "grass",
  "grassA",
  "grassDark",
  "grassDarkA",
  "gray",
  "grayA",
  "grayDark",
  "grayDarkA",
  "green",
  "greenA",
  "greenDark",
  "greenDarkA",
  "indigo",
  "indigoA",
  "indigoDark",
  "indigoDarkA",
  "lime",
  "limeA",
  "limeDark",
  "limeDarkA",
  "mauve",
  "mauveA",
  "mauveDark",
  "mauveDarkA",
  "mint",
  "mintA",
  "mintDark",
  "mintDarkA",
  "olive",
  "oliveA",
  "oliveDark",
  "oliveDarkA",
  "orange",
  "orangeA",
  "orangeDark",
  "orangeDarkA",
  "pink",
  "pinkA",
  "pinkDark",
  "pinkDarkA",
  "plum",
  "plumA",
  "plumDark",
  "plumDarkA",
  "purple",
  "purpleA",
  "purpleDark",
  "purpleDarkA",
  "red",
  "redA",
  "redDark",
  "redDarkA",
  "sage",
  "sageA",
  "sageDark",
  "sageDarkA",
  "sand",
  "sandA",
  "sandDark",
  "sandDarkA",
  "sky",
  "skyA",
  "skyDark",
  "skyDarkA",
  "slate",
  "slateA",
  "slateDark",
  "slateDarkA",
  "teal",
  "tealA",
  "tealDark",
  "tealDarkA",
  "tomato",
  "tomatoA",
  "tomatoDark",
  "tomatoDarkA",
  "violet",
  "violetA",
  "violetDark",
  "violetDarkA",
  "whiteA",
  "yellow",
  "yellowA",
  "yellowDark",
  "yellowDarkA",
]

// Hexadecimal to HSL conversion
function hexToHSL(hexCode) {
  // Remove the '#' character from the hex code
  const hex = hexCode.replace("#", "")

  // Convert the hex code to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255.0
  const g = parseInt(hex.substr(2, 2), 16) / 255.0
  const b = parseInt(hex.substr(4, 2), 16) / 255.0

  // Convert RGB to HSL
  const hsl = rgbToHSL(r, g, b)

  // Convert HSL to space-separated syntax
  const h = Math.round(hsl.h * 360)
  const s = Math.round(hsl.s * 100)
  const l = Math.round(hsl.l * 100)

  // Return the HSL values as space-separated syntax
  return `${h} ${s}% ${l}%`
}

// RGB to HSL conversion
function rgbToHSL(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0,
    s = 0,
    l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return { h, s, l }
}

const normalizeRadixColor = (color, prefix = null) => {
  const captureScaleRegEx = new RegExp(/(\d{1,2})/)
  const colorScale = {}
  for (const [token, value] of Object.entries(radixColors[color])) {
    const match = token.match(captureScaleRegEx)
    const scale = match[1]
    const key = prefix ? `${prefix}-${scale}` : scale
    if (match) {
      Object.assign(colorScale, { [key]: value })
    }
  }
  return colorScale
}

module.exports = {
  normalizeRadixColor,
}
