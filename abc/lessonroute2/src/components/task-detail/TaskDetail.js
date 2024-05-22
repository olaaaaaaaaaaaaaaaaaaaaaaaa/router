import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TaskDetail = ({
    completed,
  isEditing,
  onEdit,
  onTitleChange,
  onCompletedChange,
  onSave,
  onRemove,
}) => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3009/todos/${id}`)
      .then((loaded) => {
        return loaded.json();
      })
      .then((data) => {
        setTask(data);
      });
  }, [id]);

  return (
    <div>
      {task && (
        <>
          <p>Title: {task.title}</p>
        </>
      )}{" "}
    </div>
  );
};

export default TaskDetail;
