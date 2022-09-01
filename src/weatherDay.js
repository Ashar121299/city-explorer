import React from "react";
import Card from "react-bootstrap/Card";

class weatherDay extends React.Component {
  render() {
    return (
      <div>{this.props.weatherArr.map((item) => {
              return (
        <Card>
          <Card.Body>
            
                
                  <Card.Title>date : {item.valid_date}</Card.Title>

                  <Card.Text>weather : {item.description}</Card.Text>
                
          
          </Card.Body>
        </Card>    );
            })}
      </div>
    );
  }
}
export default weatherDay;