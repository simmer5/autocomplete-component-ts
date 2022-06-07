import React, { useState } from 'react'

const Autocomplete = ({ data }) => {
	const [searchText, setSearchText] = useState('')
	const [filteredData, setFilteredData] = useState([])

	const handleChange = e => {
		const inputValue = e.target.value
		setSearchText(inputValue)
		const newFilteredData = data.filter(item =>
			item.brand.toLowerCase().includes(searchText.toLocaleLowerCase())
		)

		searchText === '' ? setFilteredData([]) : setFilteredData(newFilteredData)
	}
	console.log('Cia filtered data length: ', filteredData.length, searchText)
	return (
		<div>
			<h1>Autocomplete</h1>
			<input onChange={handleChange} value={searchText} />
			{filteredData.map((item, idx) => {
				console.log(item)
				return 0
			})}
		</div>
	)
}

export default Autocomplete
