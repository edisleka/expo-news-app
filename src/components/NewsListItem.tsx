import { View, Text, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { formatDistanceToNow } from 'date-fns'
import { News } from '@/types/types'

interface NewsListItemProps {
  newsArticle: News
}

export default function NewsListItem({ newsArticle }: NewsListItemProps) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        gap: 10,
        margin: 10,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexShrink: 1,
            marginRight: 15,
            gap: 5,
          }}
        >
          <Image
            source={require('@assets/black-logo.png')}
            style={{ width: 50, height: 20 }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            {newsArticle.title}
          </Text>
        </View>
        <Image
          source={{ uri: newsArticle.image }}
          style={{ width: 100, aspectRatio: 1, borderRadius: 10 }}
        />
      </View>

      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text>
          {formatDistanceToNow(newsArticle.created_at, { addSuffix: true })}
        </Text>
        <Text>&#x2022;</Text>
        <Text>{newsArticle.author.name}</Text>
        <MaterialCommunityIcons
          name='dots-horizontal'
          size={22}
          color='grey'
          style={{ marginLeft: 'auto' }}
        />
      </View>
    </View>
  )
}
