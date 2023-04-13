import { useParams } from "react-router-dom"

export function MoreInfo() {
    const params = useParams()
  return (
    <>{console.log(params.country)}</>
  )
}
 