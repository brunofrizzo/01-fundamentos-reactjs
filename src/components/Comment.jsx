import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }){
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/brunofrizzo.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Frizzo</strong>

                            <time title="09 de outubro as 09:00" dateTime="2022-10-09 09:00:00">Cerca de 2h atras</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deleter comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
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