import { Row, Col } from 'react-bootstrap';
import Restaurant from './Restaurant';

export default function ListRestaurants() {
  const restaurants = [
    {
      id: 1,
      name: 'Restaurante 1',
      description: 'Descripción del restaurante 1',
      image_url: '/restaurant.jpeg',
      category_title: 'Comida rápida',
      delivery_tax: 5.00
    },
    {
      id: 2,
      name: 'Restaurante 2',
      description: 'Descripción del restaurante 2',
      image_url: '/restaurant.jpeg',
      category_title: 'Comida italiana',
      delivery_tax: 7.50
    },
    {
      id: 3,
      name: 'Restaurante 1',
      description: 'Descripción del restaurante 1',
      image_url: '/restaurant.jpeg',
      category_title: 'Comida rápida',
      delivery_tax: 5.00
    },
    {
      id: 4,
      name: 'Restaurante 2',
      description: 'Descripción del restaurante 2',
      image_url: '/restaurant.jpeg',
      category_title: 'Comida italiana',
      delivery_tax: 7.50
    }
  ]

  return(
    <div className='mt-5'>
      <h3 className='fw-bold'>Restaurantes</h3>
      <Row>
        <Col>
          {restaurants.map((restaurant, i) =>
            <Restaurant
              {...restaurant}
              key={i}
            />
          )}
        </Col>
      </Row>
    </div>
  )
}