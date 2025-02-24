export enum EntryTypes {
    "main" = "https://gms.yoyogames.com/Zeus-Runtime.rss",
    "beta" = "https://gms.yoyogames.com/Zeus-Runtime-Beta.rss",
    "old-2017" = "http://web.archive.org/web/20171203233457oe_/http://gms.yoyogames.com/Zeus-Runtime.rss",
    "old-2020" = "http://web.archive.org/web/20200518222719oe_/http://gms.yoyogames.com/Zeus-Runtime.rss"
}

export const entryTypeKeys = Object.keys(EntryTypes)

export type EntryType = keyof typeof EntryTypes

export type RuntimeVersionItem = {
    platform: string,
    url: string,
    version: string
}