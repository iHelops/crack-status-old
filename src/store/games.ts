import {makeAutoObservable} from 'mobx'
import api from "../api";
import {fullGameType, gameType} from "../types";
import {gameConverter} from "../helpers/gameConverter";
import {fullGameConverter} from "../helpers/fullGameConverter";

class Games {
    constructor() {
        makeAutoObservable(this)
    }

    /**
     * Hot games
     * */
    isHotGamesLoading: boolean = true
    setHotGamesLoading = (state: boolean) => this.isHotGamesLoading = state

    hotGames: gameType[] = []

    setHotGames = (data: gameType[]) => this.hotGames = data

    fetchHotGames = () => {
        this.setHotGamesLoading(true)

        api.Games.getGameList().then(data => {
            this.setHotGames(gameConverter(data.hot_games))
        }).finally(() => {
            this.setHotGamesLoading(false)
        })
    }

    /**
     * Full game
     * */
    isFullGameLoading: boolean = true
    setFullGameLoading = (state: boolean) => this.isFullGameLoading = state

    fullGame = {} as fullGameType

    setFullGame = (data: fullGameType) => this.fullGame = data

    fetchFullGame = (slug: string) => {
        this.setFullGameLoading(true)

        api.Games.getGame(slug).then(data => {
            this.setFullGame(fullGameConverter(data))
        }).finally(() => {
            this.setFullGameLoading(false)
        })
    }
}

export default new Games();