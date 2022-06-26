import {searchGameApiType, searchGameType} from "../types";

export function searchConverter(obj: searchGameApiType[]) {
    const newObj: searchGameType[] = obj.map(item => {
        return {
            id: item.id,
            title: item.title,
            slug: item.slug,
            readableStatus: item.readable_status,
            fullImage: item.full_image,
            shortImage: item.short_image,
            status: Date.parse(item.release_date) > Date.now() ? 'unreleased' : (
                item.crack_date === null ? 'uncracked' : 'cracked'
            )
        }
    })

    return newObj
}