import axios from 'axios'

export default axios.create({
  baseURL: 'https://fix-base-default-rtdb.firebaseio.com/',
})
