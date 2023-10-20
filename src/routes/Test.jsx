import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Test = () =>{
         let  path = useLocation() 

    // const [error, setError] = useState(false)

    useEffect(() =>{

        if(path.pathname === '/test') throw ("Testing Error Boundary")
        // console.log(path.pathname)

        return () => {}
    }, [path])
}

export default Test