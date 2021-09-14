import Immutable from "immutable";

/**
 * 主題狀態
 */
export const ThemeState = Immutable.fromJS({
  theme: "",
});

/**
 * 導覽功能列狀態
 */
export const NavState = Immutable.fromJS({
  drawerOpen: false,
});
