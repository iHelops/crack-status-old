import axios from "axios";
import {fullGameApiType, gameListApiType, searchGameApiType} from "../types";

const DOMAIN = 'https://gamestatus.info';

const headers = {
    'Content-Language': 'ru'
}

const requests = {
    get: <T>(url: string) => axios.get<T>(`${DOMAIN}${url}`, {
        headers: headers
    }).then(res => res.data),
    post: <T>(url: string, data?: object) => axios.post<T>(`${DOMAIN}${url}`, data, {
        headers: headers
    }).then(res => res.data)
}

const Games = {
    search: (query: string) => requests.post<searchGameApiType[]>('/back/api/gameinfo/game/search_title/', {title: query}),
    getGameList: () => requests.get<gameListApiType>('/back/api/gameinfo/game/'),
    getGame: (slug: string) => requests.get<fullGameApiType>('/back/api/gameinfo/game/' + slug)
}

const exportedObject = {
    Games
};

export default exportedObject