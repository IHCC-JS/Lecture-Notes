export default function Button(props) {
    // TODO Make this a link????
    // TODO Make this button console.log()
    return (
        <a
            href={props.href}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200"
        >
            {props.children}
        </a>
    );
}