export function handleLoginResponse(status: string) {
  switch (status) {
    case '200 OK':
      return '성공';
    case '400 BAD_REQUEST':
      return '잘못된 요청입니다';
    case '403 BAD_REQUEST':
      return '이메일 미인증 회원입니다';
    case '405 METHOD_NOT_ALLOWED':
      return '잘못된 메서드 또는 URI 요청입니다.';
    case '500 INTERNAL_SERVER_ERROR':
      return '서버측에서 오류가 생겼습니다.';
    default:
      return '알 수 없는 오류가 발생했습니다.';
  }
}
