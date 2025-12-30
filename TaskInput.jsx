import { useState } from "react";
import { useTasks } from "../store/taskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 p-2 border rounded"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Task
      </button>
    </div>
  );
}
