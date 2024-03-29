import Taro from '@tarojs/taro'
import { View, Text} from '@tarojs/components'

import { setGlobaldata } from '@/global.data'

import './index.scss'

export default function CustomNavBar() {
  const systemInfo = Taro.getSystemInfoSync()
  const { statusBarHeight = 20, screenWidth } = systemInfo
  const contentHeight = Math.floor( 44 * screenWidth / 375)
  const navHeight = statusBarHeight + contentHeight
  setGlobaldata('navBarHeight', navHeight)

  return(
    <View style={{height: navHeight}}>
      <View className='nav-bar'>
        <View className='status-bar' style={{height: statusBarHeight}}></View>
        <View className='content-bar flex-wrap'>
          <Text className='vo-icon-star'></Text>
        </View>
      </View>
    </View>
  )
}
