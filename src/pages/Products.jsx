import { Button } from "@mui/material";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../hooks/useStockCalls";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import { btnHoverStyle } from "../styles/glovalStyle";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VerticalAlignBottomcon from "@mui/icons-material/VerticalAlignBottom";



const Products = () => {

  const { getBrands, getCategories, getProducts } = useStockCalls();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});


  useEffect(() => {
    getBrands();   
    getCategories();   
    getProducts();   
  }, []);

  return (
   <Box>
    <Typography variant="h4" color="error" mb={4}>
      Products
    </Typography>

    <Button variant="contained" onClick={() => setOpen(true)}>New Product</Button>

    {/* <ProductModal open={open} setOpen={setOpen} info={info}/> */}

    {products?.length > 0 && (
          <TableContainer component={Paper} sx={{ mt:3 }} elevation={10}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">
                  <Box>
                  <div>Brand</div>
                  {true && <UpgradeIcon/>}
                  {false && <VerticalAlignIcon/>}
                  </Box>
                </TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Stock</TableCell>
                <TableCell align="center">Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{product.category}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.stock}</TableCell>
                  <TableCell align="center">
                    <DeleteIcon sx={btnHoverStyle}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )}
  </Box>
  );
};

export default Products;
   