import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments.js';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top alt={props.dish.name} src={props.dish.image} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} ></LoadComments>

                </CardBody>
            </Card>

        </div>
    )
}

export default DishDetail;