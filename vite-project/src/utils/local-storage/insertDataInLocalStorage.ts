export default function insertDataInLocalStorage(key: string, value: any ):void {
    localStorage.setItem(key, JSON.stringify(value))
}