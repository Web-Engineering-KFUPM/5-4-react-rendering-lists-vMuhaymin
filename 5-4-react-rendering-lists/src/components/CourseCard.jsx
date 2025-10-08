import { useState } from "react";
import TaskItem from "./TaskItem";


export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");


  // 📘 TASK 4 — PART A (Anchor): Implement toggle using onMutateCourse + .map()
  function toggleTask(id) {
    // TODO: toggle the task with this id
    onMutateCourse(index, tasks =>
      tasks.map(t => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );

  }


  // 📘 TASK 4 — PART A (Anchor): Implement delete using onMutateCourse + .filter()
  function deleteTask(id) {
    // TODO: delete the task with this id
    onMutateCourse(index, tasks => tasks.filter(t => t.id !== id));
  }


  // 📘 TASK 4 — PART A (Anchor): Implement add using onMutateCourse
  function addTask(e) {
    e.preventDefault();
    // TODO: create a new task { id, title, dueDate: date, isDone: false }
    // TODO: append it to existing tasks and reset inputs
    const newTask = {
      id : Math.floor(100 + Math.random() * 900),
      title: title,
      dueDate: date,
      isDone: false,
    };
    onMutateCourse(index, (tasks)=> [...tasks, newTask]);
    setTitle("")
    setDate("");
  }

  const allDone = course.tasks.length > 0 && course.tasks.every(t => t.isDone);
  
  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>
        {/* 🟩 PART A (Anchor): Show "All caught up" badge when ALL tasks are done (logical &&) */}
        {course.tasks.length > 0 && course.tasks.every(t => t.isDone) && <span className="badge">All caught up</span>}
      </header>

      {/* 🟩 PART A (Anchor): If NO tasks → show message; ELSE → render the list (ternary ?: ) */}




      <section className="tasksSection">
        {/* 📘 TASK 2 — Render Tasks for Each Course */}
        {/* 🔎 Anchor: You’ll write your code right inside this list. */}
          {/* TODO: course.tasks.map(task => <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />) */}
          {course.tasks.length === 0 ? (
                <>
                  <p>All caught up</p>
                </>
              ) : (
                <>
                  <ul className="tasks">
                    {course.tasks.map(task => (
                      <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                      />
                    ))}
                  </ul>
                </>
              )}



      </section>

      


      {/* Add Form (provided) */}
      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />
        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Due date"
          />
          <button type="submit" className="primary">Add</button>
        </div>
      </form>
    </article>
  );
}