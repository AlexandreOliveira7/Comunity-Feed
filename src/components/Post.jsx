
import {format, formatDistanceToNow} from 'date-fns'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { ptBR } from 'date-fns/locale';

export function Post({author, publishedAt, content}) {

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
  locale: ptBR,
} )

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: true,
})

const comments = [
  1,
  2,
  3,
]

  return(
    <article className={styles.post}>

    <header>
      <div className={styles.profile}>
        <Avatar hasBorder src={author.avatarUrl}/>
        <div className={styles.infoProfile}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>
      <time className={styles.date} dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
    </header>
    
    <div className={styles.content}>
      {content.map(line => {
        if(line.type == 'paragraph') {
          return <p>{line.content}</p>
        }else if(line.type == 'link') {
          return<p> <a href="#">{line.content}</a></p>
        }
      })}
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
        {comments.map(comment => {
          return(
            <Comment/>
          )
        })}
      </div>
    </article>
  )
}