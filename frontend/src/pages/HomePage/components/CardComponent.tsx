import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import React, {FC} from "react";


export const  CardComponent : FC<{props:[{id:"", name:"", author:"", description: "", imageUrl:""}]}> = (books) => {
   return (<div>{books.props.map(b =>  <Card id={b.id} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={b.imageUrl}
                alt="book cover"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Title: {b.name},Author:  {b.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Summary:
                     {b.description}

                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>)},
   </div>)
};