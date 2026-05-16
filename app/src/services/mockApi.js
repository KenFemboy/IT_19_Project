import axios from 'axios'
import {
  drivers,
  notifications,
  rideHistory,
  reviews,
  incidents
} from '../data/mockData'

const api = axios.create({
  baseURL: '/mock-api'
})

const mockPayloads = {
  '/drivers': drivers,
  '/notifications': notifications,
  '/ride-history': rideHistory,
  '/reviews': reviews,
  '/incidents': incidents
}

export async function apiGet(endpoint) {
  return api.get(endpoint, {
    adapter: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: mockPayloads[endpoint] ?? [],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
          })
        }, 350)
      })
  })
}
