$(() => {
  $.ajax(
    {
      url: 'https://swapi.dev/api/films/'
    }
  ) .then(
    (data) => {
      console.log(data);
    },
    () => {
    console.log('bad request');
    }
  )
})
