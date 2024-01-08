import styles from './message.module.scss'
import Wrapper from '../Wrapper'

const Message = ({ message }: { message: string }) => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <p className={styles.title}>{message}</p>
      </div>
    </Wrapper>
  )
}

export default Message
