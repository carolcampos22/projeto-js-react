import React from "react";
import {TituloPrincipal, Image, Name} from "./headerStyled"


export const Header = () => {
    return (
        <div>
            <TituloPrincipal>
                <Name>TechCampos</Name>
                <Image src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="via-lactea" />
            </TituloPrincipal>
        </div>
    )
}