import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//components
import {Layout, Header, Content, Drawer, Footer, FooterSection, FooterLinkList, Navigation} from 'react-mdl';
import HeaderApp from './header';
import About from './about';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div className="App" style={{minHeight:'100vh'}}>
          <BrowserRouter>
          <Layout fixedHeader >
              <Drawer title="side bar">
                  here we go
              </Drawer>
              <Header title="Skynet">

                      <Navigation>
                          <Link to="/about">About</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>

              </Header>
              <Content>

                    <div>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                    </div>

              </Content>
              <Footer size="mini">
                  <FooterSection type="left" logo="Title">
                      <FooterLinkList>
                          <a href="#">Help</a>
                          <a href="#">Privacy & Terms</a>
                      </FooterLinkList>
                      <Route path='/about' render={() => (<span>I am roundabout</span>)}/>
                  </FooterSection>
              </Footer>

          </Layout>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
