import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Łukasz Szmytka"
      body={
        <>
          <p>
            Pochodzę z Koninia, niedużej miejscowości położonej w centralnej
            Polsce. Mieszkam w domuku jednorodzinnym, z dala od miejskiego
            zgiełku, z moją cudowną rodzinką.
          </p>
          <p>
            Obecnie prowadzę swoją firmę, zajmuję się serwisem IT: sieci
            komputerowe, kasy fiskalne, terminale płatnicze, systemy kierowania
            ruchem itp. Lubię pracę, którą wykonuję, daje mi ona dużo
            satysfakcji. Jedynym minusem tej pracy jest to, że zabiera dużo
            czasu, przez co brakuje go na inne czynności.
          </p>
          <p>
            Kiedy już znajdę trochę wolnego czasu, lubię oddać się takim
            przyjemnościom jak np: wędkowanie, gry komputerowe lub grillowanie
            ze znajomymi. Całą rodzinką lubimy podróżować. Jesteśmy ciepłolubni,
            więc głównie odwiedzamy ciepłe kraje, preferujemy plażing, smażing,
            sporty wodne, zwiedzanie zabytków czy chodzenie po górach.
          </p>
        </>
      }
    />
  </Container>
);

export default AuthorPage;
