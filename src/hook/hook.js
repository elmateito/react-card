import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    useEffect(() => {
        const cargarComponentes = async() => {
          let res = await fetch(url)
          let data = await res.json()
          setData(data)
          console.log(data)
        }
        cargarComponentes()}, [url])
    return data
}

export default useFetch