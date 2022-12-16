import { Container, FormControl, InputLabel, Input, Button, Grid, Typography, Switch } from "@mui/material"

import { post } from "../../services"
import Swal from "sweetalert2"
import { useState } from "react"
import Header from "../../components/Header"


const SignUp = () => {
    
    const [ values, setValues ] = useState({
        name_pro: "",
        stock_pro: 0,
        price_pro: 0.00,
        new_pro: false,
        expire_date: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await post("/product", values)

        if (response.ok) {
            Swal.fire({
                text: "Producto creado correctamente",
                icon: "success"
            })
        } else {
            Swal.fire({
                text: "Error",
                icon: "error"
            })
            console.log(response)
        }
    }
    
    return(
       <Container maxWidth="md">
        <Header/>
        <Typography variant="h3" color={"black"} my={2}>Register a New Product</Typography>
        <Grid container component="form" onSubmit={handleSubmit} method="post">
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="name_pro">Name Product</InputLabel>
                    <Input 
                    id="name_pro" 
                    aria-describedby="my-helper-text" 
                    name="name_pro"
                    value={values.name_pro}
                    onChange={handleInputChange}

                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="stock_pro">Stock</InputLabel>
                    <Input 
                    id="stock_pro" 
                    aria-describedby="my-helper-text"
                    name="stock_pro"
                    value={values.stock_pro}
                    onChange={handleInputChange}
                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="price_pro">Price</InputLabel>
                    <Input 
                    id="price_pro"  
                    aria-describedby="my-helper-text" 
                    name="price_pro"
                    value={values.price_pro}
                    onChange={handleInputChange}
                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="new_pro">Is new Product?</InputLabel>
                    <Switch 
                    id="new_pro"  
                    aria-describedby="my-helper-text" 
                    name="new_pro"
                    value={values.new_pro}
                    onChange={handleInputChange}
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={3}>
                <Button variant="contained" type="submit" >
                    Registrar
                </Button>
            </Grid>
        </Grid>
       </Container> 
    )
}

export default SignUp