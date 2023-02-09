export default function Toolbar({filters, selected, onSelectFilter}) {
  const Filter = ({filter}) => {
    const isActive = selected === filter ? '_active' : '';
    return (<li className={`toolbar-filter ${isActive}`} onClick={() => onSelectFilter(filter)}>{filter}</li>)
  }

  const filtersList = filters.map(filter => <Filter key={filter} filter={filter}/>);
  return (
    <ul className='toolbar-component'>{filtersList}</ul>
  )
}
