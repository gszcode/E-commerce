import { Link } from 'react-router-dom'
import { opinions } from '../../json/opinions'
import Button from '../Button'
import TitleSubtitle from '../Title-Subtitle'
import OpinionCard from './OpinionCard'
import styles from './opinions.module.scss'

const Opinions = () => {
  return (
    <section className={styles.container}>
      <TitleSubtitle
        title="OPINIONES"
        subtitle="ÚLTIMOS TESTIMONIOS DE NUESTROS CLIENTES"
      />
      <div className={styles.opinions_container}>
        {opinions.map((opinion) => (
          <OpinionCard key={opinion.id} {...opinion} />
        ))}
      </div>

      <Link to="/" title="Ver más opiniones">
        <Button text="VER MÁS OPINIONES" />
      </Link>
    </section>
  )
}

export default Opinions
