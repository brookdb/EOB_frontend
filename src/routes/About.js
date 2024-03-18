//libraries
import { useEffect } from "react";
import { motion } from "framer-motion";
//styles
import { useTheme } from "../context/ThemeContext";

//components
import Banner from "../components/Banner";
import Figure from "react-bootstrap/esm/Figure";

//data
import { API_BASE_URL } from "../Services";


const About = () => {
  const theme = useTheme();

  useEffect(() => {}, []);

  const style = {
    container: {
      minHeight: "100vh",
      background: theme.color.backgroundLight,
    },
    img: {
      width: "100%",
    },
    wrapper: {
      padding: "25px 60px",
      //background: theme.color.backgroundLight,
      //width: "75vw",
      //margin: "0 auto",
    },
    title: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.foreground,
      fontSize: theme.font.fontSize.title,
    },
    Subtitle: {
      fontFamily: theme.font.fontFamily.title,
      color: theme.color.foreground,
      fontSize: theme.font.fontSize.subtitle,
    },
    paragraph: {
      fontFamily: theme.font.fontFamily.paragraph,
      color: theme.color.cream,
      fontSize: theme.font.fontSize.paragraph2,
      textAlign: "justify",
      marginTop: "30px",
    },
    figure: {
      width: "40vw",
      borderRadius: "5px",
    },
  };
  return (
    <div style={style.container}>
      <div className="" style={style.wrapper}>
        <h1 style={style.title}>
          Unveiling the Mysteries of Magic, Alchemy, and Occult Symbolism
        </h1>
        <p style={style.paragraph}>
          We invite you to embark on a journey into the captivating realms of
          magic, alchemy, and symbolism. Our platform is a sacred space where
          ancient wisdom and modern curiosity converge, allowing you to explore
          the hidden depths of esoteric knowledge.
        </p>
      </div>
      <Figure>
        <Figure.Image
          style={style.figure}
          src={
            `${API_BASE_URL}/media/main/post/bee_and_key.jpeg`
          }
        />
      </Figure>
      <div className="" style={style.wrapper}>
        <h2 style={style.title}>Who We Are</h2>

        <p style={style.paragraph}>
          We are a passionate community of seekers, scholars, and practitioners,
          bound together by a shared fascination with the arcane. With years of
          experience in the mystical arts, our team is dedicated to unraveling
          the enigmatic threads that weave through human history and
          consciousness.
        </p>
      </div>
      <div className="" style={style.wrapper}>
        <h2 style={style.title}>What We Offer</h2>
        <ul>
          <li>
            <p style={style.paragraph}>
              <b>Insightful Articles:</b> Delve into our rich repository of
              articles that explore the myriad facets of magic, alchemy, and
              symbolism. From deciphering ancient texts to understanding the
              mystical significance of symbols, our content is a treasure trove
              of wisdom.
            </p>
          </li>
          <li>
            <p style={style.paragraph}>
              <b>Practical Guidance:</b> Whether you're a seasoned practitioner
              or a novice, our blog offers practical guidance, rituals, and
              techniques to deepen your connection with the mystical arts.
            </p>
          </li>
          <li>
            <p style={style.paragraph}>
              <b>Community:</b> Join our vibrant community of like-minded
              individuals who are passionate about the occult. Share your
              experiences, insights, and questions in our forums and connect
              with others on a similar journey.
            </p>
          </li>
        </ul>
      </div>
      <div className="" style={style.wrapper}>
        <h2 style={style.title}>Our Mission</h2>

        <p style={style.paragraph}>
          At Encanto Occulto, our mission is to demystify the occult and make
          its wisdom accessible to all. We believe that knowledge is power, and
          by understanding the profound symbolism, ancient rituals, and
          transformative power of magic and alchemy, you can unlock your inner
          potential and embark on a path of personal growth and enlightenment.
        </p>
      </div>
      <div className="" style={style.wrapper}>
        <h2 style={style.title}>Join Us</h2>

        <p style={style.paragraph}>
          Whether you're a seasoned practitioner, a curious novice, or simply
          someone intrigued by the mystical, we welcome you to join us on this
          extraordinary journey. Together, let's uncover the secrets, unravel
          the mysteries, and embrace the enchantment of the occult. Begin your
          exploration today and let the magic of Encanto Occulto awaken your
          spirit.
        </p>
      </div>
    </div>
  );
};
export default About;
