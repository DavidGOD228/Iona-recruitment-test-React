import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card} from 'react-bootstrap/esm';
import {BreedsContext, CatsContext} from '../../contexts';
import {Loader} from '../../components';

type catType = {
    url: string;
    breeds: Array<any>;
};

export function CatDetails(props) {
    const {getCatByIdAsync} = React.useContext(CatsContext);
    const {breedsState} = React.useContext(BreedsContext);
    const [currCat, setCurrCat] = React.useState<catType>();

    const catId = props.match.params.id
    const backURL =  breedsState.breed_id ? `/?breed=${breedsState.breed_id}` : '';

    React.useEffect(() => {
        getCatByIdAsync(catId).then((res) => {
            setCurrCat(res.data);
        }).catch(()=>{
        });
    }, []);

    return (
        <>
            {currCat ?
                <Card>
                    <Card.Header>
                        <Link to={backURL}>
                            <Button variant='outline-light'>
                                Back
                            </Button>
                        </Link>
                    </Card.Header>
                    <Card.Img className="card-img-top" width="150" src={currCat.url}/>
                    <Card.Body>

                        <h4>{currCat.breeds[0].name}</h4><h5>Origin: {currCat.breeds[0].origin}</h5>
                        <h6>{currCat.breeds[0].temperament}</h6><p>{currCat.breeds[0].description}</p>

                    </Card.Body>
                </Card>
                : <Loader/>}
        </>
    );
}