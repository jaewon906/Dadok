import axios from "axios"
import { useEffect, useState } from "react"

function useAxios(url){
    const[contentsData, setContentData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(res=>res.data)
        .then(data=>setContentData(data))
   }, [url])


    return(contentsData)
}
export default useAxios;

// import axios from "axios"
// import { useEffect, useState } from "react"

// function useAxios(url, count){
//     const[contentsData, setContentData] = useState([])

//     useEffect(() => {
//         async function fetchData(){
//             try{
//                 const res = await axios.get(url)
//                 setContentData(res.data)
//             }catch(err){
//                 console.error(err)
//             }
//         }
//         fetchData();
//    }, [count])


//     return(contentsData)
// }
// export default useAxios;

