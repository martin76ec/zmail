import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@components/BottomSheet'
import Box from '@atoms/Box'
import Text from '@atoms/Text'
import BookList from '../BookList'

interface Props {
  onClose?: () => void
}

interface MoveNoteSheetHandle {
  show: () => void
}

const MoveNoteSheet = forwardRef<MoveNoteSheetHandle, Props>(
  ({ onClose }, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ['60%', '90%'], [])

    useImperativeHandle(ref, () => ({
      show: () =>
        refBottomSheet.current && refBottomSheet.current.snapToIndex(0)
    }))

    const handlePressItem = useCallback((_bookId: string) => {
      refBottomSheet.current && refBottomSheet.current.close()
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
        detached={true}
        bottomInset={46}
        enablePanDownToClose={true}
        style={{ marginHorizontal: 12 }}
        onClose={onClose}
      >
        <BookList
          inBottomSheet
          onPressItem={handlePressItem}
          color="$foreground"
          headerComponent={() => (
            <Box justifyContent="center" alignItems="center">
              <Text fontWeight="bold">Move</Text>
            </Box>
          )}
        ></BookList>
      </BottomSheet>
    )
  }
)

type MoveNoteSheet = MoveNoteSheetHandle

export default MoveNoteSheet
