import Box from '@atoms/Box'
import activeThemeId from '../../states/theme'
import { ThemeMeta, ThemeNames } from '@themes'
import { TouchableOpacity } from '@atoms/Touchable'
import { selectAtom } from 'jotai/utils'
import { useAtom } from 'jotai'
import { useCallback, useMemo } from 'react'
import FeatherIcon from '../Icon'
import Text from '@atoms/Text'

interface Props {
  theme: ThemeMeta
  onPress: (themeId: ThemeNames) => void
}

const ThemeListItem: React.FC<Props> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  )
  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress, theme])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}
    >
      <Box alignItems="center" justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </TouchableOpacity>
  )
}

export default ThemeListItem
