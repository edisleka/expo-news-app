import { News } from '@/types/types'
import { View, Text, Image, StyleSheet } from 'react-native'
import NewsListItemFooter from '../NewsListItemFooter'

interface MainNewsCardProps {
  newsArticle: News
}
export default function MainNewsCard({ newsArticle }: MainNewsCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: newsArticle.image }} style={styles.mainImage} />
      <View style={{ padding: 10 }}>
        <Image
          source={require('@assets/black-logo.png')}
          style={{
            width: 60,
            height: 20,
            resizeMode: 'contain',
            marginBottom: 5,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 25 }}>
          {newsArticle.title}
        </Text>
        <NewsListItemFooter
          publishedDate={newsArticle.created_at}
          author={newsArticle.author}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
  },
  mainImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})
