import { connect } from "react-redux";
import { changeToDo } from "../actions/todo-actions";
import ToDoDetails from "../pages/ToDoDetails";

/* const mapStateToProps = (todos) => ({
	todos,
}); */

const mapDispatchToProps = {
	changeToDo,
};

export default connect(null, mapDispatchToProps)(ToDoDetails);
