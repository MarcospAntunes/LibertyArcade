export type gamesProps = {
    developer?: string
    freetogame_profile_url?: string
    game_url?: string
    genre?: string
    id?: number
    platform?: string
    publisher?: string
    release_date?: string
    short_description?: string
    thumbnail?: string
    title?: string
}

export type gameProps = {
    developer?: string
    freetogame_profile_url?: string
    game_url?: string
    genre?: string
    id?: number
    platform?: string
    publisher?: string
    release_date?: string
    description?: string
    thumbnail?: string
    title?: string
    minimum_system_requirements?: {
        os?: string
        processor?: string
        memory?: string
        graphics?: string
        storage?: string
    }
    screenshots?: [
        {
            id?: number
            image?: string
        }
    ]
}