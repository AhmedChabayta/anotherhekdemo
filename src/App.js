// styles
import {
  Header,
  HeaderTitle,
  HeaderText,
  SupportContainer,
  SupportText,
} from "./components/StyledElements/HeaderElements";
import {
  ServicesSection,
  ServicesTitle,
  ServicesText,
  ServicesSub,
  CanvasContain,
} from "./components/StyledElements/ServicesElements";
import {
  MethodsSection,
  MethodTextContainer,
  MethodTitle,
  MethodText,
  MethodSubtitle,
  MandalaContainer,
} from "./components/StyledElements/MethodsElements";
import {
  PackagesSection,
  PackagesTextContainer,
  PackagesSubtitle,
  PackagesTitle,
  PackagesText,
  Modules,
} from "./components/StyledElements/PackagesElements";
import {
  TeamSection,
  TeamTextContainer,
  TeamSubtitle,
  TeamTitle,
  TeamText,
} from "./components/StyledElements/TeamElements";
// reusable components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// main ONLY components
import CanvasBox from "./components/MainComponents/CanvasBox";
import Model from "./components/MainComponents/Model";
import TheTeam from "./components/MainComponents/TheTeam";
// css
import "./globals.css";
// images or assets
import Arrow from "./assets/arrow.svg";
import mandala from "./assets/mandala.png";
// data
import modulesData from "./Data/packagesData";
import servicesData from "./Data/servicesData";
import teamData from "./Data/teamData";

function App(props) {
  const canvasBox = servicesData.map((feature) => {
    return (
      <CanvasBox
        key={feature.id}
        color={feature.color}
        description={feature.description}
        title={feature.title}
      />
    );
  });

  const modelData = modulesData.map((pack) => {
    return (
      <Model
        key={pack.id}
        description={pack.description}
        title={pack.title}
        subtitle={pack.subtitle}
        img={pack.img}
      />
    );
  });
  const membersData = teamData.map((member) => {
    return (
      <TheTeam
        key={member.id}
        description={member.description}
        title={member.title}
        name={member.name}
        img={member.img}
      />
    );
  });

  return (
    <div>
      <>
        <Navbar />
      </>
      <Header>
        <HeaderTitle>We are your one-stop-shop multi-disciplinary creative agency.</HeaderTitle>
        <HeaderText>
          Changes in the last year have created impacts that are rapidly affecting businesses &
          individuals. Digital growth has become an essential strategy for the future.{" "}
        </HeaderText>
        <SupportContainer>
          <SupportText>Find our how we can support you</SupportText>
          <img style={{ marginLeft: "1em", width: "1.5em" }} src={Arrow} alt='' />
        </SupportContainer>
      </Header>
      <ServicesSection>
        <ServicesSub>OUR SERVICES</ServicesSub>
        <ServicesTitle>WHAT WE DO</ServicesTitle>
        <ServicesText>
          Changes in the last year have created impacts that are rapidly affecting businesses &
          individuals.
        </ServicesText>
        <CanvasContain>{canvasBox}</CanvasContain>
      </ServicesSection>
      <MethodsSection>
        <MethodTextContainer>
          <MethodSubtitle>OUR METHOD</MethodSubtitle>
          <MethodTitle>HOW WE THINK</MethodTitle>
          <MethodText>
            Our 7-step process is curated to build timeless brands and concepts. It is intended to
            identify the most urgent needs and optimized to deliver concepts quickly & efficiently.
            The process starts with a comprehensive questionnaire that introduces the business and
            potential opportunities.
          </MethodText>
        </MethodTextContainer>
        <MandalaContainer>
          <img width='100%' src={mandala} alt='' />
        </MandalaContainer>
      </MethodsSection>
      <PackagesSection>
        <PackagesTextContainer>
          <PackagesSubtitle>OUR PACKAGES</PackagesSubtitle>
          <PackagesTitle>THE MODULES</PackagesTitle>
          <PackagesText>
            Changes in the last year have created impacts that are rapidly affecting businesses &
            individuals.
          </PackagesText>
        </PackagesTextContainer>
        <Modules>{modelData}</Modules>
      </PackagesSection>
      <TeamSection>
        <TeamTextContainer>
          <TeamSubtitle>FOUNDERS & MANAGING DIRECTORS</TeamSubtitle>
          <TeamTitle>THE TEAM</TeamTitle>
          <TeamText>Our multidisciplinary team will</TeamText>
        </TeamTextContainer>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{membersData}</div>
      </TeamSection>
      <Footer />
    </div>
  );
}

export default App;
