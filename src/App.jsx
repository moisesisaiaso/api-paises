import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { CountryCard } from "./components/CountryCard";
import { SearchByContry } from "./components/SearchByContry";

function App() {
    const [country, setCountry] = useState({});
    const [search, setSearch] = useState("ecuador");
    const [exist, setExist] = useState(true);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/translation/${search}`;
        axios
            .get(url)
            .then(({ data }) => {
                setCountry(data[0]);
                setIsLoading(false);
                setExist(true);
            })
            .catch((err) => {
                setExist(false);
                console.log(err);
            });
    }, [search]);

    return (
        <>
            <div className="container">
                <h1>API DE PAÍSES</h1>
                <SearchByContry setSearch={setSearch} />
                {exist ? (
                    <CountryCard country={country} isloading={isloading} />
                ) : (
                    <h3>"{search}" No es un país existente</h3>
                )}
            </div>
        </>
    );
}

export default App;
