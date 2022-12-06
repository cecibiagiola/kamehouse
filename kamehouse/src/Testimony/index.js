import React from 'react'
import './Testimony.css'

//ARRAY NOMBRE Y TESTIMONIOS

const opinions = [
    {
      id: 1,
      name: 'Goku',
      opinion: 'son todos una manga de giles de goma y yo soy el mejor como siempre y el que salva a todos',
      img: 'goku',
    },
    {
      id: 2,
      name: 'Krilin',
      opinion: 'Me mori como 5 veces ya pero estos me siguen reviviendo y bueno, aca estoy. Saludos a mi vieja. Voy a segir esclfjskgsdlfsljsjfsañlkdañdka',
      img: 'krilin',
    },
    {
        id: 3,
        name: 'Yamcha',
        opinion: 'Me mori como 5 veces ya pero estos me siguen reviviendo y bueno, aca estoy. Saludos a mi vieja. Voy a segir  ',
        img: 'yamcha',
      },  
    

     
  ]

  const Testimony = () => {
    return (
        <div className='all-testimony'>
            {opinions.map((opinion) => (
                <div className='testimony-container' key={opinion.id}>
                    <div className='testimony-name-img-container'>
                        <img
                        className='testimony-image'
                        src={require(`../img/${opinion.img}.png`)} //props.img
                        alt='Testimony' />
                        <p className='testimony-name'>{opinion.name}</p>
                    </div>
                    <p className='testimony-opinion'>{opinion.opinion}</p>
                </div>
            ))}
            
        </div>     
    );
}

export { Testimony } 