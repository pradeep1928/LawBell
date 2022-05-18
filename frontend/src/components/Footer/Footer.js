import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "red",
				textAlign: "center",
				marginTop: "-50px" }}>
		LawBell: Making Justice Accessible
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/">Aim</FooterLink>
			<FooterLink href="/">Vision</FooterLink>
			<FooterLink href="/">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="/">Consultation</FooterLink>
			<FooterLink href="/">Hiring Advocate</FooterLink>
			<FooterLink href="/">Drafting Of Contracts</FooterLink>
		</Column>
		{/* <Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="/">Uttar Pradesh</FooterLink>
			<FooterLink href="/">Ahemdabad</FooterLink>
			<FooterLink href="/">Indore</FooterLink>
			<FooterLink href="/">Mumbai</FooterLink>
		</Column> */}
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
