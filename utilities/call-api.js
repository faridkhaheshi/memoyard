const defaultHeaders = {
  Accept: "application/json",
}

const callApi = async (url, options = {}) => {
  const finalOptions = buildFinalOptions(options)
  const response = await fetch(url, finalOptions)
  if (response.status === 200) return response.json()
  let errorMessage = response.statusText
  try {
    const {
      error: { message: serverErrorMessage },
    } = await response.json()
    errorMessage = serverErrorMessage
    throw new Error("")
  } catch (err) {
    throw new Error(errorMessage || "Something went wrong")
  }
}

function buildFinalOptions({
  method = "GET",
  body,
  headers = {},
  ...otherOptions
}) {
  const finalOptions = {
    method,
    headers: { ...defaultHeaders, ...headers },
    ...otherOptions,
  }

  if (body) {
    finalOptions.body = JSON.stringify(body)
    finalOptions.headers["Content-Type"] = "application/json"
  }
  return finalOptions
}

export default callApi
