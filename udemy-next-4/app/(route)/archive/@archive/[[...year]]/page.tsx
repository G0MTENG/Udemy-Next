import NewsList from '@/_components/news/NewsList'
import { ParamsType } from '@/_types/props-type'
import { DUMMY_NEWS } from '@/mocks/dummy-data'
import Link from 'next/link'
import styles from '@/_styles/archive/year-page.module.css'
import YearNavigation from '@/_components/archive/YearNavigation'
import NewsType from '@/_types/news-type'

function getYearNews(year: number) {
  return DUMMY_NEWS.filter(news => {
    const newsYear = new Date(news.date).getFullYear()
    return year === newsYear
  })
}

function getMonthNews(year: number, month: number) {
  return DUMMY_NEWS.filter(news => {
    const newsDate = new Date(news.date)
    const _year = newsDate.getFullYear()
    const _month = newsDate.getMonth()
    return year === _year && month === _month + 1
  })
}

export default function YearPage({ params: { year } }: ParamsType) {
  const _year = year?.[0]
  const _month = year?.[1]
  let news: NewsType[] = []

  if (_year && !_month) {
    news = getYearNews(+_year)
  } else if (_year && _month) {
    news = getMonthNews(+_year, +_month)
  }

  return (
    <>
      <YearNavigation />
      <div className={styles.group}>
        <div className={styles.title}>
          {_year && <h2>{_year}년</h2>}
          {_month && <h3>{_month}월</h3>}
        </div>
        {_year && (
          <Link href="/archive" replace={true}>
            돌아가기
          </Link>
        )}
      </div>
      <NewsList items={news} />
    </>
  )
}
