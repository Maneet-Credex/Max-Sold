import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 400,
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <CardMedia
        sx={{ height: 180 }}
        image="https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
