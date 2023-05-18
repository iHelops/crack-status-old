import {fullGameApiType, fullGameType} from "../types";

export function fullGameConverter(obj: fullGameApiType) {
    let protections = undefined;
    try {
        protections = JSON.parse(obj.protections)
    } catch (_) {}

    let hackedGroups = undefined;
    try {
        hackedGroups = JSON.parse(obj.hacked_groups)
    }
    catch (_) {}

    const newObj: fullGameType = {
        id: obj.id,
        title: obj.title,
        slug: obj.slug,
        isAAA: obj.is_AAA,
        protections: protections || [obj.protections],
        hackedGroups: hackedGroups || [obj.hacked_groups],
        releaseDate: obj.release_date,
        crackDate: obj.crack_date,
        shortImage: obj.short_image,
        fullImage: obj.full_image,
        mataScore: obj.mata_score,
        userScore: obj.user_score,
        readableStatus: obj.readable_status,
        status: Date.parse(obj.release_date) > Date.now() ? 'unreleased' : (
            obj.crack_date === null ? 'uncracked' : 'cracked'
        ),
        description: obj.description,
        specsInfo: Object.keys(obj.specs_info).length !== 0 ? (
            [
                {
                    device: 'Процессор',
                    model: obj.specs_info.cpu_info,
                    key: obj.specs_info.cpu_info
                },
                {
                    device: 'Видеокарта',
                    model: obj.specs_info.gpu_info,
                    key: obj.specs_info.gpu_info
                },
                {
                    device: 'Память',
                    model: obj.specs_info.ram_info,
                    key: obj.specs_info.ram_info
                },
                {
                    device: 'ОС',
                    model: obj.specs_info.os_info,
                    key: obj.specs_info.os_info
                }
            ]
        ) : null
    }

    return newObj
}