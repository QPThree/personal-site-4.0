import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Javascript</Tab>
                <Tab>React</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">
                    <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/8.jpeg">
                              <img
                                src="assets/img/portfolio/8.jpeg"
                                alt="Skikend"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/7.jpg">
                              <img
                                src="assets/img/portfolio/7.jpg"
                                alt="Book-Self"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/6.jpg">
                              <img
                                src="assets/img/portfolio/6.jpg"
                                alt="City-Explorer"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Fantascribe"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Store Front"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END SOUNDCLOUD */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Gitstop"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/3.jpg"
                                alt="Gitstop"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END Gitstop */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="Store Front"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END Salmon Cookies */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/5.jpg"
                                alt="Fantascribe"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END Fantascribe */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END Javscript GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                    <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/8.jpeg">
                              <img
                                src="assets/img/portfolio/8.jpeg"
                                alt="Skikend"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/7.jpg">
                              <img
                                src="assets/img/portfolio/7.jpg"
                                alt="Book-Self"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/6.jpg">
                              <img
                                src="assets/img/portfolio/6.jpg"
                                alt="City Explorer"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/2.jpg"
                                alt="Portfolio"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END React */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END WEBSITE GALLERY */}
                </SRLWrapper>
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
