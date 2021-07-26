import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Articles</span>
              <h3>Recent Posts</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/1.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Quentin P Young III</a>
                    <span>TBD</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  Launching with Amplify
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                     
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Quentin P Young III</a>
                            <span>AUG 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Launching with Amplify
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Get your application launched in minutes with the help of AWS Amplify.
                          </p>
                          <p>

                            AWS Amplify is a full-stack, serverless  application hosting console. It provides git-based workflow and the ability to get your web or mobile application up and hosted in no time. Visit the AWS Amplify documentation for a more thorough dive : https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html.
                          </p>
                          <p>
                            As a React developer, I turned to Amplify to launch my first react application.  I was once again impressed with the AWS console's user-friendly design and implementation. Nothing is stopping a junior developer from launching their portfolio with Amplify. Do not be intimidated by the technical jargon if you are new to development.  In the rest of the post we will outline how you can get your first application launched with AWS Amplify.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              AWS Amplify Console is the control center for fullstack web and mobile application deployments in AWS
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            You'll Need:
                            <br></br>
                            a. AWS Account
                            <br></br>
                            b. React application
                            <br></br>
                            c. Github Account (or other repository service)
                            <br></br>
                            d. Repo containing application files
                            <br></br>
                          </p>
                          <p>
                            <ol>
                              <li>The first thing we will do is navigate to the AWS Management Console and locate our Amplify portal.</li>
                              <p>a) Services Dropdown --> Front End Web & Mobile --> AWS Amplify
                                <br></br>
                                b) Once selected, We are greeted with All Apps that we have launched with Amplify. If this is your first Amplify app, it should be blank.</p>
                              <div className="image">
                                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(assets/img/news/first/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              <li>Select Connect App</li>
                              <li>In this example, our application is hosted in a GitHub repo. Select Github and Continue</li>
                              <li>Here you may need to connect your Github account to give AWS it's required permissions. Once connected, select your repository that contains your application.</li>
                              <div className="image">
                                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(assets/img/news/first/2.jpg)",
                                  }}
                                ></div>
                              </div>
                              <li>Select the branch you wish to deploy and then Next</li>
                              <p>
                                a) This will likely be your main branch. In a future post we will look at how to use development branches within amplify.
                              </p>
                              <li>Name your Application</li>
                              <p>
                                a)The default build and test settings should be sufficient but can be modified.
                              </p>
                              <li>Select Next</li>
                              <li>We are finally greeted with the Review Page.  Once you have looked things over, Save and Deploy!</li>
                              <li>AWS will do it's thing. You will be able to monitor it's process through the Provision -- Build -- Deploy -- Verify graphic displayed.</li>
                              <p>
                                a) When finished, all 4 stops will have green check marks.
                              </p>
                              <div className="image">
                                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage: "url(assets/img/news/first/3.jpg)",
                                  }}
                                ></div>
                              </div>
                              <li>Congratulations! You have successfully deployed your first application with AWS Amplify. </li>
                              <p>
                                a) You can view the site by going to Amplify --> All Apps --> Application you wish to view --> Selecting the link underneath your applications image.
                              </p>
                            </ol>
                          </p>
                          <p>

                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">TBA</a>
                    <span>TBD</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  Coming Soon
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalTwo}>
                    <span>Read More</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">TBA</a>
                            <span>TBD</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Coming Soon
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">

                          </p>
                          <p>

                          </p>
                          <p>

                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>

                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">TBA</a>
                    <span>TBD</span>
                  </p>
                </div>

                <h3 className="title" onClick={toggleModalThree}>
                  Coming Soon
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">TBA</a>
                            <span>TBD</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Coming Soon
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">

                          </p>
                          <p>

                          </p>
                          <p>

                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quore"
                              />
                            </div>
                            <p>

                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">TBA</a>
                    <span>TBD</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                  Coming Soon
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/comingsoon.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">TBA</a>
                            <span>TBD</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Coming Soon
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">

                          </p>
                          <p>

                          </p>
                          <p>

                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>

                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
