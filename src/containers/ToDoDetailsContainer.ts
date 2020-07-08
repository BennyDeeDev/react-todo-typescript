import { connect } from "react-redux";
import { changeToDo } from "../actions/todo-actions";
import ToDoDetails from "../pages/ToDoDetails";

const mapDispatchToProps = {
	changeToDo,
};

export default connect(null, mapDispatchToProps)(ToDoDetails);
