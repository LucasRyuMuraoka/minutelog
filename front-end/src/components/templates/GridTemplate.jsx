import React from "react";
import { Container } from "./GridTemplate.styles";

const GridTemplate = (props) => {
	return(
		<Container>
				{
					// eslint-disable-next-line react/prop-types
					React.Children.map(props.children, (child) => {
						if(child.props && child.props.type === "sidebar") {
							return <section className="sidenav">{ child }</section>
						} else if (child.props && child.props.type === "main") {
							return <main className="main">{ child }</main>
						} else if (child.props && child.props.type === "footer") {
							return <footer className="footer">{ child }</footer>
						}
					})
				}
		</Container>
	);
}

export { GridTemplate };
