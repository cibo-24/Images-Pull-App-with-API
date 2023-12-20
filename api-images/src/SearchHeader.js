import {useState} from 'react';
import "../src/App.css";
export default function SearchHeader({ search }) {
    // verileri tutacağımız useState
    const [valueInput, setValueInput] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        debugger;
        search(valueInput);
    }

    const handleChange = (e) => {
        // target.value -> inputa girdiğimiz değerdir.
        setValueInput(e.target.value);
    }

   
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                
                <label className='label-text'>What are you looking for?</label>
                <input className='input-search' value={valueInput} onChange={handleChange} />
                
                {/* <div>{valueInput}</div>  -> valueInput değeri içerisine girilen değeri gösterir. */}
            </form>

        </>
    )
}