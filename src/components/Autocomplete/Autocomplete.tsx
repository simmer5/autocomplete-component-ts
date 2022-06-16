import React, { useState } from 'react'

type AutocompleteProps = {
	data: {
		brand: string
		index: number
		description: string
	}[]
}

const Autocomplete = ({ data }: AutocompleteProps) => {
	const [filteredData, setFilteredData] = useState<
		{ brand: string; index: number; description: string }[]
	>([])
	const [noProducts, setNoProducts] = useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
