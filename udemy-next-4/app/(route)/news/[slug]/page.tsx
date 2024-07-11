import NewsCard from '@/_components/news/NewsCard'
import NewsType from '@/_types/news-type'
import { ParamsType } from '@/_types/props-type'
import { DUMMY_NEWS } from '@/mocks/dummy-data'
import { notFound } from 'next/navigation'

type getNewsItemReturnType = NewsType | undefined
function getNewsItem(slug: string): getNewsItemReturnType {
  const newsItem = DUMMY_NEWS.find(item => item.slug === slug)
  return newsItem
}

export default function NewsDetailPage({ params: { slug } }: ParamsType) {
  const item: getNewsItemReturnType = getNewsItem(slug!)
  if (!item) {
    notFound()
  }

  return <NewsCard item={item}></NewsCard>
}
