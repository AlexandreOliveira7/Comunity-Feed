import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post() {
  return(
    <article className={styles.post}>

    <header>
      <div className={styles.profile}>
        <Avatar src="https://github.com/itsBinho.png"/>
        <div className={styles.infoProfile}>
          <strong>Robson Silva</strong>
          <span>Dev Front-End</span>
        </div>
      </div>
      <time className={styles.date} title='04 de julho ás 13:31h'>Publicado há 1 hora</time>
    </header>
    
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p> <a href="">jane.design/doctorcare</a> </p>
      <p> <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
    </div>

    <form className={styles.commentForm}>
      <strong>
        Deixe o seu feedback
      </strong>
      <textarea
        placeholder='Nossa, adorei amigo!'
      />
      <footer>
       <button type='submit'>
          Publicar
        </button>
      </footer>
    </form>
      <div className={styles.commmentContainer}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}