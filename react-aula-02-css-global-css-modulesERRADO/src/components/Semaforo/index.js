// Importando o CSS MODULES (CSS EXTERNO)
import styles from "@/components/Semaforo/Semaforo.module.css"

const Semaforo = () => {
  return(
    <>
      {/* Container */}
      {/* CSS Inline */}
      <div style={
        {
            height: "100vh",
            display: "flex",
            // flex-direction
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#626262ff",
            marginTop: "30px"
        }
      }>
        <h3 style={{marginTop: "30px"}}>
          Semáforo em React
        </h3>
        <br />
        {/* LUZES DO SEMÁFORO */}
        <div className={styles.luz}></div>
        <div className={styles.luz}></div>
        <div className={styles.luz}></div>
      </div>
    </>
  )
}
export default Semaforo