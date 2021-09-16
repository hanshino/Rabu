/**
 * 用戶切換主題時，將選項寫入`localStorage`
 */
function toggleTheme(themeState) {
  let currentTheme = themeState.theme;
  window.localStorage.setItem("theme", currentTheme);
}

/**
 * @param {import("redux").Store}
 */
const sub = store => {
  let state = store.getState();
  toggleTheme(state.theme);
};

export default sub;
