const myEl = document.getElementById('test');

axios.get('https://api.myjson.com/bins/11izea')
  .then(response => {
    console.log(response.data.destination_addresses);
    myEl.innerHTML += response.data.destination_addresses + '<br>'
  });