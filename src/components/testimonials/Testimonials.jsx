import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data = [
  {
    avtar: AVTR1,
    name: 'Rohit Dahal',
    review: 'Lorem ipsum dolor sit amet consetur asicere elit. itarec asu n srdfjsz sarfk afjmai  asrofm, akozmvfioj asjmad oask frmaima oalkjoam alkrfvj  asjkfadf  lk avpokamlj kjdfvj ajkjj b !'
  },
  {
    avtar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consetur asicere elit. itarec asu n srdfjsz sarfk afjmai  asrofm, akozmvfioj asjmad oask frmaima oalkjoam alkrfvj  asjkfadf  lk avpokamlj kjdfvj ajkjj b !'
  },
  {
    avtar: AVTR3,
    name: 'Kwin Sespite',
    review: 'Lorem ipsum dolor sit amet consetur asicere elit. itarec asu n srdfjsz sarfk afjmai  asrofm, akozmvfioj asjmad oask frmaima oalkjoam alkrfvj  asjkfadf  lk avpokamlj kjdfvj ajkjj b !'
  },
  {
    avtar: AVTR4,
    name: 'Adam Smith',
    review: 'Lorem ipsum dolor sit amet consetur asicere elit. itarec asu n srdfjsz sarfk afjmai  asrofm, akozmvfioj asjmad oask frmaima oalkjoam alkrfvj  asjkfadf  lk avpokamlj kjdfvj ajkjj b !'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        {
          data.map(({ avtar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avtar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials