function Button(props) {
    return(
        <button {...props}
        className="bg-c4 text-c2 p-2"
        >    
        {props.children}
        </button>
    )
}

export default Button;