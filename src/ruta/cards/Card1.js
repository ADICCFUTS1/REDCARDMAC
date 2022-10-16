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

export default function Card1() {
  const classes = useStyles();
  var dta = [];
  var date = new Date(1665929700 * 1000);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime =
    hours.substr(-2) + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
  dta.push(formattedTime);

  return (
    <div>
      <Typography gutterBottom variant="subtitle1" component="h6">
        Domingo 16/10/2022 {dta[0]}
      </Typography>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/16657903599615.webp"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Real Madrid - Barcelona
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonDefault />
        </CardActions>
      </Card>
    </div>
  );
}
