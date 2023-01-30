import axios from "axios";

export function FindId() {
  const findName = document.getElementById('find-name').value;
  const findEmail = document.getElementById('find-email').value;
  axios({
    method:"GET",
    url: '/user/help/id',
    data:{
        "name": findName,
        "email": findEmail,
    }
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}