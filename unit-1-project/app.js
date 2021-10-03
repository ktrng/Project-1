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


      //episode 1 info
      $('#button-1').on('click', () => {
        openModal()
        modalInfo.append($('<p>').text(`Title: ${films.results[3].title}`))

        //episode 1 characters
        $.ajax(
          {
            url: 'https://swapi.dev/api/people/'
          }
        ).then(
          (people) => {
            // console.log(people);
            modalInfo.append($('<p>').text('Notable characters:'))
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

        //episode 1 planets
        $.ajax(
          {
            url: 'https://swapi.dev/api/planets/'
          }
        ).then(
          (planets) => {
            modalInfo.append($('<p>').text('Planets:'))
            modalInfo.append($('<ul>').addClass('planets'))
            $('.planets').append($('<li>').text(planets.results[0].name)) //tattooine
            $('.planets').append($('<li>').text(planets.results[7].name)) //naboo
            $('.planets').append($('<li>').text(planets.results[8].name)) //coruscant
          }
        )
      })


      //episode 2 info
      $('#button-2').on('click', () => {
        openModal()
        modalInfo.append($('<p>').text(`Title: ${films.results[4].title}`))

        //episode 2 characters
        $.ajax(
          {
            url: 'https://swapi.dev/api/people/'
          }
        ).then(
          (people) => {
            modalInfo.append($('<p>').text('Notable characters:'))
            modalInfo.append($('<ul>').addClass('characters'))
            $('.characters').append($('<li>').text(`${people.results[1].name}`)) //c3p0
            $('.characters').append($('<li>').text(`${people.results[2].name}`)) //r2d2
            $('.characters').append($('<li>').text(`${people.results[9].name}`)) //obi1
            $.ajax(
              {
                url: 'https://swapi.dev/api/people/?page=2'
              }
            ).then(
              (people2) => {
                $('.characters').append($('<li>').text(`${people2.results[0].name}`)) //anakin
                $('.characters').append($('<li>').text(`${people2.results[8].name}`)) //yoda
                $('.characters').append($('<li>').text(`${people2.results[9].name}`)) //palps
                $.ajax(
                  {
                    url: 'https://swapi.dev/api/people/?page=4'
                  }
                ).then(
                  (people4) => {
                    $('.characters').append($('<li>').text(`${people4.results[3].name}`)) //padme
                    $('.characters').append($('<li>').text(`${people4.results[4].name}`)) //jarjar
                    $.ajax(
                      {
                        url: 'https://swapi.dev/api/people/?page=5'
                      }
                    ).then(
                      (people5) => {
                        $('.characters').append($('<li>').text(`${people5.results[4].name}`)) //ayla
                        $('.characters').append($('<li>').text(`${people5.results[9].name}`)) //mace
                        $.ajax(
                          {
                            url: 'https://swapi.dev/api/people/?page=6'
                          }
                        ).then(
                          (people6) => {
                            $('.characters').append($('<li>').text(`${people6.results[0].name}`)) //ki
                            $('.characters').append($('<li>').text(`${people6.results[1].name}`)) //kit
                            $('.characters').append($('<li>').text(`${people6.results[6].name}`)) //plo
                            $.ajax(
                              {
                                url: 'https://swapi.dev/api/people/?page=7'
                              }
                            ).then(
                              (people7) => {
                                $('.characters').append($('<li>').text(`${people7.results[2].name}`)) //luminara
                                $('.characters').append($('<li>').text(`Count ${people7.results[5].name}`)) //dooku
                                $('.characters').append($('<li>').text(`${people7.results[7].name}`)) //jango
                                $.ajax(
                                  {
                                    url: 'https://swapi.dev/api/people/?page=8'
                                  }
                                ).then(
                                  (people8) => {
                                    $('.characters').append($('<li>').text(`Count ${people8.results[6].name}`))
                                  }
                                )
                              }
                            )
                          },
                          () => {
                              console.log('bad request 6');
                          }
                        )
                      },
                      () => {
                          console.log('bad request 5');
                      }
                    )
                  },
                  () => {
                      console.log('bad request 4');
                  }
                )
              },
              console.log('bad request 3'));

          },
          console.log('bad request 2'));

          //episode 2 planets
          $.ajax(
            {
              url: 'https://swapi.dev/api/planets/'
            }
          ).then(
            (planets) => {
              modalInfo.append($('<p>').text('Planets:'))
              modalInfo.append($('<ul>').addClass('planets'))
              $('.planets').append($('<li>').text(planets.results[0].name)) //tattooine
              $('.planets').append($('<li>').text(planets.results[7].name)) //naboo
              $('.planets').append($('<li>').text(planets.results[8].name)) //coruscant
              $('.planets').append($('<li>').text(planets.results[9].name)) //kamino
              $.ajax(
                {
                  url: 'https://swapi.dev/api/planets/?page=2'
                }
              ).then(
                (planets2) => {
                  $('.planets').append($('<li>').text(planets.results[0].name))
                }
              )
            }
          )
      })



      //episode 3 info
      $('#button-3').on('click', () => {
        openModal()
        modalInfo.append($('<p>').text(`Title: ${films.results[5].title}`))

        //episode 3 characters
        $.ajax(
          {
            url: 'https://swapi.dev/api/people/'
          }
        ).then(
          (people) => {
            modalInfo.append($('<p>').text('Notable characters:'))
            modalInfo.append($('<ul>').addClass('characters'))
            $('.characters').append($('<li>').text(`${people.results[1].name}`)) //c3p0
            $('.characters').append($('<li>').text(`${people.results[2].name}`)) //r2d2
            $('.characters').append($('<li>').text(`${people.results[9].name}`)) //obi1
          })
          $.ajax(
            {
              url: 'https://swapi.dev/api/people/?page=2'
            }
          ).then(
            (people2) => {
              $('.characters').append($('<li>').text(`${people2.results[0].name}`)) //anakin
              $('.characters').append($('<li>').text(`${people2.results[8].name}`)) //yoda
              $('.characters').append($('<li>').text(`Emperor ${people2.results[9].name}`)) //palps
              $.ajax(
                {
                  url: 'https://swapi.dev/api/people/?page=2'
                }
              ).then(
                (people3) => {
                  $('.characters').append($('<li>').text(`${people2.results[0].name} / Darth Vader`)) //anakin
                  $('.characters').append($('<li>').text(`${people2.results[8].name}`)) //yoda
                  $('.characters').append($('<li>').text(`${people2.results[9].name}`)) //palps
                },
                console.log('bad request 3')
              )
            },
            console.log('bad request 2')
          )

      })


      console.log(films.results[5]);


    },
    () => {
    console.log('bad request');
    }
  )


})
