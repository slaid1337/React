import { useState } from "react";
import {Card} from "./Card";

import { useLocation, useParams} from "react-router-dom";

export function Set(){

    const param = useParams();
    console.log(param.id);

    const location = useLocation();
    const {set} = location.state;

    

    const cards = require('../data').filter((item) => (item.setName === set));
    const [step, setStep] = useState(0);

    const RemoveClick = () =>{
        if (step > 0){
            setStep(step - 1);
        }
    }

    const AddClick = () =>{
        if (step < cards.length - 1){
            setStep(step + 1);
        }
    }

    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back} key={cards[step].id}/>
            <div>
                <button onClick={RemoveClick}>-</button>
                <div>{step}</div>
                <button onClick={AddClick}>+</button>
            </div>
        </div>
    );
}