import EducationItemEntry from '../models/EducationItemEntry';
import PersonalInfoItemEntry from '../models/PersonalInfoItemEntry';
import ProjectItemEntry from '../models/ProjectItemEntry';
import SkillItemEntry from '../models/SkillItemEntry';
import TrainCertEntry from '../models/TrainCertEntry';
import WorkHistoryItemEntry from '../models/WorkHistoryItemEntry';
import IMAGE_BASE_64 from './image-base-64';
import { SkillSet } from './skills';

const DUMMY_DATA = {
  profile: {
    imageUri: IMAGE_BASE_64,
    fullName: 'Arkadi Berikashvili',
    role: 'Full-Stack Developer • Tech Lead • Software Architect'
  },
  personalInfo: {
    location: new PersonalInfoItemEntry('fa fa-map-marker-alt', 'Tbilisi, Georgia'),
    address: new PersonalInfoItemEntry('fa fa-home', 'Didi Digomi, Giorgi Brtskinvale Street'),
    born: new PersonalInfoItemEntry('fa fa-baby', '4 November, 1990'),
    skype: new PersonalInfoItemEntry('fab fa-skype', 'superhornet111', 'skype:superhornet111?call'),
    mobile: new PersonalInfoItemEntry('fa fa-mobile', '+ 995 598 677 567'),
    email: new PersonalInfoItemEntry(
      'fa fa-envelope',
      'arkadi.berikashvili90@gmail.com',
      'mailto:arkadi.berikashvili90@gmail.com'
    ),
    github: new PersonalInfoItemEntry(
      'fab fa-github',
      '@aberikashvili',
      'https://github.com/aberikashvili'
    ),
    linkedin: new PersonalInfoItemEntry(
      'fab fa-linkedin',
      'https://www.linkedin.com/in/arkadi-berikashvili-7496516b/',
      'https://www.linkedin.com/in/arkadi-berikashvili-7496516b/'
    ),
    // website: new PersonalInfoItemEntry('fa fa-globe', 'Personal website', 'http://arca-d.pro/')
    website: new PersonalInfoItemEntry(
      'fab fa-medium',
      '@arkadi.berikashvili',
      'https://medium.com/@arkadi.berikashvili'
    )
  },
  skills: {
    softSkills: SkillSet([
      'leadership',
      'time-management',
      'problem-solving',
      'commubnication',
      'teamwork',
      'critical-thinking',
      'collaboration',
      'management',
      'learning',
      'project-management',
      'flexibility'
    ]),
    hardSkills: {
      cloud: SkillSet([
        'aws-iam',
        'aws-ec2',
        'aws-ami',
        'aws-ebs',
        'aws-lambda',
        'aws-api-gateway',
        'aws-rds',
        'aws-s3',
        'aws-cloudfront',
        'aws-cognito',
        'aws-route53',
        'aws-dynamodb',
        'aws-cloudwatch',
        'aws-cli',
        'aws-sdk',
        'aws-efs',
        'aws-elb',
        'firebase',
        'digitalocean',
        'netlify'
      ]),
      frontEnd: SkillSet([
        'angular',
        'typescript',
        'javascript',
        'angular-material',
        'nx',
        'rxjs',
        'react-native',
        'react',
        'redux',
        'jest',
        'karma',
        'jasmine',
        'agGrid',
        'ngxs',
        'ngrx-store',
        'scss',
        'unit-testing',
        'angular-e2e',
        'angularjs',
        'twitter-bootstrap',
        'protractor',
        'integration-testing',
        'extjs',
        'jquery',
        'cypress'
      ]),
      backEnd: SkillSet([
        'csharp',
        'asp.net core',
        'nodejs',
        'nestjs',
        'mikro-orm',
        'unit-testing',
        'swagger',
        'efcore',
        'ado.net',
        'web api / rest api',
        'mysql',
        'postgresql',
        'passport',
        'jwt',
        'integration-testing',
        'php',
        'tsql',
        'yaml',
        'xml',
        'nosql',
        'domain-driven-design',
        'redis',
        'rabbitmq',
        'nginx',
        'mssqlserver'
      ]),
      devOps: SkillSet(['cicd', 'groovy', 'docker', 'docker-compose', 'yaml', 'nginx']),
      tools: SkillSet([
        'github',
        'bitbucket',
        'jenkins',
        'teamcity',
        'jira',
        'docker',
        'docker-compose',
        'postman',
        'fiddler',
        'tfs',
        'testrail',
        'gitlab',
        'browserstack',
        'git'
      ])
    },
    primary: SkillSet([
      'angular',
      'typescript',
      'javascript',
      'angular-material',
      'nx',
      'rxjs',
      'react-native',
      'react',
      'redux',
      'jest',
      'karma',
      'jasmine',
      'agGrid',
      'ngxs',
      'ngrx-store',
      'nodejs',
      'nestjs',
      'mikro-orm',
      'scss',
      'unit-testing',
      'git',
      'jira',
      'angular-e2e',
      'angularjs',
      'twitter-bootstrap',
      'swagger',
      'jenkins',
      'csharp',
      'efcore',
      'asp.net core',
      'ado.net',
      'web api / rest api',
      'docker',
      'docker-compose',
      'mysql',
      'cicd',
      'github',
      'bitbucket',
      'aws-ebs',
      'aws-lambda',
      'aws-api-gateway',
      'aws-rds',
      'aws-iam',
      'aws-ec2',
      'aws-ami',
      'aws-s3'
    ]),
    secondary: SkillSet([
      'aws-cloudfront',
      'aws-cognito',
      'aws-route53',
      'aws-dynamodb',
      'aws-cloudwatch',
      'aws-cli',
      'aws-sdk',
      'aws-efs',
      'postgresql',
      'passport',
      'jwt',
      'protractor',
      'browserstack',
      'postman',
      'fiddler',
      'integration-testing',
      'php',
      'agile-scrum',
      'tsql',
      'tfs',
      'yaml',
      'xml',
      'domain-driven-design',
      'redis',
      'rabbitmq',
      'nginx',
      'extjs',
      'mssqlserver',
      'nosql',
      'jquery',
      'cypress',
      'firebase'
    ]),
    os: [
      new SkillItemEntry('fab fa-apple', 'MacOS'),
      new SkillItemEntry('fab fa-windows', 'Windows'),
      new SkillItemEntry('fab fa-linux', 'Linux')
    ],
    languages: ['English', 'Georgian', 'Russian'],
    trainings: [
      new TrainCertEntry(
        'Preparing',
        'AWS Certified Solutions Architect Associate (SAA-C03)',
        'Online',
        'fab fa-amazon'
      ),
      new TrainCertEntry(
        'Attended',
        'Web application security - attack and defense',
        {
          country: 'Poland',
          city: 'Warsaw'
        },
        'fab fa-linux'
      )
    ]
  },
  summary: [
    'I have been involved in Software Development since 2011, with excellent knowledge of software development methodologies, frameworks, design patterns and SOLID principles, that include all phase of systems analysis and understanding of client business technologies and processes.',
    'I have developed and maintained software for Healthcare, Fin-Tech, Energy Solutions, Betting Solutions, Educational, Data Analysis, SaaS industries.',
    'I also posses excellent verbal and written communication skills and the ability to interact professionally with a diverse group, executives, managers, and subject matter experts. I communicate with clarity, verbally and in one-on-one or group situations.'
  ],
  workHistory: [
    new WorkHistoryItemEntry(
      'Mar',
      2023,
      null,
      null,
      'Tech Lead (Angular, React Native)',
      'Remote Part-Time',
      'Contract',
      'Conceptdigital',
      'https://www.conceptdigital.com/',
      [
        new ProjectItemEntry(
          ['thc-angular', 'cc-angular'],
          [
            'To setup github repositories and application architecture',
            'To setup and configure CI/CD on Netlify',
            'To take technical decisions',
            'To participate in the discussions related to project planning and workflow with PMs',
            'To perform code reviews',
            'To assist Junior / Middle developers solving their obstacles',
            'To share Best Practises, Clean Code, K.I.S.S, D.R.Y, A.C.I.D and S.O.L.I.D priciples with team members',
            'To configure eslint, prettier, puppeteer and etc. for each project',
            'To setup github actions',
            'To setup pre-commit / pre-push hooks for each project',
            'To participate in Sprint Planning with Project Managers'
          ],
          SkillSet(['angular', 'react', 'react-native', 'firebase', 'github'])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Dec',
      2022,
      null,
      null,
      'Full-Stack Freelancer (Angular, NestJs, React, React Native, AWS, Docker)',
      'Remote',
      'Freelance',
      'Upwork.com',
      'https://upwork.com',
      [
        new ProjectItemEntry(
          ['Foxtrail: Integration Test Environment Setup on NX monorepo'],
          [
            'To setup Jest integration tests for NX monorepo',
            'To write script for E2E automation on Typescript',
            'To write integration test samples for NestJs projects',
            'To write integration test samples for React projects'
          ],
          SkillSet(['nx', 'react', 'nodejs', 'docker', 'docker-compose', 'typescript'])
        ),
        new ProjectItemEntry(
          ['TRKR LLC: Auth Microservice'],
          [
            'To implement NestJs microservice for auth',
            'To implement JWT authentication using HTTP Api',
            'To implement Swagger UI',
            'To implement token invalidation functionality using RabbitMQ',
            'To setup Mikro-Orm entities and Migrations with PostgreSQL',
            'To integrate React app with auth microservice (HTTP + RabbitMQ)',
            'To integrate Angular + Firebase admin app with auth microservice (HTTP + RabbitMQ)'
          ],
          SkillSet([
            'nestjs',
            'mikro-orm',
            'passport',
            'jwt',
            'swagger',
            'postgresql',
            'rabbitmq',
            'angular',
            'react',
            'firebase'
          ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Apr',
      2021,
      'Dec',
      2022,
      'Senior Angular Developer',
      'Remote',
      'Contract',
      'Valor Software',
      'https://valor-software.com',
      [
        new ProjectItemEntry(
          ['StudyTube/ultra', 'StudyTube/LMS'],
          [
            'To implement separated reusable components in ultra library according to new design. Ultra library is private component library, based on angular',
            'To re-implement LMS ui using new ultra library components. LMS is Learning Management System, web platform for online learning materials, like videos, documents etc.',
            'To collaborate with StudyTube team'
          ]
        ),
        new ProjectItemEntry(
          ['SAP/Fundamental-NGX', 'SAP/Fundamental-Styles'],
          [
            'To Implement new features into Fundamental NGX / Styles library',
            'To collaborate with external teams and fix defects they require',
            'To Do the defect hunting and constantly figure out regressions, then fix them',
            'To implement accessibility functionality'
          ]
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Sep',
      2017,
      'Apr',
      2021,
      'Software Engineer III',
      'Remote',
      'Contract',
      'Crossover For Work',
      'https://crossover.com/',
      [
        new ProjectItemEntry(
          ['Kayako Classic'],
          [
            'To Do the defect RCA (Root Cause Analysis)',
            'To Implement the fix of defects using PHP 7, MySQL',
            'To implement the fix of frontend defects using React, Javascript',
            'To write automated E2E test for the fix using Gherkin'
          ]
        ),
        new ProjectItemEntry(
          ['CX Monitor'],
          [
            'To update legacy software UI components from Adobe Flash to Javascript / React',
            'To update legacy software UI charts from Adobe Flash to Fusion Charts (Js)',
            'To update legacy software UI graphs from Adobe Flash to D3.js',
            'To refactor old legacy Ext.js code, make it compatible with eslint rules'
          ]
        ),
        new ProjectItemEntry(
          ['Acorn PA5G/AAA'],
          [
            'To update legacy software UI from Microsoft Silverlight to Angular 8 / Material / Scss / NGXS',
            'To update legacy software UI complex grid components from Silverlight to Ag-Grid',
            'To make new angular software compatible with legacy .Net RIA Services api',
            'To test Angular software with Karma / Jasmine',
            "To do a regular code reviews for non angular expert team members PR's and coach them how to achieve better result"
          ]
          // SkillSet(['angular', 'ngxs', 'rxjs', 'asp.net core', 'agGrid', 'karma', 'jasmine'])
        ),
        new ProjectItemEntry(
          ['AES CIS'],
          [
            'To update legacy software UI from CSS to SCSS',
            'To update legacy software UI from HTML to HTML 5',
            'To make old (only IE compatible) software, compatible with modern browsers (JS)'
          ]
          // SkillSet(['javascript', 'scss', 'asp.net core'])
        ),
        new ProjectItemEntry(
          ['Volt Delta'],
          [
            'To migrate code from Dimmension to GitHub repositories',
            'To prepare Development Environment on local machine & Build',
            "To prepare Development Environment in AWS EC2's & Build",
            'To migrate issues from Dimmensions to our Centralized Jira',
            'To find out all dependencies & Migrate',
            'To prepare CI/CD pipelines in Jenkins',
            "To review E2E TC's & Scenarios for QA team",
            'To fetch last code changes and prepare documents for Unit Testing team',
            'To close the current defect backlog and deliver fixes for NodeJs services',
            'To close the current test backlog and deliver automated tests for NodeJs services',
            'To close the current feature backlog and deliver new features for NodeJs services'
          ]
          // SkillSet(['docker', 'cicd', 'csharp', 'nodejs', 'aws-ec2', 'aws-ami'])
        ),
        new ProjectItemEntry(
          ['Mobilogy'],
          [
            'To inspect and investigate UI of the incoming projects',
            'To prepare Development Environment on local machine & Build',
            'To prepare Development Environment in Cloud (DevSpaces, Docker) & Build',
            'To migrate Git repositories',
            'To migrate issues from Jira TFS, Dimmension etc. to our Centralized Jira',
            'To find out all dependencies & Migrate',
            'To prepare CI/CD pipelines in Jenkins',
            'To close the current defect backlog and deliver fixes for NodeJs services',
            'To close the current feature backlog and deliver new features for NodeJs services'
          ]
          // SkillSet([
          //   'angular',
          //   'ngrx-store',
          //   'rxjs',
          //   'nodejs',
          //   'docker',
          //   'docker-compose',
          //   'cicd',
          //   'karma',
          //   'jasmine',
          //   'aws'
          // ])
        ),
        new ProjectItemEntry(
          ['LyrisHQ / Campaign Manager'],
          [
            'To investigate legacy application and expose necessary Api endpoints',
            'To reskin legacy Lyris application UI using Angular 5',
            'To write Unit Tests using Karma, Jasmine',
            'To integrate Angular 5 UI with Java / Spring based REST Api',
            'To write E2E Tests using Protractor',
            'To run E2E Tests against several browsers using Browserstack'
          ]
          // SkillSet([
          //   'angular',
          //   'rxjs',
          //   'karma',
          //   'jasmine',
          //   'protractor',
          //   'java',
          //   'swagger',
          //   'typescript'
          // ])
        ),
        new ProjectItemEntry(
          ['CRM'],
          [
            'To investigate legacy application and expose necessary Api endpoints',
            'To reskin legacy CRM application UI using Angular 4',
            'To write Unit Tests using Karma, Jasmine',
            'To integrate Angular 4 UI with .Net Core based REST Api',
            'To implement Swagger mocks',
            'To write E2E Tests using Protractor',
            'To run E2E Tests against several browsers using Browserstack'
          ]
          // SkillSet([
          //   'angular',
          //   'rxjs',
          //   'karma',
          //   'jasmine',
          //   'protractor',
          //   'asp.net core',
          //   'swagger',
          //   'typescript'
          // ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Jun',
      2016,
      'Aug',
      2017,
      'Senior Software Developer',
      'On-Site',
      'Full-Time Employment',
      'GPN DATA Group International',
      'https://dev.gpndata.com/',
      [
        new ProjectItemEntry(
          ['PSP Gateway (Payment Service Provider Gateway)'],
          [
            'To maintain legacy PSP application using PHP 7 & MySQL',
            'To develop internal softwares using .Net Core & Angular 2',
            'To integrate Banks into PSP system',
            "To test and find out problems in PSP system if there's any",
            'To simulate payment requests to each Bank for testing purpose',
            'To integrate SEPAExpress (SEPA - Single Euro Payment Area) payment method into PSP system',
            'To create validations for accepting Visa, MasterCard transactions and Bank transfers',
            'To integrate external services like Ethoca into PSP system',
            'To maintain anti Fraud logic of PSP system'
          ]
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Sep',
      2013,
      'Jun',
      2016,
      'Middle/Senior .NET Developer',
      'On-Site',
      'Full-Time Employment',
      'Steady Logic Llc',
      'https://steady-logic.com',
      [
        new ProjectItemEntry(
          ['Sportsbook'],
          [
            "To create Sportsbook Administrative Tool's UI using AngularJs, later Angular 2",
            'To implement Presentation Layer of Back-End using ASP.NET MVC',
            'To implement WebSocket based modules for managing Live events of several sports: Soccer, basketball, Tennis etc.',
            'To implement BLL (Business Logic Layer)',
            'To implement DAL (Data Access Layer)',
            'To implement Database Layer using Ms SQL Server, create stored procedures, functions etc.',
            'To participate in planning of architecture design, changing design features and improve stability of software',
            'To implement Micro Services using C# & RabbitMQ',
            'To implement Cache server using Redis'
          ]
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Jun',
      2011,
      'Sep',
      2013,
      'Web Developer',
      'On-Site',
      'Full-Time Employment',
      'Solo Group Ltd',
      'https://solostudio.ge',
      [
        new ProjectItemEntry(
          ['Website Development'],
          [
            'To create Web Site Markup using HTML 5 & CSS 3',
            'To create Web Site Front-End using Javascript, jQuery',
            'To create Web Site Back-End using PHP 5 or ASP.NET MVC',
            'To create Web Site Database using MySQL or Ms SQL Server ',
            'To create Web based software for Restaurants, Delivery companies etc using PHP 5 or ASP.NET, HTML 5, CSS 3, jQuery'
          ]
        )
      ]
    )
  ],
  education: [
    new EducationItemEntry(2015, 2017, 'Master of Computer Science', 'University of Georgia (UG)'),
    new EducationItemEntry(
      2010,
      2014,
      'Bachelor of Computer Science',
      'Georgian Technical University (GTU)'
    )
  ]
};

export default DUMMY_DATA;
