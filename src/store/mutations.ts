export default {
  setNavVisibility(state: any): void {
    state.isNavVisible = !state.isNavVisible;
  },
  setUser(state: any) {
    state.user = localStorage.getItem('user');
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
};
