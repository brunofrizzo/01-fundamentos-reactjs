import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src="https://github.com/felipecechin.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Felipe Cechin</strong>
                        <span>React dev</span>
                    </div>
                </div>

                <time title="09 de outubro as 09:00" dateTime="2022-10-09 09:00:00">Publicado há 1h</time>
            </header> 

            <div className={styles.content}>
                <p>Ola mundo</p>
                <p>Vou atualizar meu portfolio com projetos da rocketseat</p>
                <p><a href="#">Clique aqui</a> e acesse.</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentario" />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}