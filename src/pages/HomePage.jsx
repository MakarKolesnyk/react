import Counter from "../components/Counter/Counter";
import TaskForm from "../components/Todo/TaskForm";
import TasksList from "../components/Todo/TasksList";

const HomePage = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <TaskForm />
      <hr />
      <TasksList/>
      <hr />
      <Counter />
    </section>
  );
};

export default HomePage;
