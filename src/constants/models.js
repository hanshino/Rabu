/**
 * 主題狀態
 */
export const ThemeState = {
  theme: "",
};

/**
 * 導覽功能列狀態
 */
export const NavState = {
  drawerOpen: false,
};

/**
 * 所有共鬥資訊狀態
 */
export const MultiBossState = {
  bosses: [],
};

/**
 * 創建新房間的狀態
 */
export const CreateBossState = {
  // 設定可以創建的關卡資訊
  available: [],
  // 設定目前選到的
  current: 0,
  // 關卡相關資訊
  name: "",
  level: 0,
  // 房間相關資訊
  number: "",
  note: "",
};
