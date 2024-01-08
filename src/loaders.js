const URL= "http://localhost:4000"

export const allDiaries = async () => {
    const response = await fetch(URL + "/diaries")
    const diaries = await response.json()
    return diaries
}