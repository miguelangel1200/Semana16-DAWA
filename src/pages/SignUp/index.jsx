import { Container, FormControl, InputLabel, Input, Button, Grid, Typography } from "@mui/material"

import { post } from "../../services"
import Swal from "sweetalert2"
import { useState } from "react"


const SignUp = () => {
    
    const [ values, setValues ] = useState({
        name: "",
        email: "",
        password: ""
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
        const response = await post("users/signup", values)

        if (response.ok) {
            Swal.fire({
                text: "Usuario creado correctamente",
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
        <Typography variant="h3" color={"black"} my={2}>Register</Typography>
        <Grid container component="form" onSubmit={handleSubmit} method="post">
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                    <Input 
                    id="name" 
                    aria-describedby="my-helper-text" 
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}

                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input 
                    id="email" 
                    aria-describedby="my-helper-text"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={2}>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input 
                    id="password" 
                    aria-describedby="my-helper-text" 
                    name="password"
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    required
                    />
                </FormControl>
            </Grid>
            <Grid item md={12} my={3}>
                <Button variant="contained" type="submit" >
                    Sign Up
                </Button>
            </Grid>
        </Grid>
       </Container> 
    )
}

export default SignUp