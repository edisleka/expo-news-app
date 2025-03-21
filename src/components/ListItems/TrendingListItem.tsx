import { News } from '@/types/types'
import { View, Text, Image, StyleSheet } from 'react-native'
import NewsListItemFooter from '../NewsListItemFooter'

interface TrendingListItemProps {
  newsArticle: News
  index: number
}

export default function TrendingListItem({
  newsArticle,
  index,
}: TrendingListItemProps) {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 20, gap: 15 }}>
      <View style={styles.bubbleContainer}>
        <Text style={styles.bubbleText}>{index}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={{ gap: 5 }}>
          <Image
            source={require('@assets/black-logo.png')}
            style={{ width: 50, height: 20 }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {newsArticle.title}
          </Text>
        </View>

        <NewsListItemFooter
          publishedDate={newsArticle.created_at}
          author={newsArticle.author}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bubbleContainer: {
    backgroundColor: '#FA8128',
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    gap: 25,
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10,
  },
})
