import { base } from "../colors/primitive"

export const elevation = Object.freeze({
  base: { backgroundColor: base[0] },
  card: { backgroundColor: base[20] },
  shadow1: {
    shadowColor: base[100],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  shadow2: {
    shadowColor: base[100],
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },
})
