import './App.css';
import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function Cards(props) {
    // Cards example for product view

  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle tag="h5">Product 1</CardTitle>
        <CardText>Product Description.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body inverse color="primary">
        <CardTitle tag="h5">Product 2</CardTitle>
        <CardText>Product Description.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="success">
        <CardTitle tag="h5">Product 3</CardTitle>
        <CardText>Product Description.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="info">
        <CardTitle tag="h5">Product 4</CardTitle>
        <CardText>Product Description.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="warning">
        <CardTitle tag="h5">Product 5</CardTitle>
        <CardText>Product Description.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="danger">
        <CardTitle tag="h5">Product 6</CardTitle>
        <CardText>Product Description.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
}

export default Cards;
