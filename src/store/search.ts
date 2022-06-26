import {makeAutoObservable} from 'mobx'
import api from "../api";
import {searchGameType} from "../types";
import {searchConverter} from "../helpers/searchConverter";

class Search {
    constructor() {
        makeAutoObservable(this)
    }

    /**
     * Search
     * */
    search: searchGameType[] = []

    setSearch = (data: searchGameType[]) => this.search = data

    getSlug = (value: string) => {
        return this.search.filter(item => item.title === value)[0].slug
    }

    fetchSearch = (query: string) => {
        if (!query) {
            this.setSearch([])
            return
        }

        api.Games.search(query).then(data => {
            this.setSearch(searchConverter(data))
        })
    }
}

export default new Search()