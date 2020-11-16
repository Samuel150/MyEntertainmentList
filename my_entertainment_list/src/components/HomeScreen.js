import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Col , Row, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class HomeScreen extends Component {
        constructor(props) {
                super(props);
                this.myRef = React.createRef();
        }
        render() {  
                return (  
                <div ref={this.myRef}>
                <Row> 
                <Col xs={12} md={7}>
                        <div >  
                        <Carousel>  
                                <Carousel.Item style={{'height':"500px"}} >  
                                        <img style={{'height':"500px"}}  
                                        className="d-block w-100"  
                                        src={'/descarga.jpg'}  />  
                                        <Carousel.Caption>  
                                        <h3>First Demo </h3>  
                                        </Carousel.Caption>  
                                </Carousel.Item  >  

                                <Carousel.Item style={{'height':"500px"}}>  
                                        <img style={{'height':"500px"}}  
                                           className="d-block w-100"  
                                            src={'/descarga.jpg'}    />  
                                        <Carousel.Caption> 
                                           <h3>Second Demo</h3>  
                                        </Carousel.Caption>  
                                </Carousel.Item>  
                        </Carousel>  
                        </div>        
                </Col>
                <Col >
                        <Row>
                        <Col>
                        <img  src={'/naruto.jpg'} style={{'height':"250px"}}  />
                        </Col>
                        <Col>
                        Some quick example text to build on the card title and make up the bulk
                        Some quick example text to build on the card title and make up the bulk
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <img  src={'/naruto.jpg'}  style={{'height':"250px"}} />
                        </Col>
                        <Col>
                        Some quick example text to build on the card title and make up the bulk
                        Some quick example text to build on the card title and make up the bulk
                        </Col>
                        </Row>            
                </Col>
                </Row>
                <Link to="/LogIn">Top Anime</Link>
                </div>
                 
                )
        }
}

export default HomeScreen