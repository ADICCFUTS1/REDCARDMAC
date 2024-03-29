import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import OldButtons from "../Componentes/OldButtons";
import { getFormattedTime } from "../utils";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Card1 = (props) => {
  const classes = useStyles();
  const { todos } = props;
  const todo = todos[0];

  return (
    <div>
      {todo && (
        <>
          {/* <Typography variant="h4">
            ¡Si te gusta la aplicación, considera apoyarnos con un clic en los
            anuncios!
          </Typography> */}
          <p></p>
          <Typography gutterBottom variant="h5" component="h2">
            Evento destacado {todo.Evento}:
          </Typography>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={todo.Image}
                title={todo.Partido}
              />
              <CardContent>
                <Typography>{todo.Competicion}:</Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {getFormattedTime(todo)} {todo.Partido}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <OldButtons {...todo} />
            </CardActions>
          </Card>
        </>
      )}
    </div>
  );
};

export default Card1;
