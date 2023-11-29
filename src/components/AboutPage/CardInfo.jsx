import React from 'react'
import './style/CardInfo.css'

const CardInfo = ({ info }) => {


    return (
        <article className='cardinfo-container'>
            <section className='cardinfo__info'>
                <h3 className='cardinfo__info__title'>{info.title}</h3>
                <p className='cardinfo__info__p'>{info.description}</p>
            </section>
            <div className='cardinfo__date'>
                <i className={`${info.icon} cardinfo__date__icon`}></i>
                <i className={'bx bx-radio-circle-marked cardinfo__date__circle'}></i>
                <p className='cardinfo__date__p'>{info.date}</p>
            </div>
        </article>
    )
}

export default CardInfo