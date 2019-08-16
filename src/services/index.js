async function getBitsoData(currency) {
  const response = await fetch(`http://localhost:9000/bitso/${currency}`)
  const data = await response.json()
  return data
}
async function getCoinloreData(currency) {
  const response = await fetch(`http://localhost:9000/coinlore/${currency}`)
  const data = await response.json()
  return data
}
async function getCoincapData(currency) {
  const response = await fetch(`http://localhost:9000/coincap/${currency}`)
  const data = await response.json()
  return data
}


export {
  getBitsoData,
  getCoinloreData,
  getCoincapData
}