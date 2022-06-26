import {gameApiType, gameType} from "../types";

export function gameConverter(obj: gameApiType[]) {
    const newObj: gameType[] = obj.map(item => {
        return {
            id: item.id,
            title: item.title,
            slug: item.slug,
            isAAA: item.is_AAA,
            protections: JSON.parse(item.protections),
            hackedGroups: JSON.parse(item.hacked_groups),
            releaseDate: item.release_date,
            crackDate: item.crack_date,
            shortImage: item.short_image,
            fullImage: item.full_image,
            mataScore: item.mata_score,
            userScore: item.user_score,
            readableStatus: item.readable_status,
            status: Date.parse(item.release_date) > Date.now() ? 'unreleased' : (
                item.crack_date === null ? 'uncracked' : 'cracked'
            )
        }
    })
 
    return newObj
}