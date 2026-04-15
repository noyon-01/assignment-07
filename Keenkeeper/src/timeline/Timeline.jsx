import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Timeline = () => {
  const {storedCallData, storedTextData, storedVideoData} = useContext(UserContext);
  console.log(storedCallData, storedTextData, storedVideoData)
  
  return (
    <div>Timeline</div>
  )
}

export default Timeline