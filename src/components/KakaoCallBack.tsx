import axios from 'axios';
import { useEffect } from 'react';

function KakaoCallBack() {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get('code');
  const grant_type = 'authorization_code';
  const clientId = import.meta.env.VITE_KAKAO_API_KEY;
  const redirectURL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

  useEffect(() => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${clientId}&redirect_uri=${redirectURL}&code=${code}`,
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8",',
          },
        }
      )
      .then((res) => {
        const { access_token } = res.data;
        if (access_token) {
          // console.log(`Bearer ${access_token}`);
          axios.post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8",',
              },
            }
          );
        }
      })
      .then((res) => {
        console.log('성공', res);
      })
      .catch((err) => {
        console.log('에러', err);
      });
  }, []);

  return <>KakaoCallBack</>;
}

export default KakaoCallBack;
