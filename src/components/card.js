import Card from 'react-bootstrap/Card';

export function CardScreen(props) {
  const { description } = props;
  const descriptionArray = Array.isArray(description) ? description : [description];


  return (
    <Card bg='dark' style={{width: '80vw',marginBottom:'5vw'}}>
      <Card.Body>
      {descriptionArray.map((descript) => (
        <Card.Body style={{ marginBottom: '10px', border: '1px solid white' }}>
           <Card.Text style={{ fontFamily: 'monospace' ,color:'white' ,textAlign:'left',fontSize:19}}>
        {descript.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </Card.Text>
        </Card.Body>    
      ))}   
      </Card.Body>
    </Card>
  );
}
