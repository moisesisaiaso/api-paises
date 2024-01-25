import { useRef } from "react";

export const SearchByContry = ({ setSearch }) => {
    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = textInput.current.value;
        const country = inputValue.trim();
        setSearch(country.toLowerCase());

        console.log(country);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    ref={textInput}
                    className="search"
                    placeholder="Ingresa el país"
                />
            </form>
        </>
    );
};
