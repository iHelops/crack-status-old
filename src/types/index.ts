export interface searchGameApiType {
    id: string,
    title: string,
    slug: string,
    readable_status: string,
    full_image: string,
    short_image: string,
    crack_date: string,
    release_date: string
}

export interface searchGameType {
    id: string,
    title: string,
    slug: string,
    readableStatus: string,
    fullImage: string,
    shortImage: string,
    status: 'cracked' | 'unreleased' | 'uncracked'
}

export interface gameApiType {
    id: string,
    title: string,
    slug: string,
    is_AAA: boolean,
    protections: string,
    hacked_groups: string,
    release_date: string,
    crack_date: string | null,
    short_image: string,
    full_image: string,
    mata_score: number | null,
    user_score: number | null,
    readable_status: string,
}

export interface fullGameApiType extends gameApiType {
    specs_info: {
        cpu_info: string,
        ram_info: string,
        os_info: string,
        gpu_info: string
    },
    description: string,
}

export interface gameListApiType {
    hot_games: gameApiType[],
    unreleased_game: gameApiType[],
    popular_craked_games: gameApiType[]
}

export interface gameType {
    id: string,
    title: string,
    slug: string,
    isAAA: boolean,
    protections: string[],
    hackedGroups: string[],
    releaseDate: string,
    crackDate: string | null,
    shortImage: string,
    fullImage: string,
    mataScore: number | null,
    userScore: number | null,
    readableStatus: string,
    status: 'cracked' | 'unreleased' | 'uncracked'
}

export interface fullGameType extends gameType {
    specsInfo: {
        device: string,
        model: string
        key: string
    }[] | null,
    description: string,
}