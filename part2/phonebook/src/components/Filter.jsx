const Filter = ({filter, handleFilterChange}) => (
  <>
    <p>filter shown with</p>
    <input value={filter} onChange={handleFilterChange}/>
  </>
)

export default Filter