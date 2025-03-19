import { View, Text, Image } from 'react-native'
import { News } from '@/types/types'
import NewsListItemFooter from '@/components/NewsListItemFooter'

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

      <NewsListItemFooter
        publishedDate={newsArticle.created_at}
        author={newsArticle.author}
      />
    </View>
  )
}
