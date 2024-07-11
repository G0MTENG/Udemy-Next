import ArchiveLayoutPropsType from '@/_types/archive/archive-layout-props-type'
import styles from '@/_styles/archive/layout.module.css'

export default function ArchiveLayout({
  archive,
  latest,
}: ArchiveLayoutPropsType) {
  return (
    <div className={styles.layout}>
      <h1>News Archive</h1>
      {archive}
      <hr />
      {latest}
    </div>
  )
}
