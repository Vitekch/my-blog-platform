export default {
  setNavVisibility(state: any): void {
    state.isNavVisible = !state.isNavVisible;
  },
  setUser(state: any) {
    state.user = JSON.parse(localStorage.getItem('user'));
  },
  setMessageVis(state: any, payload: boolean) {
    state.message.isMessageActive = payload;
  },
  setMessageType(state: any, payload: string) {
    state.message.type = payload;
  },
  setMessageText(state: any, payload: string) {
    state.message.text = payload;
  },
  setFullImg(state: any, payload: string) {
    state.fullContentImg = payload;
  },
  setImageViewVisible(state: any, payload: boolean) {
    state.isFullViewVisible = payload;
  },
  setAvatarChangeVisible(state: any, payload: boolean) {
    state.isAvatarChangeVisible = payload;
  },
};
