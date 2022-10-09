import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1665238072658-65bc46e3b358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="Avatar do usuario" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Frizzo</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title="09 de outubro as 09:00" dateTime="2022-10-09 09:00:00">Publicado há 1h</time>
            </header> 

            <div className={styles.content}>
                <p>Ola mundo</p>
                <p>Vou atualizar meu portfolio com projetos da rocketseat</p>
                <p><a href="#">Clique aqui</a> e acesse.</p>
            </div>
        </article>
    )
}