import DueBadge from "./DueBadge";


export default function TaskItem({ task, onToggle, onDelete }) {
return (
<li className="task">
<label className="taskMain">
{/* 🟩 PART B (Anchor): Checkbox exists; students should wire onToggle(task.id) */}
<input type="checkbox"  checked={task.isDone}
          onChange={() => onToggle(task.id)}
          aria-label="Mark task done" />


{/* 🟩 PART B (Anchor): Only render <DueBadge /> if task is NOT done (logical &&) */}
{!task.isDone && <DueBadge dueDate={task.dueDate} />}

{/* Task title goes here */}
{/* Example: <span className="title">{task.title}</span> */}
<span className="title">{task.title}</span>
</label>


{/* 🟩 PART B (Anchor): Delete button should call onDelete(task.id) */}
<button className="ghost" aria-label="Delete task"  onClick={() => onDelete(task.id)}>
✕
</button>
</li>
);
}