import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Form, Button, Card} from 'react-bootstrap/esm';
import {BreedsContext, CatsContext} from '../../contexts';

export function BrowserMain(props) {
    const {breedsState, setBreedId} = React.useContext(BreedsContext);
    const {catsState, getCatsAsync, setCats} = React.useContext(CatsContext);
    const history = useHistory();

    const paramsURL = new URLSearchParams(props.location.search);
    const breedDefault = paramsURL.get('breed');

    const onBreedChoose = async (breed_id) => {
        const cats = await getCatsAsync(breed_id);

        history.push("/?breed=" + breed_id);

        setBreedId(breed_id);
        setCats(cats.data);
    };

    React.useEffect(() => {
        if (breedDefault) {
            onBreedChoose(breedDefault);
            setBreedId(breedDefault);
        }
    }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                            <Form.Label>Breeds</Form.Label>
                            <select id="breed" value={breedsState.breed_id} onChange={(event) => onBreedChoose(event.target.value)}
                                    className="form-control">
                                <option value="">Select breed</option>
                                {breedsState.breeds.map((breed) =>
                                    <option value={breed.id}>{breed.name}</option>
                                )}
                            </select>
                        </Form.Group>
                    </Form>
                    <Button>Load more</Button>

                </div>
            </div>
            <div className="row">

                {catsState.cats.map((cat) =>
                    <div className="col-md-3 col-sm-6 col-12">
                        <Card>
                            <Card.Img className="card-img-top" width="150" src={cat.url}/>
                            <Card.Body>
                                <Link to={"/" + cat.id}>
                                    <Button variant='outline-light'>
                                        View
                                        details
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </div>
        </>
    );
}