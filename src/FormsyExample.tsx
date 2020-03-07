import React, {useState} from 'react';
import Formsy from 'formsy-react';
import MyInput from "./Input";

type Props = {
    FormsyName: string;
    FomrsyValue?: boolean;
}

export const FormsyExample: React.FC<Props> = (props: Props) => {
    const [canSubmit, setCanSubmit] = useState<boolean>(false);

    function submit(value:object) { console.log(value) }
    function enableButton() { setCanSubmit(true); }
    function disableButton() { setCanSubmit(false); }

    return (
        <div>
            <h5> {props.FormsyName} </h5>
        <Formsy onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton}>
            <MyInput value={"test"} name={"test"} validations="isEmail" validationError="This is not a valid email" required/>
            <button type="submit" disabled={!canSubmit}>Submit</button>
        </Formsy>
        </div>
    );
};