import { Text, View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        <Image
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}
