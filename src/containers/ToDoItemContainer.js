import { connect } from "react-redux";
import { toggleToDo, deleteToDo } from "../actions/todo-actions";
import ToDoItem from "../components/ToDoItem";

/* const mapStateToProps = (todo) => ({
	todo,
}); */

const mapDispatchToProps = {
	toggleToDo,
	deleteToDo,
};

export default connect(null, mapDispatchToProps)(ToDoItem);
