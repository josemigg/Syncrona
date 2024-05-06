import MainWrapper from "../wrappers/MainWrapper.tsx";
import "../style.scss";
import "../typography.scss";
import "../units.scss";

const Patterns = () => {
  return (
    <MainWrapper>
      <div>
        <div>
          <p className="livvic-regular Full-width margin-bottom-v4 Livvic-Tittle">
            This is Livvic
          </p>
          <p className="livvic-regular margin-bottom-v4">
            Livvic is the primary brand typeface for Syncrona. An elegant serif
            infused with our values, this headline face projects
            trustworthiness, optimism, and sincerity.
          </p>
        </div>

        <div>
          <p className="Patrick-hand-Tittle patrick-hand">
            Patrick-hand is our supporting font
          </p>
          <p className="patrick-hand margin-bottom-v4">
            Patrick is our supporting font, carefully chosen to support Means in
            more functional moments.
          </p>
        </div>
        <div>
          <h3 className="livvic-regular">Type Scale</h3>
          <p className="livvic-regular margin-bottom-v4">
            We follow a 2em baseline grid for achieving a vertical rhythm on all
            block-level elements.
          </p>
        </div>

        <div>
          <h1 className="livvic-regular  margin-bottom-v0">Lorem Ipmsum</h1>
          <h2 className="livvic-regular">Lorem Ipmsum</h2>
          <h3 className="livvic-regular">Lorem Ipmsum</h3>
          <h4 className="livvic-regular">Lorem Ipmsum</h4>
          <h5 className="livvic-regular">Lorem Ipmsum</h5>
          <h6 className="livvic-regular">Lorem Ipmsum</h6>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Patterns;
