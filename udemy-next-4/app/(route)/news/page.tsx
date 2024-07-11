import { DUMMY_NEWS } from '@/mocks/dummy-data'
import NewsType from '@/_types/news-type'
import NewsList from '@/_components/news/NewsList'

function getNews() {
  return DUMMY_NEWS
}

export default function NewsPage() {
  const newsItems: Array<NewsType> = getNews()

  return <NewsList items={newsItems} />
}
