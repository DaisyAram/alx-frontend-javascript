function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'success' });
    reject(Error());
  });
}

export default handleResponseFromAPI;
