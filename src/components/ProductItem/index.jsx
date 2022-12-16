import {
    Paper,
    Box,
    CardContent,
    Typography
} from '@mui/material'

const ProductItem = ({book}) => {
    return (
        <Paper elevation={3}>
            <CardContent>
                <Box>
                    <Typography my={2} variant="h6">{book.name_pro}</Typography>
                    <Typography variant="body1">Stock: {book.stock_pro}</Typography>
                    <Typography variant="body1">Precio: {book.price_pro}</Typography>
                    <Typography variant="body1">Estado: {book.new_pro}</Typography>
                    <Typography variant="body1">Fecha: {book.expire_date}</Typography>
                    <Typography variant="body1">Fecha: {book.createdAt}</Typography>
                </Box>
            </CardContent>
        </Paper>
    )
}

export default ProductItem