import NewsListItem from '@/components/NewsListItem'
import { FlatList, View } from 'react-native'
import allNews from '@assets/data/allNews.json'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FlatList
        data={allNews}
        renderItem={({ item }) => <NewsListItem newsArticle={item} />}
      />
    </SafeAreaView>
  )
}
