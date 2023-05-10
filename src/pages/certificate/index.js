import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { certificates, meta } from "../../content_option";
import "./style.css"


export const Certification = () => {
  return (
    <HelmetProvider>
      <Container className="Certificate-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Certificates | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Credits </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 cr_items_ho">
          {certificates.map((data, i) => {
            return (
              <div key={i} className="cr_item">
                <img src={data.img} alt="..." />
                <div className="content">
                  <p>{data.title}</p>
                  <p>{data.year}</p>
                  <a target="_blank" rel="noreferrer" href={data.src}>view certificate</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-100" style={{width: "100%"}}>
          
        </div>
      </Container>
    </HelmetProvider>
  );
};
