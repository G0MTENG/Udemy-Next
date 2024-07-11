import NewsType from '@/_types/news-type'
import styles from '@/_styles/news/news-card.module.css'
import Image from 'next/image'

export default function NewsCard({ item }: { item: NewsType }) {
  const { title, image, date, content } = item
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <Image
          src={`/images/news/${image}`}
          alt={title}
          width={200}
          height={200}
        />
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  )
}
