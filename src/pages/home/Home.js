import React, {useEffect} from "react";
import Style from "./Home.module.scss";
import {FeatureItem} from "../../components";
import {IconChat, IconMoney, IconSecurity} from "../../assets";

/**
 * It renders a banner with a title and subtitle, and then renders a section with three feature items
 * @returns {JSX.Element} A React component that renders a banner and a section with 3 feature items.
 */
const Home = () => {
  useEffect(() => {
    document.title = "ArgentBank - Page d'accueil";
  }, []);

  return (
    <>
      {/* Banner */}
      <div role="banner" className={Style.hero}>
        <section className={Style.heroContent}>
          <h2 className="sr-only">Promoted Content</h2>
          <p className={Style.subtitle}>No fees.</p>
          <p className={Style.subtitle}>No minimum deposit.</p>
          <p className={Style.subtitle}>High interest rates.</p>
          <p className={Style.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>

      {/* Feature sections */}
      <section className={Style.features}>
        <h2 className="sr-only">Features</h2>
        <FeatureItem image={IconChat} title="You are our #1 priority">
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </FeatureItem>
        <FeatureItem image={IconMoney} title="More savings means higher rates">
          The more you save with us, the higher your interest rate will be!
        </FeatureItem>
        <FeatureItem image={IconSecurity} title="Security you can trust">
          We use top of the line encryption to make sure your data and money is
          always safe.
        </FeatureItem>
      </section>
    </>
  );
};

export default Home;
