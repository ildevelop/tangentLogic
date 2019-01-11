import React, {Fragment} from "react";
import {Button, ListGroup, InputGroup, ListGroupItem, Input} from 'reactstrap';
import Loader from '../Loader/Loader';
import './FilmsList.scss'

const filmsList = props => {
  const {value, onRemovefilms, onClearSearch, onAddfilms, films, onInputChange, loaded} = props;
  return (
    <Fragment>
      {loaded ? (
        <div className="search-list">
          <p>Top {films.length} yours films</p>
          <div className="search-box">
            <div className="search-item">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Search film..."
                  value={value}
                  onChange={({target}) => onInputChange(target.value)}
                />
              </InputGroup>

              <div className="buttonGroup">
                <Button color="warning" onClick={() => onClearSearch()}> RESET</Button>
              </div>

            </div>
          </div>

          <ListGroup>
            {films.length > 0 ? films.map((film, index) => {
                return <ListGroupItem
                  key={index}
                  style={{overflow:"hidden"}}>
                  <img
                    src={film.snippet.thumbnails.default.url}
                    alt="film-pic"/>
                  <p>{film.snippet.title}</p>
                  <p>{film.snippet.description}</p>
                  {/*<iframe width="150" height="120" src={"https://www.youtube.com/embed/" + film.id.videoId}>*/}
                  {/*</iframe>*/}

                  <div>
                    {!film.isFavorites ? (
                      <Button
                        style={{margin: "10px"}}
                        color="success"
                        onClick={() => onAddfilms(film)}>
                        Add To List
                      </Button>
                    ) : (
                      <Button
                        style={{margin: "10px"}}
                        color="danger"
                        onClick={() => onRemovefilms(film)}>
                        Remove From Favorite List
                      </Button>
                    )}
                  </div>

                </ListGroupItem>
              }
            ) : null
            }
          </ListGroup>

        </div>
      ) : <Loader/>}
    </Fragment>
  );
};

export default filmsList;