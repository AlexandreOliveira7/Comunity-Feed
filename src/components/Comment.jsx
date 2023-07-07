import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/AlexandreOliveira7.png"/>
      <div className={styles.containercomment}>
        <div className={styles.contentComment}>
         <div className={styles.deleteIcon}>
          <div className={styles.infoComment}>
          <strong>Alexandre Oliveira</strong>
           <p className={styles.time}>Cerca de 1 hora</p>
           <p className={styles.content}>Muito bom!!</p>
          </div>
          <button title='Deletar comentário'>
            <Trash size={24}/>
          </button>
         </div>
        </div>

        <footer className={styles.likebox}>
         <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}