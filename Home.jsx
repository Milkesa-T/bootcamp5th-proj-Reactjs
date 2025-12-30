import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <TaskInput />
      <TaskList />
    </main>
  );
}
console.log("HOME MOUNTED");
