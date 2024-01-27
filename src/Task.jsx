export const Task = (props) => {
  return (
    <li style={{ textDecoration: props.completed && "line-through" }}>
      <span>{props.taskName} </span>
      <button
        className="completed"
        onClick={() => props.completedTask(props.id)}
      >
        Completed
      </button>
      <button className="remove" onClick={() => props.removeTask(props.id)}>
        X
      </button>
    </li>
  );
};
