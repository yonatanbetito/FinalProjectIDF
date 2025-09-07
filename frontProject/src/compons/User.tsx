
type userprops = {
    "name":string,
    "email":string,
    "password":string
 }
export default function User(props:userprops){
return (<>
<div>{props.name}</div>
</>)
}