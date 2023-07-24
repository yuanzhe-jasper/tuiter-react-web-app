import JavaScript from "./java-script"
import DynamicStyling from "./dynamic-styling";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <TodoList/>
      <TodoItem/>
      <ConditionalOutput/>
      <DynamicStyling/>
      <JavaScript />
    </div>
  );
}

export default Assignment3;
