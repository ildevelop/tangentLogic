import React, {Fragment} from "react";
import {ListGroup, ListGroupItem, Button} from "reactstrap";

import Loader from "../Loader/Loader";


const myRecipeList = props => {
  const {films, onRemovemyfilms, loaded} = props;
  return (
    <Fragment>
      {loaded ? (
        <div className="myCity-list">
          <p>{films.length === 1 ? `You have only ${films.length} favorites film` : films.length > 1 ? `You have ${films.length} favorites films` : "you do not have a favorite film"}</p>
          <ListGroup>
            {films.map((film, index) => {

                return  <ListGroupItem
                  key={index}
                  className="text-center">
                  <img
                    src={film.snippet.thumbnails.default.url}
                    alt="film-pic"/>

                  <p>{film.snippet.channelTitle}</p>
                  <p>{film.snippet.description}</p>
                  <iframe width="350" height="220" src={"https://www.youtube.com/embed/"+film.id.videoId}>
                  </iframe>
                  <Button
                    style={{marginBottom: "10px"}}
                    color="danger"
                    onClick={() => onRemovemyfilms(film)}>
                    Remove From Favorite List
                  </Button>

                </ListGroupItem>
              }
            )
            }
          </ListGroup>
        </div>
      ) : <Loader/>}
    </Fragment>
  );
};

export default myRecipeList;