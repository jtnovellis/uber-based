import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavOptionsType } from '../utils/constants'

interface NavTouchableProps {
  item: NavOptionsType
}

export default function NavTouchable({ item }: NavTouchableProps) {
  return (
    <TouchableOpacity className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'>
      <View>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
        />
        <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
        <ArrowRightCircleIcon
          color='black'
          size={45}
          style={{ marginTop: 10 }}
        />
      </View>
    </TouchableOpacity>
  )
}
