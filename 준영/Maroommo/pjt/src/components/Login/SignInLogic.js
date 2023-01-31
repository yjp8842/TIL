import axios from "axios";

// export const requestLogin = async (id, pwd) => {
//   return await axios
//     .post(
//       `/user/login`,
//       {
//         id: id,
//         password: pwd,
//       },
//       { withCredentials: true }
//     )
//     .then((response) => {
//       /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
//       // axios.defaults.headers.common[
//       //   "Authorization"
//       // ] = `Bearer ${response.data.access_token}`;
//       // return response.data;
//       // console.log(response.data);
//       console.log(1);
//     })
//     .catch((e) => {
//       // console.log(e.response.data);
//       console.log(2);
//       return "이메일 혹은 비밀번호를 확인하세요.";
//     });
// };

export function requestLogin() {
  const id = document.getElementById('id').value;
  const password = document.getElementById('password').value;

  // const loginData = {
  //   id: id,
  //   password: password,
  // };

  // const url = '/user/login'

  // return (
  //   axios
  //     .post(url, loginData)
  //     .then((response) => {
  //       if (response.status >= 200 && response.status <= 204) {
  //         console.log(1)
  //         this.props.handleLogin();
  //       }
  //     })
  //     .then(() => {
  //       console.log(2)
  //       this.props.history.push('/myroom');
  //     })
  //     .catch(() => {
  //       alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
  //       // this.props.history.push('/');
  //       window.location.reload();
  //     })
  // );
  axios({
    method:"POST",
    url: '/user/login',
    data:{
        "id": id,
        "password": password,
    }
  })
  .then((res)=>{
    const { accessToken } = res.data;
    // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    if (res.status === 200) {
			this.res.history.push("/myroom");
		}
  })
  .catch((err)=>{
    console.log(err);
    throw new Error(err);
  });
}