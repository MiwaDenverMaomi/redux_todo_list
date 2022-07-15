export const login = (isLogin:boolean) => {
  return {
    type: 'LOGIN',
    payload:isLogin
  }
}
