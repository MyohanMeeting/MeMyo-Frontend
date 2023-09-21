export interface ErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: string;
}

export interface SigninResponseData {
  email: string;
  nickName: string;
  profileImageUrl: string;
  accessToken: string;
  refreshToken: string;
}

export interface SigninResponse {
  status: string;
  timestamp: string;
  message: string;
  data: SigninResponseData;
}

export interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenResponse {
  status: string;
  timestamp: string;
  message: string;
  data: RefreshTokenData;
}

export interface SignupErrorResponse {
  status: string;
  timestamp: string;
  message: string;
  debugMessage: {
    [key: string]: string;
  };
}

export interface KakaoResponseData {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface KakaoUserResponseData {
  connected_at: string;
  id: number;
  kakao_account: {
    email?: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    profile_nickname_needs_agreement: boolean;
    profile?: {
      nickname?: string;
    };
  };
}

export interface OauthSuccessResonse {
  status: string;
  timestamp: string;
  message: string;
  data: {
    memberId: number;
  };
}
