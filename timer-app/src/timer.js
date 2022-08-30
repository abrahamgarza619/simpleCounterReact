import {useEffect, useState} from 'react';

function Timer({start}) {
    const [counter, setCounter] = useState(start);

    useEffect(() => {
        if(counter>= 0) {
            setTimeout(()=>setCounter(counter + 1),1000);

        }
    },[counter]);
    return (<span>
        {counter}
    </span>)
};

export default Timer;