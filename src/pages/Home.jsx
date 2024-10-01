import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch,useSelector} from 'react-redux'
import { add2cart } from '../store/CartSlice';

// delete 

const Home = () => {
    let dispatch=useDispatch()
    let cartStore=useSelector((state)=>state.cart)
    console.log(cartStore);
    const [products, setproducts] = useState([]);
    const getalldata=async()=>{
        let res= await fetch('https://dummyjson.com/products')
        let data=await res.json()
        console.log(data.products);
        setproducts(data.products)

    }

    useEffect(() => {
        getalldata()
    } , []);
  return (
    // #matrieal ui card and add all imoorts from the jsx code
    // col-span 4*x=12
    <div className='grid grid-cols-12 gap-2 p-5 bg-black'>
        {
        products.map((ele,i)=>{
            return <Card key={i} className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 m-auto' sx={{ maxWidth: 345,bgcolor:"yellow" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={ele.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" onClick={()=>dispatch(add2cart(ele))}>Add to Cart</Button>
            </CardActions>
          </Card>
        })
    }

    </div>
  )
}

export default Home