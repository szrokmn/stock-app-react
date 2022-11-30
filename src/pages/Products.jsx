import { Button, Grid } from "@mui/material";
import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";

const Products = () => {

  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});


  useEffect(() => {
    getFirms();   
  }, []);

  return (
   <Box>
    <Typography variant="h4" color="error" mb={4}>
      Products
    </Typography>

    <Button variant="contained" onClick={() => setOpen(true)}>New Products</Button>

    <ProductModal open={open} setOpen={setOpen} info={info}/>

    {firms?.length > 0 && (
      <Grid container justifyContent="center" gap={3}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo}/>
          </Grid>
        ))}        
      </Grid>
    )}
  </Box>
  );
};

export default Products;
   