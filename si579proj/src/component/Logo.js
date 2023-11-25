import Card from 'react-bootstrap/Card';

const Logo = () => {
  return (
    <Card style={{ width: '67rem' }} className='shadow-lg mx-auto p-3 my-3'>
      <Card.Body>
        <Card.Title className="fs-1">SI 579 Final Project</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">navigate your academic world </Card.Subtitle>
        <Card.Text>
        This tool displays the Class Information for Winter 2024
        about the University of Michigan School of Information curriculum to Users.
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default Logo;