type Config = {
    theme: string,
}

export type UserData = {
    isLogged: boolean,
    username: string,
    userId: string,
    config: Config,
}