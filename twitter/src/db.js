export async function postDataToEndpoint(data, collectionName) {
    const baseUrl = 'https://ap-south-1.aws.data.mongodb-api.com/app/data-mlabb/endpoint/data/v1';
    const url = `${baseUrl}/${collectionName}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  