export interface propsType {
    title: string,
    image: string,
    protections: string[],
    hackedGroups: string[],
    releaseDate: string,
    crackDate: string | null,
    metaScore: number | null,
    userScore: number | null,
    readableStatus: string,
    status: 'cracked' | 'unreleased' | 'uncracked'
}