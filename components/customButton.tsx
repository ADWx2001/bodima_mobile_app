import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyles}) => {
    const [isLoading, setIsLoading] = useState()
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center  ${containerStyle} ${isLoading ? 'opacity-80': ''}`}
        disabled={isLoading}
        >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton