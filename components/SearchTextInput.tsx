import { Pressable, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import React, { useCallback, useState } from 'react'
import SearchIcon from '@/svg/searchIcon'
import CancelIcon from '@/svg/cancelIcon'

const SearchTextInput = ({
  input,
  setInput,
  onSubmitEditing,
  style,
}: {
  input: string
  setInput: (value: string) => void
  onSubmitEditing: () => void
  style?: ViewStyle
}) => {
  const [shouldShowClearButton, setShouldShowClearButton] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const clearInput = useCallback(() => {
    setInput('')
    setShouldShowClearButton(false)
    setIsFocused(false)
  }, [setInput])

  const handleOnSubmitEditing = useCallback(() => {
    onSubmitEditing()
    setShouldShowClearButton(true)
  }, [onSubmitEditing])

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? '#6750A4' : 'black' },
        style,
      ]}
    >
      <SearchIcon />
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleOnSubmitEditing}
        placeholder="Search for valubale resources"
        onFocus={() => setIsFocused(true)}
      />
      {shouldShowClearButton && (
        <Pressable onPress={clearInput}>
          <CancelIcon />
        </Pressable>
      )}
    </View>
  )
}

export default SearchTextInput

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
})
