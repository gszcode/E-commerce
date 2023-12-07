import { Opinion } from '../../../typescript/interfaces/opinion.interface'
import styles from './opinion_card.module.scss'

const OpinionCard = ({ user, opinion, date }: Opinion) => {
  return (
    <article className={styles.opinion}>
      <p className={styles.text}>
        <span className={styles.user}>{user}.</span> {opinion}
      </p>
      <em className={styles.date}>{date}</em>
    </article>
  )
}

export default OpinionCard
