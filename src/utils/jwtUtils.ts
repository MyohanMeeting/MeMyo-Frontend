import jwtDecode from 'jwt-decode';

export interface JwtPayload {
  sub: string;
  auth: 'ROLE_USER';
  memberId: number;
  exp: number;
}

export function isTokenExpired(token: string) {
  const decodedToken: JwtPayload = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime;
}
