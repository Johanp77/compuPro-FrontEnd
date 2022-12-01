import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useGetProducts } from '../Provider';
import styles from '../styles/store.module.css'

const SliderProducts = () => {

  const products = useGetProducts()

  console.log(products);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        }
      }
    ]
  };
  return (
    console.log(products),
    <div className="SlideSize">
      <h2>Monitors</h2>
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div key={index}>
              {<Card className={styles.card} >
                <CardMedia
                  component="img"
                  width="10"
                  height="270"
                  className={styles.media}
                  image={product.image_product}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h5">
                    {product.name_product}
                  </Typography>
                  {/* <Typography gutterBottom variant="h6" component="h2">
                    {product.size}
                  </Typography> */}
                  <Typography variant="body2" color="textSecondary" component="p">
                    ${product.price_product}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/description/${product.id}`} style={{ textDecoration: 'none', color: '#f55139' }} size="small" color="secondary">
                    VER MÁS
                  </Link>
                  <Button id={product.id} size="small" color="secondary">Add to cart</Button>
                </CardActions>
              </Card>
              }
            </div>
          )
        })
        }
      </Slider>
    </div>
  )
}

export default SliderProducts
              //  {
              //     <div>
              //       <p>{protein.name_product}</p>
              //     </div>
              //   }