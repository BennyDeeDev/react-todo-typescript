import { connect } from "react-redux";
import { fetchToDos, addToDo } from "../actions/todo-actions";
import ToDoList from "../pages/ToDoList";

const mapStateToProps = (todos = []) => ({
	todos,
});
const mapDispatchToProps = {
	addToDo,
	fetchToDos,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
