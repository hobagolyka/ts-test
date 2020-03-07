import React, {useEffect, useState} from 'react';

interface Person {
    first: string;
    last: string;
}

// ? -> optional
interface Props {
    tExtample: string;
    ok?: boolean;
    i?: number;
    fnExample?: () => void;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FnComponentExample: React.FC<Props> = ({tExtample, handleChange}) => {
    const [cnt, setCnt] = useState<number | null | undefined>(0);
    const [name, setName] = useState<{ myname: string }>({myname: "A"});

    useEffect(() => {
        document.title = `Hello ${name.myname}`;
    }, [name])

    return (
        <div>
            <h5>Simple Function Component Example</h5>
            <p>{tExtample} and {name.myname}</p>
            <input onChange={handleChange}/>
        </div>
    );
};