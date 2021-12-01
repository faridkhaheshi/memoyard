const convertToLocalTime = dateStr => new Date(Date.parse(`${dateStr} UTC`))

export default convertToLocalTime
