import NewsList from '@/_components/news/NewsList'
import { DUMMY_NEWS } from '@/mocks/dummy-data'

function getLatestNews() {
  return DUMMY_NEWS.filter(news => {
    const newsDate = new Date(news.date)
    const today = new Date()
    return newsDate.getFullYear() === today.getFullYear()
  })
}

export default function LatestPage() {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest Page</h2>
      <NewsList items={latestNews} />
    </>
  )
}
