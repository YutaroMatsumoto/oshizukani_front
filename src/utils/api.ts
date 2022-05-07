// export default function handler(req, res) {
//   res.status.(200).json
// }

import axios from 'axios'

type IsMtg = {
  isMtg: boolean
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
})

export const getIsNowMtg = () => {
  return instance.get<IsMtg>('/isMtg')
}
