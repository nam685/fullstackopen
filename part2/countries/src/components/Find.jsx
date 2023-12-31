const Find = ({ country, handleFilterChange }) => (
    <>
        <p>find countries</p>
        <input value={country} onChange={handleFilterChange}></input>
    </>
)

export default Find