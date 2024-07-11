type Config = {
    isDarkMode: boolean,
}

export type UserData = {
    isLogged: boolean,
    username: string,
    userId: string,
    config: Config,
}