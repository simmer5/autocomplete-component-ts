import React, { useState } from 'react'

const Autocomplete = ({ data }) => {
	const [filteredData, setFilteredData] = useState<any>([])
	const [noProducts, setNoProducts] = useState(false)

	const handleChange = e => {
		const inputValue = e.target.value
		const newFilteredData = data.filter(item =>
			item.brand.toLowerCase().includes(inputValue.toLowerCase())
		)
		setFilteredData(newFilteredData)
		inputValue === '' ? setFilteredData([]) : setFilteredData(newFilteredData)
		newFilteredData.length === 0 ? setNoProducts(true) : setNoProducts(false)
	}

	return (
		<>
			<h1>Autocomplete</h1>
			<input onChange={handleChange} placeholder='Search for product...' />
			<div
				style={{
					height: '5rem',
					overflow: 'hidden',
					overflowY: 'auto',
					width: '200px',
					margin: '0 auto',
				}}
			>
				{noProducts && <h1>No Products with this name</h1>}
				{filteredData.map(item => (
					<div
						style={{
							cursor: 'pointer',
							margin: '.5rem',
						}}
						onClick={() =>
							alert(`You were redirected to ${item.brand} product page. `)
						}
						key={item.index}
					>
						{item.brand}
					</div>
				))}
			</div>
		</>
	)
}

export default Autocomplete
