import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ErrorResponse } from '../login/LoginPage';

function CertificationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const emailParam = params.get('email');
  const certCodeParam = params.get('certCode');

  useEffect(() => {
    const certificationEmail = async () => {
      try {
        const data = await axios({
          method: 'PUT',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `/v1/member/certification?certCode=${certCodeParam}&email=${emailParam}`,
          // data: JSON.stringify(inputs),
        });

        console.log(data);
        if (data.status === 200) {
          alert('이메일 인증이 완료됐습니다.');
          navigate('/login');
        }
      } catch (error) {
        if (axios.isAxiosError<ErrorResponse, any>(error)) {
          console.log(error.response?.data);
        }
      }
    };

    if (certCodeParam) certificationEmail();
  }, []);

  const resendcertificationEmail = async () => {
    try {
      const data = await axios({
        method: 'POST',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        url: `/v1/member/certification?email=${emailParam}`,
        // data: JSON.stringify(inputs),
      });

      console.log(data);
      if (data.status === 200) {
        alert('이메일 인증이 완료됐습니다.');
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        console.log(error.response?.data);
        if (error.response?.data.debugMessage === 'ALREADY_CERTIFIED') {
          alert('이미 인증이 완료됐습니다.');
          navigate(-1);
        }
      }
    }
  };

  return (
    <div>
      {!certCodeParam && (
        <div>
          <p>
            이메일 인증에 실패했거나 인증 시간이 만료됐습니다. 재발송 버튼을 클릭 후 다시 메일함을
            확인해주세요.
          </p>
          <button className="" onClick={resendcertificationEmail}>
            인증 이메일 재발송
          </button>
        </div>
      )}
    </div>
  );
}

export default CertificationPage;
