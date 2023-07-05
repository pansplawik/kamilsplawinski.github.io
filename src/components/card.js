import Card from 'react-bootstrap/Card';

export function CardScreen(props) {
  const {description } = props;

  return (
    <Card bg='dark' style={{width: '80vw'}}>
      <Card.Body>
        <Card.Text style={{ fontFamily: 'monospace' ,color:'white' ,textAlign:'left'}}>
        {description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
