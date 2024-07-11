'use client'
import NewsType from '@/_types/news-type'
import Image from 'next/image'
import styles from '@/_styles/news/news-item.module.css'
import { useRouter } from 'next/navigation'

export default function NewsItem({ item }: { item: NewsType }) {
  const { slug, title, image } = item
  const router = useRouter()
  const handleItemClick = (slug: string) => {
    router.push(`/news/${slug}`)
  }

  return (
    <li onClick={() => handleItemClick(slug)}>
      <div className={styles.imageWrapper}>
        <Image src={`/images/news/${image}`} alt={title} fill></Image>
      </div>
      <div>{title}</div>
    </li>
  )
}
