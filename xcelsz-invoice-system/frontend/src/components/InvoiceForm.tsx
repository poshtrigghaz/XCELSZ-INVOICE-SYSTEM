import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/invoices", formData);
      alert("Invoice created!");
      setFormData({ name: "", amount: "" });
    } catch (error) {
      alert("Failed to create invoice.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Create Invoice</h2>
      <TextField
        label="Customer Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default InvoiceForm;

