import { instance } from "./base.api"

const endpoint = '/auth/login'

export const characters = {
  getCharacters: function({page}: {page: number}) {
    return instance.get(endpoint)
  }
}