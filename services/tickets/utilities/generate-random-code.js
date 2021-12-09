const generateRandomCode = ({ length = 6 }) => {
  const smallest = Math.pow(10, length - 1)
  const largest = Math.pow(10, length)

  return Math.floor(smallest + Math.random() * (largest - smallest)).toString()
}

export default generateRandomCode
