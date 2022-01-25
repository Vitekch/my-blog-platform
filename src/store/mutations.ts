export default {
  setNavVisibility(state: any): void {
    state.isNavVisible = !state.isNavVisible;
  },
  setUser(state: any) {
    state.user = localStorage.getItem('user');
  },
};
