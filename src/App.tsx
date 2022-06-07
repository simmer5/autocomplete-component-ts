import React, { useEffect, useState } from 'react'
import Autocomplete from './components/Autocomplete/Autocomplete'

import './App.css'

const App = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const resp = await fetch('http://localhost:3001/products')
				const data = await resp.json()
				setData(data)
			} catch (error) {
				console.log('Fetch error', error)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='App'>
			<Autocomplete data={data} />{' '}
		</div>
	)
}

export default App
