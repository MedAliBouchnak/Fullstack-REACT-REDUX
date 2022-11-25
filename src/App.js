import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import react, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} from "./actions/todoAction";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [task, setTask] = useState("");
  const [editTask, seteditTask] = useState("");
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Add task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="success" onClick={() => dispatch(addTodo(task))}>
          Add task
        </Button>
        <br />
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="outline-light" onClick={() => setFilter("all")}>
            all
          </Button>
          <Button variant="outline-success" onClick={() => setFilter("done")}>
            Done
          </Button>
          <Button variant="outline-warning" onClick={() => setFilter("undone")}>
            Undone
          </Button>
        </div>
        {filter === "all"
          ? todos.map((el) => (
              <div>
                <h1>{el.title}</h1>
                <Button variant="primary" onClick={handleShow}>
                  Update
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="Edit task..."
                      onChange={(e) => seteditTask(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(updateTodo(editTask, el.id));
                        handleClose();
                      }}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteTodo(el.id))}
                >
                  Delete
                </Button>
                <Button
                  variant="outline-info"
                  onClick={() => dispatch(completeTodo(el.id))}
                >
                  {el.complete ? "Done" : "Undone"}
                </Button>
                <hr />
              </div>
            ))
          : filter === "done"
          ? todos
              .filter((el) => el.complete === true)
              .map((el) => (
                <div>
                  <h1>{el.title}</h1>
                  <Button variant="primary" onClick={handleShow}>
                    Update
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <input
                        type="text"
                        placeholder="Edit task..."
                        onChange={(e) => seteditTask(e.target.value)}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          dispatch(updateTodo(editTask, el.id));
                          handleClose();
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteTodo(el.id))}
                  >
                    Delete
                  </Button>

                  <Button
                    variant="outline-info"
                    onClick={() => dispatch(completeTodo(el.id))}
                  >
                    {el.complete ? "Done" : "Undone"}
                  </Button>
                </div>
              ))
          : todos
              .filter((el) => el.complete === false)
              .map((el) => (
                <div>
                  <h1>{el.title}</h1>
                  <Button variant="primary" onClick={handleShow}>
                    Update
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                      <input
                        type="text"
                        placeholder="Edit task..."
                        onChange={(e) => seteditTask(e.target.value)}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          dispatch(updateTodo(editTask, el.id));
                          handleClose();
                        }}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteTodo(el.id))}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => dispatch(completeTodo(el.id))}
                  >
                    {el.complete ? "Done" : "Undone"}
                  </Button>
                </div>
              ))}
      </header>
    </div>
  );
}

export default App;
