import "./css/main.css";
import "./css/App.css";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupsIcon from "@mui/icons-material/Group";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useState } from "react";
import emailjs from "emailjs-com";
import { saveAs } from "file-saver";

function App() {
  const [Current, setCurrent] = useState("home");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("home");

  const sendInfo = (e) => {
    e.preventDefault();

    var templateParams = {
      name: Name,
      message:
        Name +
        "  sent you a message:  subject:  " +
        Subject +
        "   message:" +
        Message +
        "  Email:  " +
        email +
        "   phone: " +
        Phone +
        "",
    };

    emailjs
      .send(
        "service_p3txvju",
        "template_5qswlic",
        templateParams,
        "user_ehNAUiapUdZYE1rXYQRYj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("message sent!");
  };

  function isEmail(email) {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
  }

  function jumpToSection(currentSection) {
    setCurrent(currentSection);
    document.getElementById(currentSection).scrollIntoView();
  }

  return (
    <div className="App">
      <section id="home">
        <header className="header">
          <div className="black_background">
            <div className="container">
              <nav className="cv_nav_header">
                <div className="header_logo">
                  <img
                    src="https://res.cloudinary.com/dsrgpqnyv/image/upload/v1634558283/Transparent_Logo_o5hjnp.png"
                    style={{ width: "15rem", height: "15rem" }}
                    alt=""
                  />
                </div>
                <div className="header_menu">
                  <ul className="menu_options">
                    <li
                      className="menu_item"
                      onClick={() => jumpToSection("home")}
                    >
                      {Current === "home" ? (
                        <div className="item">
                          <span className="current">Home</span>
                        </div>
                      ) : (
                        <div className="item">Home</div>
                      )}
                    </li>
                    <li
                      className="menu_item"
                      onClick={() => jumpToSection("about")}
                    >
                      {Current === "about" ? (
                        <div className="item">
                          <span className="current">About</span>
                        </div>
                      ) : (
                        <div className="item">About</div>
                      )}
                    </li>
                    <li
                      className="menu_item"
                      onClick={() => jumpToSection("projects")}
                    >
                      {Current === "projects" ? (
                        <div className="item">
                          <span className="current">Projects</span>
                        </div>
                      ) : (
                        <div className="item">Projects</div>
                      )}
                    </li>
                    <li
                      className="menu_item"
                      onClick={() => jumpToSection("contact")}
                    >
                      {Current === "contact" ? (
                        <div className="item">
                          <span className="current">Contact</span>
                        </div>
                      ) : (
                        <div className="item">Contact</div>
                      )}
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="my_info_content">
                <h1> I Am Lizzie Lavi , A Web Developer</h1>
                <p className="paragraph">
                  and I'm looking for my next job opportunity
                </p>
                <a href="/files/lizzie_lavi_CV.pdf" target="_blank" download>
                  <button className="resume_download">
                    {" "}
                    Download My Resume{" "}
                  </button>
                </a>

                <ul className="links">
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/lizzieLavi"
                    >
                      <IconButton
                        disableRipple
                        style={{
                          color: "white",
                          padding: "0.8rem",
                          paddingRight: "0",
                        }}
                      >
                        <GitHubIcon style={{ fontSize: "4rem" }} />
                      </IconButton>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/lizzie-olishuk-086b7a104"
                    >
                      <IconButton
                        disableRipple
                        style={{
                          color: "white",
                          padding: "0.8rem",
                          paddingRight: "0",
                        }}
                      >
                        <LinkedInIcon style={{ fontSize: "4rem" }} />
                      </IconButton>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </section>

      <section id="about">
        <div className="section_title">About Me</div>
        <div className="title_bottom_line"></div>
        <p className="paragraph" style={{ color: "var(--light-color)" }}>
          {" "}
          let me tell you a little bit about myself
        </p>
        <div className="about_me">
          <div className="about_me_img">
            <img
              alt=""
              className="my_img"
              src="https://res.cloudinary.com/dsrgpqnyv/image/upload/v1634464730/ac7faa45-1c7d-4f0b-b823-f860fb918ece_lvgunr.jpg"
            />
          </div>
          <div className="about_me_content">
            <p className="my_words">
              Hey :) my name is Lizzie Lavi, A web Developer. <br />
              I dedicated the last year to learn everything I can about web
              development. <br />
              from html, to css, react, node.js, REST api, mongoDB, JWT,
              Express, and more..
              <br />
              I created many small projects, two main projects, And one more
              project is on the way.
              <br />
              I have A lot of motivation to learn and advance.
              <br />
            </p>
          </div>
        </div>

        <div className="characters">
          <h2 className="section_title" style={{ fontSize: "3rem" }}>
            {" "}
            My Strengths
          </h2>
          <div className="title_bottom_line"></div>

          <div className="process">
            <div className="quality">
              <div className="icon">
                <SelfImprovementIcon />
              </div>
              <div className="quality_txt">
                <h3 className="quality_title">self improvement</h3>
                <p style={{ fontSize: "1.8rem" }}>
                  {" "}
                  I always strive to get better, And I'm not afraid of learning
                  new things.
                </p>
              </div>
            </div>
            <div className="quality">
              <div className="icon">
                <PersonSearchIcon />
              </div>
              <div className="quality_txt">
                <h3 className="quality_title">self learner</h3>
                <p style={{ fontSize: "1.8rem" }}>
                  {" "}
                  Google, Udemy and Stack Overflow are good friends, <br />
                  And I use them to improve my knowledge. :){" "}
                </p>
              </div>
            </div>
            <div className="quality">
              <div className="icon">
                <GroupsIcon />
              </div>
              <div className="quality_txt">
                <h3 className="quality_title">team player</h3>
                <p style={{ fontSize: "1.8rem" }}>
                  {" "}
                  I am a people's person. I enjoy contributing to my team and
                  learning from them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills_con">
          <h2 className="section_title"> skills</h2>
          <div className="title_bottom_line"></div>
          <p className="paragraph" style={{ color: "var(--light-color)" }}>
            {" "}
            My technical knowledge
          </p>
          <p className="skill_title">HTML</p>
          <div className="skills_container">
            <div className="skill html">90%</div>
          </div>

          <p className="skill_title">CSS</p>
          <div className="skills_container">
            <div className="skill css">85%</div>
          </div>

          <p className="skill_title">React</p>
          <div className="skills_container">
            <div className="skill react">80%</div>
          </div>

          <p className="skill_title">Node.js</p>
          <div className="skills_container">
            <div className="skill node">85%</div>
          </div>

          <p className="skill_title">Express</p>
          <div className="skills_container">
            <div className="skill express">75%</div>
          </div>

          <p className="skill_title">Mongo DB</p>
          <div className="skills_container">
            <div className="skill mongo">85%</div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section_title">Projects</h2>
        <div className="title_bottom_line"></div>
        <p className="paragraph" style={{ color: "var(--light-color)" }}>
          {" "}
          My most recent projects
        </p>
        <div className="projects_show">
          <div className="project">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://movieland-management.netlify.app/"
            >
              <div className="project_img">
                <img
                  src="https://res.cloudinary.com/dsrgpqnyv/image/upload/v1635149063/movies2_pf4sch.png"
                  alt=""
                />
              </div>
              <div class="project_txt">
                <div className="project_txt_wrap">
                  <h2 className="project_title"> Movie-Land</h2>
                  <p className="project_txt_about">
                    A cinema Website for employees,
                    <br />
                    where they can manage cinema movies,users and subscriptions.
                    <br />
                    created with MERN Stack technology.
                    <br />
                    log in with: <br />
                    User Name: ADMIN <br />
                    Password: 12345 <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://movieland-management.netlify.app/"
                    >
                      {" "}
                      visit website <br />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://messages-app1.netlify.app/"
                    >
                      view code
                    </a>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="project">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://messages-app1.netlify.app/"
            >
              <div className="project_img">
                <img
                  src="https://res.cloudinary.com/dsrgpqnyv/image/upload/v1635149256/groups_i6drbl.png"
                  alt=""
                />
              </div>
              <div class="project_txt">
                <div className="project_txt_wrap">
                  <h2 className="project_title"> Messages-App</h2>
                  <p className="project_txt_about">
                    A Whatsapp Web clone project i created. <br /> i used MERN
                    Stack to create this project.
                    <br /> you can create a new acount, or see existing example
                    with this details: <br />
                    User Name: mercury <br />
                    Password: 111 <br />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://messages-app1.netlify.app/"
                    >
                      {" "}
                      visit website <br />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://messages-app1.netlify.app/"
                    >
                      view code
                    </a>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact_padding">
          <div className="section_title">Contact Me</div>
          <div className="title_bottom_line"></div>
          <p className="paragraph" style={{ color: "var(--light-color)" }}>
            Here is how you can reach me
          </p>
          <form onSubmit={sendInfo}>
            <div className="text_fields">
              <input
                required
                type="text"
                className="text_input name_input"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="text_input email_input"
                placeholder="Email-Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="text_input subject_input"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
              <input
                type="text"
                className="text_input phone_input"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <textarea
              required
              type="text"
              className="text_input message_input"
              placeholder="Enter Message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="send_button">
              Submit
            </button>
          </form>
        </div>
        <div className="contact_info">
          <div className="contact_section">
            <EmailIcon style={{ fontSize: "5rem", color: "#fff" }} />
            <h3 className="contact_title">Email</h3>
            <p className="contact_paragraph">lizzie.olishuk1@gmail.com</p>
          </div>
          <div className="contact_section">
            <PhoneAndroidIcon style={{ fontSize: "5rem", color: "#fff" }} />
            <h3 className="contact_title">Phone</h3>
            <p className="contact_paragraph">0542538331</p>
          </div>
          <div className="contact_section">
            <LinkedInIcon style={{ fontSize: "5rem", color: "#fff" }} />
            <h3 className="contact_title">LinkedIn</h3>
            <p className="contact_paragraph">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/lizzie-olishuk-086b7a104/"
              >
                To My LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer id="main_footer">
        <div>
          <p className="footer_contant">
            {" "}
            copyright &copy; 2021 All Rights Reserved
          </p>
        </div>
        <div className="icons_to">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lizzieLavi"
          >
            <GitHubIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "var(--medium-color)",
                marginRight: "2rem",
              }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/lizzie-olishuk-086b7a104"
          >
            {" "}
            <LinkedInIcon
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "var(--medium-color)",
                marginRight: "3rem",
              }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
