import type { ChatMessage } from "../chat.types"

import { getChatItemType, getChatListItems } from "."

const message = (id: string, createdAt: string, isMine: boolean): ChatMessage => ({
  id,
  text: id,
  createdAt,
  isMine,
})

describe("getChatListItems", () => {
  it("returns an empty list when there are no messages", () => {
    expect(getChatListItems([])).toEqual([])
  })

  it("marks the first message as a new day and group start", () => {
    const items = getChatListItems([message("1", "2026-09-07T10:00:00.000Z", true)])

    expect(items[0]).toMatchObject({
      id: "1",
      isNewDay: true,
      isGroupStart: true,
    })
  })

  it("keeps same-sender same-day messages in one group", () => {
    const items = getChatListItems([
      message("1", "2026-09-07T10:00:00.000Z", true),
      message("2", "2026-09-07T10:05:00.000Z", true),
    ])

    expect(items[1]).toMatchObject({
      id: "2",
      isNewDay: false,
      isGroupStart: false,
    })
  })

  it("starts a new group when the sender changes on the same day", () => {
    const items = getChatListItems([
      message("1", "2026-09-07T10:00:00.000Z", true),
      message("2", "2026-09-07T10:05:00.000Z", false),
    ])

    expect(items[1]).toMatchObject({
      id: "2",
      isNewDay: false,
      isGroupStart: true,
    })
  })

  it("starts a new day and group when the calendar day changes", () => {
    const items = getChatListItems([
      message("1", "2026-09-07T10:00:00.000Z", true),
      message("2", "2026-09-08T10:00:00.000Z", true),
    ])

    expect(items[1]).toMatchObject({
      id: "2",
      isNewDay: true,
      isGroupStart: true,
    })
  })
})

describe("getChatItemType", () => {
  it("uses day-message vs message so FlashList can recycle by layout", () => {
    expect(
      getChatItemType({
        ...message("1", "2026-09-07T10:00:00.000Z", true),
        isNewDay: true,
        isGroupStart: true,
      }),
    ).toBe("day-message")

    expect(
      getChatItemType({
        ...message("2", "2026-09-07T10:00:00.000Z", false),
        isNewDay: false,
        isGroupStart: false,
      }),
    ).toBe("message")
  })
})
