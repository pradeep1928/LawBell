import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import image1 from "./images/image1.png"
import "./Screen2Card.css"
// import "./Screen2Card1.css"
// import "./Screen2Card2.css"
import Accordion from "react-bootstrap/Accordion"




export default function Screen2Card() {
    return (
        <>
            <Accordion className="back">
                <Accordion.Item eventKey="0" className="item-back">
                    <Accordion.Header> LawBell: Services Offered</Accordion.Header>


                    <div className="container">
                        <Card style={{ width: '18rem' }}>
                            <figure className="hover-rotate">
                                <Card.Img className="imagebox" variant="top" src="https://www.rifiuticampania.org/wp-content/uploads/2020/12/lawyer-services.jpeg" />
                            </figure>
                            <Card.Body>

                                <Card.Title>Hire an Advocate</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Hire Now</Button>
                            </Card.Body>
                        </Card>




                        <Card style={{ width: '18rem' }}>
                            <figure className="hover-rotate">
                                <Card.Img className="imagebox" variant="top" src="https://poster.keepcalmandposters.com/default/5629363_keep_calm_and_advocate__change.png" />
                            </figure>
                            <Card.Body>
                                <Card.Title>Change your Advocate</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Change Now</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <figure className="hover-rotate">
                                <Card.Img className="imagebox" variant="top" src="https://i1.sndcdn.com/artworks-000353569515-kczeoc-t500x500.jpg" />
                            </figure>
                            <Card.Body>
                                <Card.Title>Counsel Appearance</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Hire Now</Button>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <figure className="hover-rotate">
                                <Card.Img className="imagebox" variant="top" src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/909203398FacilityAdministrator.jpg" />
                            </figure>
                            <Card.Body>
                                <Card.Title>Para Legal Representatve</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Seek Representatve</Button>
                            </Card.Body>
                        </Card>
                    </div>


                </Accordion.Item >
            </Accordion>

            <Accordion className="back">
                <Accordion.Item eventKey="0" className="item-back2">
                    <Accordion.Header>LawBell: Other Services Offered</Accordion.Header>

                    <Accordion.Body>

                        <div className="container">

                            <Card style={{ width: '18rem' }}>
                                <Card.Img className="imagebox" variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>



                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>

    )


}