import axios from 'axios'

export default axios.create({
  baseURL: 'https://rica-house-default-rtdb.firebaseio.com/',
})
