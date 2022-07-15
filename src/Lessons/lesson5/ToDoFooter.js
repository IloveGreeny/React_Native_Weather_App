export default function TodoFooter({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="todoAppFooter">
            <span>{completedSize}/{todos.length} Completed</span>
            <button
                className="todoClearCompleted"
                onClick={onClearCompleted}
            >Clear Completed</button>
        </div>
    )
}
