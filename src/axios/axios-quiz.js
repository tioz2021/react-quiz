import axios from "axios";

export default axios.create({
  baseURL: 'https://react-quiz-ed8d9-default-rtdb.firebaseio.com/'
})