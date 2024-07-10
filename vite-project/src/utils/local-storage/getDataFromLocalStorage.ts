export default function getDataFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}')
}