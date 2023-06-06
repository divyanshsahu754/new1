import styles from './todolist.module.css'

export default function TodoList(){
    return(
        <div className={styles.Todolist}>
           <input className={styles.list} placeHolder="To Do"/> 
           <div className={styles.TodoCard}>
            <input className={styles.field}
            placeHolder="+ Add a card"
            />
        </div>
        </div>
    )
}