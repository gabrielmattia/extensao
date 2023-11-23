export const getProjects = async () => {
  const response = await fetch('/database.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
  return response
}

export const getProjectById = async (id) => {
  const response = await fetch('/database.json')
  .then((response) => response.json())
  .then((data) => {
   
    const item = data.find((entry) => entry.id === id)
    console.log(item)
    return item
  })
  return response

}

export const getFavoritos = async () => {
  const response = await fetch('/database.json')
    .then((response) => response.json())
    .then((data) => {
      
      const items = data.filter((entry) => entry.favorito === true)

      return items
    })
  return response
}
