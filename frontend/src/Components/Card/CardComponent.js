import React from "react";
import { Placeholder } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import "./CardComponent.css"

export default function CardComponent() {

    return (

        <div className="outerBox">
            <div className="d-flex justify-content-around">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={icon1} />
                    <Card.Body>
                        <Card.Title>Legal Consulation only a Call Away</Card.Title>
                        <Card.Text>

                            Legal Consultation provides the real idea of legal solution and further Course of Action Required to
                            tell you about the Chances of Success, and plausible outcome.
                        </Card.Text>
                        <Button variant="primary">Consult Now</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={icon2} />
                    <Card.Body>
                        <Card.Title>Legal Services on Touch of Button</Card.Title>
                        <Card.Text>
                            Hire the Advocate which you feel comfortable with to pursue your Legal Case by building a strong Client-Advocate Relationship in an Accountable Manner.
                        </Card.Text>
                        <Button variant="primary">Choose Now</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={icon3} />
                    <Card.Body>
                        <Card.Title>No More Taxation Issues to you</Card.Title>
                        <Card.Text>
                            Get connected to best experts in Industry of Taxation Matters.Get resolution to all your Taxation Queries within Time Bound Manner and Experience Smooth Filing.
                        </Card.Text>
                        <Button variant="primary">Taxation Filing</Button>

                    </Card.Body>
                </Card>



                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={icon4} />
                    <Card.Body>
                        <Card.Title>Get Connected to E-Court Services</Card.Title>
                        <Card.Text>
                            Get efficient & time-bound citizen centric services delivery as detailed in E-Court. Never miss a Court Hearing!
                        </Card.Text><br />
                        <a href="https://ecourts.gov.in/ecourts_home/" target="_blank" ><Button variant="primary">E Cout Services</Button></a>
                    </Card.Body>
                </Card>


            </div>
        </div>

    )
}

