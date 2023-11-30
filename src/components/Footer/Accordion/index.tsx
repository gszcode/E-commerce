import { useEffect, useRef, useState } from 'react'
import styles from './accordion.module.scss'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  links: Array<string>
}

function Accordion(props: Props) {
  const [active, setActive] = useState(true)
  const content = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(`${content?.current?.scrollHeight}px`)

  useEffect(() => {
    console.log('Height for ', props.title, ': ', height)
  }, [height, props.title])

  function toggleAccordion() {
    setActive(!active)
    setHeight(!active ? `${content?.current?.scrollHeight}px` : '0')
  }

  return (
    <div className={styles.accordion__section}>
      <div
        className={`${styles.accordion} ${active ? styles.active : ''}`}
        onClick={toggleAccordion}
      >
        <p className={styles.accordion__title}>{props.title}</p>
        <span style={{ marginLeft: '20px' }}>{active ? '-' : '+'}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={styles.accordion__content}
      >
        <div className={styles.accordion__text}>
          {props.links.map((link) =>
            props.title !== 'CONTACTO' ? (
              <Link
                to={`/${link.toLocaleLowerCase().split(' ').join('-')}`}
                key={link}
                className={styles.link}
              >
                {link}
              </Link>
            ) : (
              <p className={styles.link}>{link}</p>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Accordion
