import {SortableElement} from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';

const SortableItem = SortableElement(ToDoItem) 

const ToDoList = ({items}) =>{

    return (
        <div className="todoList">
            {items.map((x,i)=>{
                return <SortableItem 
                    todo={x}
                    index={i}
                    id={x.id}
                    value={x}
                    key={x.id}
                />
            })}
        </div>
    )

};

export default ToDoList;