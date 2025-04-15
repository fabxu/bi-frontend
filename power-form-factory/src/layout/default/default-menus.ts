import type { Menus } from '@/types'

export default (): Menus[] => {
  return [
    {
      title: '首页',
      path: '/home',
    },
    {
      title: '表单列表',
      path: '/design/list',
    },
  ]
}
