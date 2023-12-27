import { Oval } from 'react-loader-spinner'
import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loadingWrapper}>
      <Oval
        height={50}
        width={50}
        color="#c508c5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#777"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  )
}

export default Loader
