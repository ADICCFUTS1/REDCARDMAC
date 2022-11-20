import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonDefault from "../Componentes/ButtonsDefault";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Card1(props) {
  const classes = useStyles();
  const dta = [];
  const date = new Date(1668960000 * 1000);
  const hours = "0" + date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime =
    hours.substr(-2) + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
  dta.push(formattedTime);
  return (
    <div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/img/qatar.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {dta[0]} Qatar - Ecuador
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonDefault />
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
