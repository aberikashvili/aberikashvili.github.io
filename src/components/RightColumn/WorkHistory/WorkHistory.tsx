import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './WorkHistory.css';

const WorkHistory = () => {
  return (
    <Row>
      <Fieldset legend="Work History" isRight={true}>
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Dec 2022 - Jan 2023</b>
              </td>
              <td valign="top">
                <div className="position-title">Full-Stack Engineer (Angular, NestJs)</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://upwork.com/" target="blank">
                    Upwork.com
                  </a>{' '}
                  (Remote)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Auth Microservice</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To implement NestJs microservice for auth</li>
                    <li>To implement JWT authentication using HTTP Api</li>
                    <li>To implement Swagger UI</li>
                    <li>To implement token invalidation functionality using RabbitMQ</li>
                    <li>To setup Mikro-Orm entities and Migrations with PostgreSQL</li>
                    <li>
                      To integrate Angular + Firebase app with auth microservice (HTTP + RabbitMQ)
                    </li>
                  </ul>
                </p>
                <p className="project-info">
                  <b>Stack:</b>
                  <span className="tag">Nest.js</span>
                  <span className="tag">Mikro-orm</span>
                  <span className="tag">passport</span>
                  <span className="tag">JWT</span>
                  <span className="tag">Swagger</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">RabbitMQ</span>
                  <span className="tag">Angular</span>
                  <span className="tag">Firebase</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Apr 2021 - Dec 2022</b>
              </td>
              <td valign="top">
                <div className="position-title">Software Engineer (Angular)</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://valor-software.com/" target="blank">
                    Valor Software
                  </a>{' '}
                  (Remote)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">StudyTube/ultra</span>
                  <span className="tag">StudyTube/LMS</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>
                      To implement separated reusable components in ultra library according to new
                      design. Ultra library is private component library, based on angular
                    </li>
                    <li>
                      To re-implement LMS ui using new ultra library components. LMS is Learning
                      Management System, web platform for online learning materials, like videos,
                      documents etc.
                    </li>
                    <li>To collaborate with StudyTube team</li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">SAP/Fundamental-NGX</span>
                  <span className="tag">SAP/Fundamental-Styles</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To Implement new features into Fundamental NGX / Styles library</li>
                    <li>To collaborate with external teams and fix defects they require</li>
                    <li>
                      To Do the defect hunting and constantly figure out regressions, then fix them
                    </li>
                    <li>To implement accessibility functionality</li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Sep 2017 - Apr 2021</b>
              </td>
              <td valign="top">
                <div className="position-title">Software Engineer III</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://crossover.com/" target="blank">
                    Crossover
                  </a>{' '}
                  For Work (Remote)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>

                  <span className="tag">Kayako Classic</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To Do the defect RCA (Root Cause Analysis)</li>
                    <li>To Implement the fix of defect using PHP 7, MySQL, JS</li>
                    <li>To write automated E2E test for the fix using Gherkin</li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">CX Monitor</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>
                      To update legacy software UI components from Adobe Flash to Javascript
                      (ReactJS)
                    </li>
                    <li>
                      To update legacy software UI charts from Adobe Flash to Fusion Charts (Js)
                    </li>
                    <li>To update legacy software UI graphs from Adobe Flash to D3.js</li>
                    <li>
                      To refactor old legacy Ext.js code, make it compatible with eslint rules
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Acorn PA5G/AAA</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>
                      To update legacy software UI from Microsoft Silverlight to Angular 8 /
                      Material / Scss / NGXS
                    </li>
                    <li>
                      To update legacy software UI complex grid components from Silverlight to
                      Ag-Grid
                    </li>
                    <li>
                      To make new angular software compatible with legacy .Net RIA Services api
                    </li>
                    <li>To test Angular software with Karma / Jasmine</li>
                    <li>
                      To do a regular code reviews for non angular expert team members PR's and
                      coach them how to achieve better result
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">AES CIS</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To update legacy software UI from CSS to SCSS</li>
                    <li>To update legacy software UI from HTML to HTML 5</li>
                    <li>
                      To make old (only IE compatible) software, compatible with modern browsers
                      (JS)
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Volt Delta</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To migrate code from Dimmension to GitHub repositories</li>
                    <li>To prepare Development Environment on local machine &amp; Build</li>
                    <li>To prepare Development Environment in AWS EC2's &amp; Build</li>
                    <li>To migrate issues from Dimmensions to our Centralized Jira</li>
                    <li>To find out all dependencies &amp; Migrate</li>
                    <li>To prepare CI/CD pipelines in Jenkins</li>
                    <li>To review E2E TC's &amp; Scenarios for QA team</li>
                    <li>To fetch last code changes and prepare documents for Unit Testing team</li>
                    <li>
                      To close the current defect backlog and deliver fixes for NodeJs services
                    </li>
                    <li>
                      To close the current test backlog and deliver automated tests for NodeJs
                      services
                    </li>
                    <li>
                      To close the current feature backlog and deliver new features for NodeJs
                      services
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Mobilogy</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To inspect and investigate UI of the incoming projects</li>
                    <li>To prepare Development Environment on local machine &amp; Build</li>
                    <li>
                      To prepare Development Environment in Cloud (DevSpaces, Docker) &amp; Build
                    </li>
                    <li>To migrate Git repositories</li>
                    <li>
                      To migrate issues from Jira TFS, Dimmension etc. to our Centralized Jira
                    </li>
                    <li>To find out all dependencies &amp; Migrate</li>
                    <li>To prepare CI/CD pipelines in Jenkins</li>
                    <li>
                      To close the current defect backlog and deliver fixes for NodeJs services
                    </li>
                    <li>
                      To close the current feature backlog and deliver new features for NodeJs
                      services
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">CRM</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To investigate legacy application and expose necessary Api endpoints</li>
                    <li>To reskin legacy CRM application UI using Angular 4</li>
                    <li>To write Unit Tests using Karma, Jasmine</li>
                    <li>To integrate Angular 4 UI with .Net Core based REST Api</li>
                    <li>To implement Swagger mocks</li>
                    <li>To write E2E Tests using Protractor</li>
                    <li>To run E2E Tests against several browsers using Browserstack</li>
                  </ul>
                </p>
              </td>
            </tr>
            <tr>
              <td valign="top"></td>
              <td valign="top">
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">LyrisHQ / Campaign Manager</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To investigate legacy application and expose necessary Api endpoints</li>
                    <li>To reskin legacy Lyris application UI using Angular 5</li>
                    <li>To write Unit Tests using Karma, Jasmine</li>
                    <li>To integrate Angular 5 UI with Java / Spring based REST Api</li>
                    <li>To write E2E Tests using Protractor</li>
                    <li>To run E2E Tests against several browsers using Browserstack</li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Jun 2016 - Aug 2017</b>
              </td>
              <td valign="top">
                <div className="position-title">Senior Software Developer</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://dev.gpndata.com/" target="blank">
                    GPN DATA Group International
                  </a>{' '}
                  (On-Site)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">PSP Gateway (Payment Service Provider Gateway)</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To maintain legacy PSP application using PHP 7 &amp; MySQL</li>
                    <li>To develop internal softwares using .Net Core &amp; Angular 2</li>
                    <li>To integrate Banks into PSP system</li>
                    <li>To test and find out problems in PSP system if there's any</li>
                    <li>To simulate payment requests to each Bank for testing purpose</li>
                    <li>
                      To integrate SEPAExpress (SEPA - Single Euro Payment Area) payment method into
                      PSP system
                    </li>
                    <li>
                      To create validations for accepting Visa, MasterCard transactions and Bank
                      transfers
                    </li>
                    <li>To integrate external services like Ethoca into PSP system</li>
                    <li>To maintain anti Fraud logic of PSP system</li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Sep 2013 - Jun 2016</b>
              </td>
              <td valign="top">
                <div className="position-title">Senior Software Developer</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://steady-logic.com" target="blank">
                    Steady Logic Llc
                  </a>{' '}
                  (On-Site)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Sportsbook</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>
                      To create Sportsbook Administrative Tool's UI using AngularJs, later Angular 2
                    </li>
                    <li>To implement Presentation Layer of Back-End using ASP.NET MVC</li>
                    <li>
                      To implement WebSocket based modules for managing Live events of several
                      sports: Soccer, basketball, Tennis etc.
                    </li>
                    <li>To implement BLL (Business Logic Layer)</li>
                    <li>To implement DAL (Data Access Layer)</li>
                    <li>
                      To implement Database Layer using Ms SQL Server, create stored procedures,
                      functions etc.
                    </li>
                    <li>
                      To participate in planning of architecture design, changing design features
                      and improve stability of software
                    </li>
                    <li>To implement Micro Services using C# &amp; RabbitMQ</li>
                    <li>To implement Cache server using Redis</li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>Jun 2011 - Sep 2013</b>
              </td>
              <td valign="top">
                <div className="position-title">Web Developer</div>
                <div className="company-title">
                  At{' '}
                  <a href="https://solostudio.ge" target="blank">
                    Solo Group Ltd
                  </a>{' '}
                  (On-Site)
                </div>
                <p className="project-info">
                  <b>Project(s): </b>
                  <span className="tag">Website Development</span>
                </p>
                <p>
                  <div className="roles-and-responsibilities-title">
                    Roles &amp; Responsibilities:
                  </div>
                  <ul className="roles">
                    <li>To create Web Site Markup using HTML 5 &amp; CSS 3</li>
                    <li>To create Web Site Front-End using Javascript, jQuery</li>
                    <li>To create Web Site Back-End using PHP 5 or ASP.NET MVC</li>
                    <li>To create Web Site Database using MySQL or Ms SQL Server </li>
                    <li>
                      To create Web based software for Restaurants, Delivery companies etc using PHP
                      5 or ASP.NET, HTML 5, CSS 3, jQuery
                    </li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Fieldset>
    </Row>
  );
};

export default WorkHistory;
