import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";


export const Event = () => {
  return (
    <HelmetProvider>
      <Container className="Event-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Event | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Event </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="w-100" style={{width: "100%"}}>
          <iframe 
            title="Get Into Tech"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            style={{width: "100%", height: "100vh"}}
            src="https://docs.google.com/forms/d/e/1FAIpQLSd15wpAYNxhE_yxRZMkLS_Y526Ya8NLnuy4kWQBXjPBjtdQrg/viewform?embedded=true" 
          >
            Loading…
          </iframe>
        </div>
      </Container>
    </HelmetProvider>
  );
};
