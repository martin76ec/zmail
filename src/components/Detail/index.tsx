import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navs'
import Box from '@atoms/Box'
import Text from '@atoms/Text'
import { TouchableOpacity } from '@atoms/Touchable'

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

const DetailScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: 12
        }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default DetailScreen
