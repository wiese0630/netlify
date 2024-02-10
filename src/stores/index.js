import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      recentSearches: [] // 최근 검색어 목록
    };
  },
  mutations: {
    addRecentSearch(state, term) {
      // 최신 검색어를 배열 맨 앞에 추가
      state.recentSearches.unshift(term);

      // 최대 길이를 설정하고 필요할 경우 슬라이스하여 제거
      if (state.recentSearches.length > 10) {
        state.recentSearches = state.recentSearches.slice(0, 10);
      }

      // 로컬 스토리지에 최근 검색어 저장
      localStorage.setItem('recentSearches', JSON.stringify(state.recentSearches));
    }
  },
  actions: {
    addRecentSearch({ commit }, term) {
      commit('addRecentSearch', term);
    }
  }
});