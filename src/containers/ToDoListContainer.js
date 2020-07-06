import { connect } from "react-redux";
import { addToDo } from "../actions/todo-actions";
import ToDoList from "../pages/ToDoList";

const mapStateToProps = (todos = []) => ({
	todos,
});
const mapDispatchToProps = {
	addToDo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
