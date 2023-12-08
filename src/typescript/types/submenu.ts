export type SubMenu = 'clothes' | 'home'

export type OpenSubNavState = {
  [key in SubMenu]: boolean
}
