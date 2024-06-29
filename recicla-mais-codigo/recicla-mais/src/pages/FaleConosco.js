import React, { useState, useEffect } from "react";
import "./FaleConosco.css";
import "./TemplateSPA.css";
import BotaoVerdeG from "../components/buttons/BotaoVerdeG";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function FaleConosco() {

  useEffect(() => {
    window.scrollTo(0, 0); // Move o scroll para o topo do viewport quando a tela é montada
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { nome, email, telefone } = formData;

    // Verificar se nome, email e telefone estão preenchidos
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha os campos Nome, Email e Telefone.");
      return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
    });

    // Navegar para a outra tela
    navigate("/ConfirmacaoEmail");
  };

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
              <Accordion.Header>Fale Conosco</Accordion.Header>
              <Accordion.Body>
                <p>Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisar de assistência, sinta-se à vontade para entrar em contato conosco. Na ReciclaMais, valorizamos a sua opinião e estamos sempre prontos para ouvir.</p>
                <p>Preencha o formulário ao lado e mande sua mensagem.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Como Entrar em Contato</Accordion.Header>
              <Accordion.Body>
                <p><strong>Email:</strong> Você pode nos enviar um email para <a href="mailto:contato@reciclamais.com">contato@reciclamais.com</a>. Respondemos a todas as mensagens em até 48 horas úteis.</p>
                <p><strong>Telefone:</strong> Ligue para nós no número (31) 1234-5678. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.</p>
                <p><strong>Redes Sociais:</strong> Siga-nos e envie suas mensagens pelas nossas redes sociais:</p>
                <ul>
                  <li><a href="https://facebook.com/reciclamais" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://instagram.com/reciclamais" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://twitter.com/reciclamais" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
                <p><strong>Formulário de Contato:</strong> Utilize o formulário abaixo para nos enviar uma mensagem diretamente pelo site. Responderemos o mais breve possível.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Nosso Endereço</Accordion.Header>
              <Accordion.Body>
                <p><strong>ReciclaMais</strong><br />
                  Rua Exemplo, 123<br />
                  Bairro Sustentável<br />
                  Belo Horizonte, MG, 30000-000</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Por que Entrar em Contato?</Accordion.Header>
              <Accordion.Body>
                <p><strong>Sugestões:</strong> Queremos saber suas ideias para melhorar nossos serviços e a experiência do usuário.</p>
                <p><strong>Dúvidas:</strong> Tem alguma pergunta sobre nossos serviços de reciclagem? Estamos aqui para esclarecer.</p>
                <p><strong>Feedback:</strong> Sua opinião é importante para nós. Conte-nos como podemos melhorar.</p>
                <p><strong>Parcerias:</strong> Interessado em se tornar um parceiro da ReciclaMais? Entre em contato para discutirmos oportunidades.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Política de Privacidade</Accordion.Header>
              <Accordion.Body>
                <p>Valorizamos a sua privacidade e segurança. Todas as informações fornecidas serão tratadas com confidencialidade e usadas apenas para melhorar nossos serviços. Para mais detalhes, consulte nossa <a href="#policy">Política de Privacidade</a>.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="FaleConosco">
        <div className="boxFaleConosco">
          <h1>Fale Conosco</h1>

          <div className="divInputs">
            <input
              className="inputNome"
              type="text"
              placeholder="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <input
              className="inputEmail"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="inputTelefone"
              type="text"
              placeholder="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="botao">
            <BotaoVerdeG texto="ENVIAR" eventoOnClick={handleSubmit} />
          </div>
        </div>
        <div class="QuemSomos">
  <h1>Quem somos nós?</h1>
  <p>
    Bem-vindo à ReciclaMais, onde a inovação encontra a sustentabilidade! Somos uma equipe apaixonada e dedicada à criação de um futuro mais verde e consciente. Nossa missão? Transformar o mundo em um lugar melhor, um dispositivo eletrônico de cada vez.
  </p>

  <h2>Nossa História</h2>
  <p>
    Nascemos da necessidade urgente de combater o crescente problema do lixo eletrônico. Com a tecnologia avançando a passos largos, milhões de dispositivos são descartados todos os anos, causando danos irreparáveis ao meio ambiente. Foi então que percebemos: era hora de agir!
  </p>

  <h2>Nossa Missão</h2>
  <p>
    Na ReciclaMais, acreditamos que cada pequeno gesto conta. Trabalhamos incansavelmente para promover a reciclagem responsável e reduzir o impacto ambiental causado pelo descarte inadequado de eletrônicos. Nossa missão é educar, inspirar e capacitar comunidades a se tornarem guardiãs do nosso planeta.
  </p>

  <h2>O que Fazemos</h2>
  <p>
    Coletamos e reciclamos dispositivos eletrônicos de forma segura e eficiente. Cada item que recebemos passa por um rigoroso processo de triagem e reciclagem, garantindo que todos os componentes sejam reutilizados ou descartados de maneira ambientalmente correta. Mas nosso trabalho vai além da reciclagem. Também nos dedicamos a educar o público sobre a importância da sustentabilidade e a oferecer soluções práticas para o descarte de eletrônicos.
  </p>

  <h2>Nossa Visão</h2>
  <p>
    Imaginamos um mundo onde a tecnologia e a natureza coexistem harmoniosamente. Um mundo onde cada gadget descartado encontra um novo propósito, e onde cada pessoa se sente responsável pelo bem-estar do planeta. Estamos comprometidos em liderar essa mudança e em inspirar outros a se unirem a nós nessa jornada.
  </p>

  <h2>Por que Importa?</h2>
  <p>
    O descarte inadequado de lixo eletrônico é uma das maiores ameaças ambientais da atualidade. Substâncias tóxicas, como mercúrio e chumbo, podem contaminar solo e água, colocando em risco a saúde de pessoas e animais. Ao reciclar eletrônicos, não só evitamos esses perigos, mas também conservamos recursos naturais preciosos e reduzimos a necessidade de extração de matérias-primas.
  </p>

  <h2>Junte-se a Nós</h2>
  <p>
    Cada ação conta, e você pode fazer a diferença! Seja reciclando seus dispositivos antigos conosco, participando de nossas campanhas de conscientização ou simplesmente espalhando a palavra sobre a importância da reciclagem eletrônica, sua contribuição é valiosa.
  </p>

  <p>
    Na ReciclaMais, estamos construindo um legado de sustentabilidade e inovação. Juntos, podemos transformar o lixo eletrônico em um recurso valioso e garantir um futuro mais limpo e saudável para todos. Venha fazer parte dessa revolução verde!
  </p>
</div>

      </div>

    </main>

  );
}

export default FaleConosco;
