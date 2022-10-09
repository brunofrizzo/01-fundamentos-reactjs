import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/brunofrizzo.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Frizzo</strong>

                            <time title="09 de outubro as 09:00" dateTime="2022-10-09 09:00:00">Cerca de 2h atras</time>
                        </div>

                        <button title="Deleter comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Bruno. Parabens</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}