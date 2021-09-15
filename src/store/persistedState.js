import Immutable from "immutable";

export const theme = Immutable.fromJS({
  theme: window.localStorage.getItem("theme"),
});
