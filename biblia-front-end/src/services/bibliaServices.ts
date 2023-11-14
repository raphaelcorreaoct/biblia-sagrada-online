import httpClient from "./httpClient"

export const getBooks = async  () => {
  return await httpClient.get('/books')
}