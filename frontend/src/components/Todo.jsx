import PropTypes from "prop-types"


export function Todo({ index, title, deleteTodo }) {
    return (
        <li className="flex items-center justify-between bg-white/50 backdrop-blur-md rounded-lg p-3">
            <span className="font-heidan">
               {title}
            </span>
                <button 
                    onClick={() => {
                        deleteTodo(index)
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-100"
                >
                Delete
            </button>
        </li>
    )
}



Todo.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
  