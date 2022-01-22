export default {
  getCategories() {
    return apiCall('category')
  }
}

async function apiCall(url, method = 'GET') {
  const response = await fetch(process.env.VUE_APP_INTERNAL_API_BASE_URL + url, {
    method: method,
    headers: {
      'Authorization': 'Bearer ' + process.env.VUE_APP_API_KEY,
      'Accept': 'application/json, text/plain, */*'
    }
  })
  return await response.json();
}