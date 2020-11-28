import {useState} from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoList from './components/ToDoList';
import arrayMove from 'array-move';
import './App.css';

const todosInit = [ 
  {id: 1, content: 'content 1', isDone: false},
  {id: 2, content: 'content 2', isDone: false},
  {id: 3, content: 'content 3', isDone: false},
  {id: 4, content: 'content 4', isDone: false},
  {id: 5, content: 'content 5', isDone: false}
];

const SortableList = SortableContainer(ToDoList);

function App() {
  
  const [todos, setTodos] = useState(todosInit);

  const onSortEnd = (e) =>{
    debugger
    var newTodos = arrayMove(todos, e.oldIndex, e.newIndex )
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <SortableList items={todos} onSortEnd={onSortEnd}/>
    </div>
  );
}

export default App;
