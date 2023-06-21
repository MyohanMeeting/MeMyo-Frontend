const TOKEN_KEY = 'CURRENT_USER';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const loadToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token && JSON.parse(token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
