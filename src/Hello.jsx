import { useLocation} from "react-router-dom";

export default function Hello(props) {
    const urlfstring = new URLSearchParams(useLocation().search);
    const name= urlfstring.get("name");
    const surname= urlfstring.get("surname");
    return (<>
    <h1>Hello {name} {surname}</h1>
    </>)
}