import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section title="Łukasz Szmytka" body={<>Kilka słów o mnie</>} />
  </Container>
);

export default AuthorPage;