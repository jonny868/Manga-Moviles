import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { useContext } from 'react'

const Loader = () => {
    const { loader } = useContext(Context)
  return (
    <View style={[StyleSheet.absoluteFillObject,styles.container]}>
      <AnimatedLottieView
      source={require('../../assets/66731-loading.json')} autoPlay loop visible={loader}
      />
    </View>
  )
}

export default Loader


const styles = StyleSheet.create({
container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1
}    
})

