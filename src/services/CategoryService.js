export default {
  getCategories() {
    return apiCall('category')
  }
}

async function apiCall(url, method = 'GET') {
  const response = await fetch('https://apitesting.plerk.io/v2/' + url, {
    method: method,
    headers: {
      'Authorization': 'Bearer 5bc95bf034d900548243a59e2296bd683729bd75057879fd0f877d3adc7d1db6bedbfccb47aca04e44ef28adf4c3e9e72afe2f2b295b3bf08e2a47ec75f9607d',
      'Accept': 'application/json, text/plain, */*'
    }
  })
  return await response.json();
}