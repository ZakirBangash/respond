import { base, brand, fontWeight, getTypography, radius, systemScale } from "respond-ui/foundations"

describe("respond-ui foundations", () => {
  it("exposes Respond brand tokens", () => {
    expect(base[80]).toBe("#212123")
    expect(brand[50]).toBe("#448AFF")
    expect(brand[60]).toBe("#1B70FF")
    expect(systemScale.size16).toBe(16)
    expect(radius.full).toBe(100)
  })

  it("maps typography variants onto Space Grotesk", () => {
    const typography = getTypography(false)

    expect(typography.heading.h1.fontFamily).toBe("spaceGroteskBold")
    expect(typography.paragraph.regular.l.fontSize).toBe(16)
    expect(typography.display[1].fontSize).toBe(64)
    expect(fontWeight.normal).toBe("spaceGroteskRegular")
    expect(fontWeight.medium).toBe("spaceGroteskMedium")
  })
})
