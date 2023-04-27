
import { Button, Form } from "react-bootstrap";

export default function TodoList(props) {
 
  
  return (
    <div  className="todo">
          <span
            style={{ textDecoration: props.todo.isDone ? "line-through" : "" }}
          >
            {props.todo.text}
          </span>

          <div>
            <Button
              variant="outline-success"
              onClick={() => props.markTodo(props.index)}
            >
              ✓
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="outline-danger"
              onClick={() => props.removeTodo(props.index)}
            >
              ✕
            </Button>
          </div>
    </div>
  )
}
