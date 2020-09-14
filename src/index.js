import './styles.css';
import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

//const tarea = new Todo('Aprendiendo Js'); 

//todoList.nuevoTodo( tarea );

//console.log(todoList);

//crearTodoHtml( tarea );

//LocalStorage && SesionStorage

//localStorage.setItem('mi-key', 'ABC123');

todoList.todos.forEach( todo => crearTodoHtml( todo ));

