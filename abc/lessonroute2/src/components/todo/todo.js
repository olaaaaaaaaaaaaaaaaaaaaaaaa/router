import { Button } from "../button/button";
import styles from "./todo.module.css";
import { NavLink } from "react-router-dom";
import TaskDetail from "../task-detail/TaskDetail";

export const Todo = ({
  id,
  title,
  completed,
  isEditing,
  onEdit,
  onTitleChange,
  onCompletedChange,
  onSave,
  onRemove,
}) => {
  return (
    <>
      <div className={styles.todo}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={({ target }) => onCompletedChange(target.checked)}
        />
        <div className={styles.title}>
          {isEditing ? (
            <input
              type="text"
              value={title}
              onChange={({ target }) => onTitleChange(target.value)}
            />
          ) : (
            <>
              <NavLink to={`/${id}`}>
                <div>
                  <div>{title}</div>
                  <div className={styles.todoInput}>
                    <Button onClick={onEdit}>📝</Button>
                    <Button onClick={onRemove}>✖</Button>
                  </div>
                </div>
              </NavLink>
            </>
          )}
        </div>
        <TaskDetail></TaskDetail>
        <div>
          <Button onClick={onSave}>✎</Button>
        </div>
      </div>
    </>
  );
};

// {({ isActive }) =>
//                 isActive ? (
//                   <div>
//                     {title ? (
//                       <>
//                         <div> {title}</div>
//                         <div className={styles.todoInput}>
//                           <Button onClick={onEdit}>📝</Button>
//                           <Button onClick={onRemove}>✖</Button>
//                         </div>
//                       </>
//                     ) : (
//                       <></>
//                     )}
//                   </div>
//                 ) : (
//                   <div>
//                     {title && title.length > 30
//                       ? title.slice(0, 30) + "..."
//                       : title}
//                   </div>
//                 )
//               }
