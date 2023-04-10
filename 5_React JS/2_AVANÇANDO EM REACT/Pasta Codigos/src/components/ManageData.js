import {useState} from 'react';

const ManageData = () => {
   const [number, setNumber] = useState(10);
   console.log(number);
    
    return (
        <div>
            <div>
                <h1>ManageData</h1>
                <p>O valor é {number}</p>
                <button onClick={() => setNumber (25)}>Mudar State</button>
            </div>
        </div>
    )
}

export default ManageData