import { useParams } from "react-router-dom";

export default function Profile(){
    const {name} = useParams;
    console.log(name);
    return(
        <div>
            <p>
                desde profile con el nombre de {name}
            </p>
        </div>
    );
}