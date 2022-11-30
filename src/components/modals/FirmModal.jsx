import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/glovalStyle";
import { Button, TextField } from "@mui/material";

export default function FirmModal({ open, setOpen, info, setInfo }) {

const handleSubmit = (e) => {
  e.preventDefault();

}

const handleChange = (e) => {
  const { name, value } = e.target;
  setInfo({...info, [name]: value })
}

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <TextField
            label="Firm Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name || ""}
            onChange={handleChange}           
          />
          <Button type="submit" variant="contained">Submit Firm</Button>
        </Box>
      </Modal>
    </div>
  );
}
