import axios from 'axios'

export default axios.create({
  baseURL: 'https://salon-hose-default-rtdb.firebaseio.com/',
})
