function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'success' });
    reject(Error('API not working correctly'));
  });
}

export default getResponseFromAPI;
