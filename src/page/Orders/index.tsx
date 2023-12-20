import styles from './orders.module.scss'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Wrapper from '../../components/Wrapper'
import Sidebar from '../../components/Sidebar'
import DataItem from '../Account/DataItem'

const Orders = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta / Mis pedidos" />
      <Wrapper>
        <>
          <Sidebar />
          <div className={styles.orders}>
            <AccountTitle title="MIS PEDIDOS" />
            <div className={styles.data}>
              <DataItem label="Pedido" data="lorem" />
              <DataItem label="Fecha/Hora" data="lorem ipsum" />
              <DataItem label="Importe total" data="lorem ipsum" />
              <DataItem label="Importe pendiente de pago" data="lorem ipsum" />
              <DataItem label="Forma de pago" data="lorem ipsum" />
              <DataItem label="Estado" data="lorem ipsum" />
              <DataItem label="Estado del envío" data="lorem ipsum" />
            </div>
          </div>
        </>
      </Wrapper>
    </section>
  )
}

export default Orders
