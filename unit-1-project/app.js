$(() => {
  const modalInfo = $('.info')


  $.ajax(
    {
      url: 'https://swapi.dev/api/films/'
    }
  ) .then(
    (films) => {
      const openModal = () => {
        modalInfo.empty()
        $('.modal').css('display', 'block')
      }
      const closeModal = () => {
        $('.modal').css('display', 'none')
      }
      $('#close-button').on('click', closeModal)

      $('#button-1').on('click', () => {
        openModal()
        modalInfo.append($('<p>').text(`Title: ${films.results[3].title}`))
        $.ajax(
          {
            url: 'https://swapi.dev/api/people/'
          }
        ).then(
          (people) => {
            console.log(people);
            modalInfo.append($('<p>').text('Characters:'))
            modalInfo.append($('<ul>').addClass('characters'))
            $('.characters').append($('<li>').text(`${people.results[1].name}`))
            $('.characters').append($('<li>').text(`${people.results[2].name}`))
            $('.characters').append($('<li>').text(`${people.results[9].name}`))
            $.ajax(
              {
                url: 'https://swapi.dev/api/people/?page=2'
              }
            ).then(
              (people2) => {
                $('.characters').append($('<li>').text(`${people2.results[0].name}`))
                $('.characters').append($('<li>').text(`${people2.results[9].name}`))
                $.ajax(
                  {
                    url: 'https://swapi.dev/api/people/?page=4'
                  }
                ).then(
                  (people4) => {
                    $('.characters').append($('<li>').text(`${people4.results[0].name}`))
                    $('.characters').append($('<li>').text(`${people4.results[3].name}`))
                    $('.characters').append($('<li>').text(`${people4.results[4].name}`))
                    $.ajax(
                      {
                        url: 'https://swapi.dev/api/people/?page=5'
                      }
                    ).then(
                      (people5) => {
                        $('.characters').append($('<li>').text(`${people5.results[2].name}`))
                      }
                    )
                  },
                  () => {
                    console.log('bad request 4');
                  }
                )
              },
              () => {
                console.log('bad request 3');
              })
          },
          () => {
            console.log('bad request 2');
          }
        )
        modalInfo.append($('<p>').text('Planets:'))
        modalInfo.append($('<ul>').addClass('planets'))
        $.ajax(
          {
            url: 'https://swapi.dev/api/planets/'
          }
        ).then(
          (planets) => {
            $('.planets').append($('<li>').text(planets.results[0].name))
            $('.planets').append($('<li>').text(planets.results[7].name))
            $('.planets').append($('<li>').text(planets.results[8].name))
          }
        )
      })


      console.log(films.results[3]);


    },
    () => {
    console.log('bad request');
    }
  )


})
