import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Button = (props) => {
  const navigation = useNavigation()
  return (
    <>
      <View style={{ alignItems: 'center', marginVertical: 200 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(`${props.links}`)}
        >
          <Text>{props.titile}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
})
