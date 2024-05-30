import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TemplateSPA.css";
import "./ConfirmacaoEmail.css";

function ConfirmacaoEmail() {
  return (
    <main className="mainFaleConosco">
      <div className="Perguntas">
        <div className="Frequentes">
          <h2>Dúvidas Frequentes</h2>
          <hr></hr>
        </div>
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header >Dúvidas 1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Dúvidas 2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Dúvidas 3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Dúvidas 4</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Dúvidas N</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="EmailEnviado">
      <div className="BoxEmailEnviado">

         <h1>Email enviado com sucesso!</h1>
      </div>

      <div className="QuemSomos">
        <h1>Quem somos nós?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          auctor tellus ut pretium. Phasellus lacus enim, volutpat eget
          efficitur quis, accumsan eget lorem. Etiam orci leo, bibendum eget
          orci ut, commodo luctus diam. In at nibh purus. In hendrerit justo
          elit, ac venenatis nunc hendrerit cursus. Maecenas sit amet aliquet
          purus, in luctus risus. Nunc cursus metus nunc, ut scelerisque enim
          congue facilisis. Sed ornare, dui ac vestibulum pulvinar, nulla quam
          pharetra urna, vitae convallis nisl urna ac odio. Cras feugiat vel
          metus ut eleifend. Nullam a fermentum odio. Praesent congue vitae
          enim id eleifend. Etiam odio justo, commodo quis congue sit amet,
          porta sed mi. Proin gravida luctus sem in laoreet. Nullam a
          fermentum odio. Praesent congue vitae enim id eleifend. Etiam odio
          justo, commodo quis congue sit amet, porta sed mi. Proin gravida
          luctus sem in laoreet.
        </p>
      </div>
      </div>
      </main>
  );
}
export default ConfirmacaoEmail;
