import images from './images';
export const links = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Menu',
    url: '/plan',
  },
  {
    id: 4,
    text: 'Reservation',
    url: '/reservation',
  },
  {
    id: 5,
    text: 'Order Online',
    url: '/order',
  },
  {
    id: 6,
    text: 'Login',
    url: '/login',
  },
];
export const specials = {
  title: 'This weeks specials!',
  cards: [
    {
      id: 1,
      title: 'Greek salad',
      price: '$12.99',
      body: 'The famous greek salad of crispy lettuce peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: images.greekSalad,
    },
    {
      id: 2,
      title: 'Bruchetta',
      price: '$5.99',
      body: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
      image: images.bruchetta,
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      body: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: images.lemonDessert,
    },
  ],
};
export const testimonials = {
  title: 'Testimonial',
  cards: [
    {
      id: 1,
      name: 'Bob',
      rating: 3,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quis.',
      image: images.person1,
    },
    {
      id: 2,
      name: 'May',
      rating: 5,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quis.',
      image: images.person2,
    },
    {
      id: 3,
      name: 'Sam',
      rating: 4,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quis.',
      image: images.person3,
    },
    {
      id: 4,
      name: 'Tom',
      rating: 5,
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quis.',
      image: images.person4,
    },
  ],
};
