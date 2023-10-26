export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {
        token: 'token',
        userId: 111,
        username: '张三',
        avatar: 'http://www.bojiantech.com.cn/images/head-01-73ff27fe93fbf4f0802c5d18385f9a99.png',
      }
    } as {
      userInfo: User.UserInfo;
    };
  },
  getters: {
    logged: (state) => {
      const { token, userId } = state.userInfo;
      return !!(token && userId);
    },
    token: (state) => {
      return state.userInfo.token;
    },
    userId: (state) => {
      return state.userInfo.userId;
    }
  },
  actions: {
    setUserInfo(userInfo: User.UserInfo) {
      Object.assign(this.userInfo, userInfo);
    }
  }
});
