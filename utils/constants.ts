export type NavOptionsType = {
  id: string
  image: string
  title: string
  screen: 'MapScreen' | 'EatsScreen'
}

export const navOptionsData: NavOptionsType[] = [
  {
    id: '123',
    image: 'https://links.papareact.com/3pn',
    title: 'Get a ride',
    screen: 'MapScreen',
  },
  {
    id: '345',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]
