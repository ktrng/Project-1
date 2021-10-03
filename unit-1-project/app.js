$(() => {



  $.ajax(
    {
      url: 'https://swapi.dev/api/films/'
    }
  ) .then(
    (data) => {
      const openModal = () => {
        $('.modal').css('display', 'block')
      }
      const closeModal = () => {
        $('.modal').css('display', 'none')
      }

      console.log(data);
      $('#button-1').on('click', openModal)
      $('#close-button').on('click', closeModal)

    },
    () => {
    console.log('bad request');
    }
  )


})
