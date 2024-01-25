export const CountryCard = ({ country, isloading }) => {
    const { name, flags, capital, region, area, population } = country;

    return (
        <>
            {isloading ? (
                <h2>Cargando...</h2>
            ) : (
                <article className="countryInfo">
                    <h2>{name?.common.toUpperCase()}</h2>
                    <header>
                        <img src={flags?.svg} alt={flags?.alt} />
                    </header>
                    <section className="countryInfo__listInfo">
                        <ul className="listInfo listInfo__right">
                            <li>Capital:</li>
                            <li>Continente:</li>
                            <li>Arear:</li>
                            <li>Población:</li>
                        </ul>

                        <ul className="listInfo">
                            <li className="listInfo__value"> {capital}</li>
                            <li className="listInfo__value">{region}</li>
                            <li className="listInfo__value">{area} Km</li>
                            <li className="listInfo__value">{population}</li>
                        </ul>
                    </section>
                </article>
            )}
        </>
    );
};
