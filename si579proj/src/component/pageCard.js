import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function PageCard(props) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{props.pageName}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link to={`/${props.address}`}>{`Go To ${props.pageName}`}</Link>
        </Card.Body>
      </Card>
    );
}

export default PageCard;