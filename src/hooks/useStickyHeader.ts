import { useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { LayoutChangeEvent } from 'react-native'

const ANCHOR_INIT = -9999

export default function useStickyHeader() {
  const safeAreaInsets = useSafeAreaInsets()
  const [headerBarHeight, setHeaderBarHeight] = useState(70)
  const anchorY = useSharedValue(ANCHOR_INIT)
  const translationY = useSharedValue(0)
  const progressY = useSharedValue(0)

  const minY = -headerBarHeight
  const maxY = safeAreaInsets.top

  const handleNoteListLayout = useCallback(({ event: LayoutChangeEvent }) => {
    setHeaderBarHeight(event.nativeEvent.layout.height)
  }, [])
}
