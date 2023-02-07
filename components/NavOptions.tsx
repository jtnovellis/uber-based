import { View, FlatList } from 'react-native'
import { navOptionsData } from '../utils/constants'
import NavTouchable from './NavTouchable'

export default function NavOptions() {
  return (
    <View>
      <FlatList
        data={navOptionsData}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NavTouchable item={item} />}
      />
    </View>
  )
}
