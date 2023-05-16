import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AuctionCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 270,
        borderRadius: "30px",
        marginBottom: "10px",
        marginRight: "30px",
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item xs={6} md={6}>
          <img
            src="https://plus.unsplash.com/premium_photo-1677631658676-7368ae019c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2JqZWN0c3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Left Image"
            style={{ objectFit: "cover", maxWidth: "100%", maxHeight: "100%" }}
          />
        </Grid>
        <Grid item xs={6} md={6} container direction="column">
          <Grid item>
            <img
              src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
              alt="Top Right Image"
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Grid>
          <Grid item>
            <img
              src="https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Bottom Right Image"
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default AuctionCard;
