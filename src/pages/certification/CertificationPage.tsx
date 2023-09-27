import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { ErrorResponse } from '../../types/Auth';
import { certificationEmail, resendCertificationEmail } from '@/apis/authApi';

function CertificationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const emailParam = params.get('email');
  const certCodeParam = params.get('certCode');

  useEffect(() => {
    const onCertificationEmail = async () => {
      try {
        const data = await certificationEmail(certCodeParam!, emailParam!);
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

    if (emailParam && certCodeParam) onCertificationEmail();
  }, []);

  const handleResendCertificationEmail = async () => {
    if (!emailParam) return;
    try {
      const data = await resendCertificationEmail(emailParam);
      if (data.status === 200) {
        alert('이메일 인증이 완료됐습니다.');
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, any>(error)) {
        if (error.response?.data.debugMessage === 'ALREADY_CERTIFIED') {
          alert('이미 인증이 완료됐습니다.');
          navigate(-1);
        }
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-52">
      {!certCodeParam && (
        <div className="flex flex-col items-center gap-y-2">
          <p>
            이메일 인증에 실패했거나 인증 시간이 만료됐습니다. 재발송 버튼을 클릭 후 다시 메일함을
            확인해주세요!
          </p>
          <button
            className="w-fit rounded-sm px-2 py-1 bg-memyo-yellow4 hover:bg-memyo-yellow6 transition-colors"
            onClick={handleResendCertificationEmail}
          >
            인증 이메일 재발송
          </button>
        </div>
      )}
    </div>
  );
}

export default CertificationPage;
