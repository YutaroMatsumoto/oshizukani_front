export const ModalContentState = {
  ACCOUNT: "account",
  NOTIFICATION: "notification",
  CREATESCHEDULE: "createSchedule",
  MEMBER: "member",
  LOGOUT: "logout",
} as const;
export type ModalContentStateType =
  typeof ModalContentState[keyof typeof ModalContentState];

export const ModalContentStateLabel = {
  account: "アカウント",
  notification: "通知",
  createSchedule: "予定作成",
  member: "メンバー",
  logout: "ログアウト",
} as const;
export type ModalContentStateLabelType =
  typeof ModalContentStateLabel[keyof typeof ModalContentStateLabel];
