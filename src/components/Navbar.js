
export const Navbar = (props) => {
    
  return (
    <nav className='w-11/12 flex flex-wrap bg-bg-dark2 max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {
            props.title.map( element => {
                return <button key={element.id} onClick={() => {props.getCourses(element)}} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 bg-opacity-40 border-transparent transition-all duration-300
                ${props.reqData === element ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}>{element.title}</button>
            })
        }
    </nav>
  )
}
