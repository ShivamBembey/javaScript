async function fetchData() {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return null;
    }
  }
  
async function getData() {
    const result = await fetchData();
    if (result) {
      console.log('Data fetched successfully:', result);
    } else {
      console.log('Failed to fetch data.');
    }
}
  
getData();
  