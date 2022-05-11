/**
 * Handles request to the specified url
 * 
 * @param url string
 * @returns Promise<any>
 * @throws Error if the response was not ok
 */
export const request = (url: string): Promise<any> => {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error("Cats are napping.")
        }
        return response.json();
    })
}