import { SET_USER, USER_FETCH } from "./types";

export function setUser(data) {
  return {
    type: SET_USER,
    payload: data,
  };
}

export function fetchUser() {
  return {
    type: USER_FETCH,
  };
}
