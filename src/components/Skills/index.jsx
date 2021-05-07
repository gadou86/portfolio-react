import "./style.css";

const Skills = () => {
  return (

    <div className="container-skills">
      <h1 className="title-section">Skills That pays the <span>Bills</span></h1>
      <div className="cards">
        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/htmlblue.svg`} alt=""/>
          <p className="skills-paragraph">Html</p>
        </div>

        <div className="card ">
        <img src={`${process.env.PUBLIC_URL}/css (1)blue.svg`} alt=""/>
          <p className="skills-paragraph">Css</p>
        </div>

        <div className="card ">
        <img src={`${process.env.PUBLIC_URL}/javascriptblue.svg`} alt=""/>
          <p className="skills-paragraph">Js</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/bootstrapblue.svg`} alt=""/>
          <p className="skills-paragraph">Bootstrap</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/reactblue.svg`} alt=""/>
          <p className="skills-paragraph">React</p>
        </div>

        <div className="card ">
            <img src={`${process.env.PUBLIC_URL}/rubyblue.svg`} alt=""/>
          <p className="skills-paragraph">Ruby</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/railsblue.svg`} alt=""/>
          <p className="skills-paragraph">Rails</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/mysqlblue.svg`} alt=""/>
          <p className="skills-paragraph">MySQL</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/figmablue.svg`} alt=""/>
          <p className="skills-paragraph">Figma</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/trello.svg`} alt=""/>
          <p className="skills-paragraph">Trello</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/herokublue.svg`} alt=""/>
          <p className="skills-paragraph">Heroku</p>
        </div>

        <div className="card ">
          <img src={`${process.env.PUBLIC_URL}/gitblue.svg`} alt=""/>
          <p className="skills-paragraph">Git</p>
        </div>
      </div>
    </div>
    
    // <div className="skills">
    //   <h1>Skills</h1>
    //   <div className="content">
    //     <div>
    //       <strong>Languages:</strong>
    //       <li>CSS3</li>
    //       <li>HTML5</li>
    //       <li>Node.js</li>
    //       <li>JavaScript</li>
    //     </div>
    //     <div>
    //       <strong>Libraries:</strong>
    //       <li>Bootstrap</li>
    //       <li>Express.js</li>
    //       <li>Material-ui</li>
    //       <li>React.js</li>
    //     </div>
    //     <div>
    //       <strong>Tools:</strong>
    //       <li>Eslint</li>
    //       <li>Webpack</li>
    //       <li>Chrome Dev</li>
    //       <li>Git & Github</li>
    //     </div>
    //     <div>
    //       <strong>Uint Test:</strong>
    //       <li>Jest</li>
    //       <li>Enzyme</li>
    //       <li>React-test</li>
    //       <li>SupperTest</li>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;