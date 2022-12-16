import { useState } from "react"

import { 
    Card, 
    CardContent, 
    Container, 
    Box, 
    Button, 
    TextField 
} from "@mui/material"

// import { searchBooks } from "../../services"
// import { ProductItem } from "../../components"
import { get } from "../../services";
import { ProductItem } from "../../components";
import Header from '../../components/Header';

const Books = () => {

    // const [search, setSearch] = useState("")

    const [books, setBooks] = useState([])

    const handleSearch = async () => {
        const books = await get("/product")
        setBooks(books.data)
    }

    return (
        <Container maxWidth="md">
            <Header></Header>
            <Box my = {4}>
                <Card>
                    <CardContent>
                        <Box sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}>
                            <TextField 
                                id="outlined-basic"
                                label="Productos"
                                fullWidth
                                size="small"
                                onChange={(e) => setSearch(e.target.value)}
                                variant="outlined"
                            />
                            <Box my={2}>
                                <Button onClick={handleSearch} size="large" variant="contained">Buscar</Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            {books.length > 0 && books.map((book, index) => <ProductItem key={index} book={book} /> )}
        </Container>
    )
}

export default Books