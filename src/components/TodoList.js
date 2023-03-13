import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList ()
{

    const todoList = useSelector( todos => todos );



    return (
			<div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
				{todoList.map((todo ,index) => (
					<Todo key={index }  todo={todo}/>
				))}
			</div>
		);
}
