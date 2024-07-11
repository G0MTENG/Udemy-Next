import styles from '@/_styles/news/news-list.module.css'
import NewsItem from '@/_components/news/NewsItem'
import NewsType from '@/_types/news-type'

export default function NewsList({ items }: { items: Array<NewsType> }) {
  return (
    <ul className={styles.newsList}>
      {items.map(item => (
        <NewsItem key={item.id} item={item}></NewsItem>
      ))}
    </ul>
  )
}
