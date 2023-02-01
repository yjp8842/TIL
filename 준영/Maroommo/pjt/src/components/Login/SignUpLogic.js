import axios from "axios";

export function postSignUpData() {

  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nickname = document.getElementById('nickname').value;
  
  axios({
    method:"POST",
    url: '/user/join',
    data: {
      "id": id,
      "name": name,
      "email": email,
      "password": password,
      "nickname": nickname,
    }
  })
  .then((response) => {
    if (response.status >= 200 && response.status <= 204) {
      alert('가입에 성공하셨습니다!');
      this.props.history.push('/user/login');
    }
  })
  .catch((err) => {
    alert(err);
  })
}