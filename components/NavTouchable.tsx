import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { NavOptionsType } from '../utils/constants'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigation'

interface NavTouchableProps {
  item: NavOptionsType
}

type NavTouchableNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MapScreen'
>

export default function NavTouchable({ item }: NavTouchableProps) {
  const navigation = useNavigation<NavTouchableNavigationProp>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'
    >
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
