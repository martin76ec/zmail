import activeThemeId from '../../states/theme'
import { useAtom } from 'jotai'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList
} from '@gorhom/bottom-sheet'
import BottomSheet from '../BottomSheet'
import Box from '@atoms/Box'
import Text from '@atoms/Text'
import { ThemeMeta, themes } from '@themes'
import ThemeListItem from '@components/ThemeListItem'

interface Props { }

interface ThemePickerHandle {
  show: () => void
}

const ThemePicker = forwardRef<ThemePickerHandle, Props>((_props, ref) => {
  const [, setActiveTheme] = useAtom(activeThemeId)
  const refBottomSheet = useRef<RNBottomSheet>(null)
  const snapPoints = useMemo(() => ['40%', '90%'], [])

  useImperativeHandle(ref, () => ({
    show: () => {
      const { current: bottomSheet } = refBottomSheet
      if (bottomSheet) {
        bottomSheet.snapToIndex(0)
      }
    }
  }))

  const renderThemeItem = useCallback(({ item }) => {
    return <ThemeListItem theme={item} onPress={setActiveTheme} />
  }, [])

  return (
    <BottomSheet
      ref={refBottomSheet}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      detached
      bottomInset={46}
      enablePanDownToClose
      style={{
        marginHorizontal: 12
      }}
    >
      <BottomSheetFlatList
        ListHeaderComponent={() => (
          <Box p="lg" alignItems="center">
            <Text fontWeight="bold">Change Theme</Text>
          </Box>
        )}
        data={themes}
        keyExtractor={(t: ThemeMeta) => t.id}
        renderItem={renderThemeItem}
      />
    </BottomSheet>
  )
})

export type ThemePicker = ThemePickerHandle
export default ThemePicker
