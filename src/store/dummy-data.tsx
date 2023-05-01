import EducationItemEntry from '../models/EducationItemEntry';
import PersonalInfoItemEntry from '../models/PersonalInfoItemEntry';
import ProjectItemEntry from '../models/ProjectItemEntry';
import SkillItemEntry from '../models/SkillItemEntry';
import TrainCertEntry from '../models/TrainCertEntry';
import WorkHistoryItemEntry from '../models/WorkHistoryItemEntry';
import IMAGE_BASE_64 from './image-base-64';

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
    primary: [
      new SkillItemEntry('fab fa-angular', 'Angular 15'),
      new SkillItemEntry('', 'TypeScript'),
      new SkillItemEntry('fab fa-js', 'Javascript'),
      new SkillItemEntry('fab fa-angular', 'Angular Material'),
      new SkillItemEntry('fab fa-angular', 'NX'),
      new SkillItemEntry('', 'RxJs'),
      new SkillItemEntry('fab fa-react', 'React Native'),
      new SkillItemEntry('fab fa-react', 'React'),
      new SkillItemEntry('fab fa-react', 'Redux'),
      new SkillItemEntry('', 'Jest'),
      new SkillItemEntry('', 'Karma'),
      new SkillItemEntry('', 'Jasmine'),
      new SkillItemEntry('', 'agGrid'),
      new SkillItemEntry('fab fa-angular', 'NGXS'),
      new SkillItemEntry('fab fa-angular', 'NGRX Store'),
      new SkillItemEntry('fab fa-node', 'NodeJs'),
      new SkillItemEntry('fab fa-node', 'NestJs'),
      new SkillItemEntry('fab fa-sass', 'SCSS'),
      new SkillItemEntry('', 'Unit Testing'),
      new SkillItemEntry('fab fa-github', 'Git'),
      new SkillItemEntry('fab fa-jira', 'Jira'),
      new SkillItemEntry('fab fa-angular', 'Angular E2E Testing'),
      new SkillItemEntry('fab fa-angular', 'AngularJs'),
      new SkillItemEntry('fab fa-twitter', 'Twitter Bootstrap'),
      new SkillItemEntry('', 'Swagger'),
      new SkillItemEntry('fab fa-jenkins', 'Jenkins'),
      new SkillItemEntry('fab fa-windows', '.Net / .Net Core'),
      new SkillItemEntry('', 'C#'),
      new SkillItemEntry('', 'EF Core 2'),
      new SkillItemEntry('fab fa-windows', 'Asp.Net / Asp.Net core 2'),
      new SkillItemEntry('', 'ADO.NET'),
      new SkillItemEntry('', 'Web Api / REST Api'),
      new SkillItemEntry('fab fa-docker', 'Docker'),
      new SkillItemEntry('fa fa-database', 'MySql'),
      new SkillItemEntry('fab fa-jenkins', 'CI / CD'),
      new SkillItemEntry('fab fa-github', 'Github'),
      new SkillItemEntry('fab fa-bitbucket', 'BitBucket')
    ],
    secondary: [
      new SkillItemEntry('fab fa-amazon', 'AWS Lambda'),
      new SkillItemEntry('fab fa-amazon', 'AWS API Gateway'),
      new SkillItemEntry('fab fa-amazon', 'AWS CloudFront'),
      new SkillItemEntry('fab fa-amazon', 'AWS Cognito'),
      new SkillItemEntry('fab fa-amazon', 'AWS IAM'),
      new SkillItemEntry('fab fa-amazon', 'AWS EC2'),
      new SkillItemEntry('fab fa-amazon', 'AWS AMI'),
      new SkillItemEntry('fab fa-amazon', 'AWS S3'),
      new SkillItemEntry('fab fa-amazon', 'AWS Route53'),
      new SkillItemEntry('fab fa-amazon', 'AWS DynamoDB'),
      new SkillItemEntry('fab fa-amazon', 'AWS CloudWatch'),
      new SkillItemEntry('', 'Protractor'),
      new SkillItemEntry('fab fa-firefox', 'Browserstack'),
      new SkillItemEntry('', 'Postman'),
      new SkillItemEntry('', 'Fiddler'),
      new SkillItemEntry('', 'Integration Testing'),
      new SkillItemEntry('fab fa-php', 'PHP'),
      new SkillItemEntry('', 'Agile / Scrum Methodology'),
      new SkillItemEntry('fa fa-database', 'T-SQL'),
      new SkillItemEntry('fab fa-windows', 'Team Fundation Server'),
      new SkillItemEntry('', 'YAML'),
      new SkillItemEntry('', 'XML'),
      new SkillItemEntry('', 'Domain Driven Design'),
      new SkillItemEntry('', 'Redis'),
      new SkillItemEntry('', 'RabbitMQ'),
      new SkillItemEntry('', 'Nginx'),
      new SkillItemEntry('fab fa-js', 'ExtJs'),
      new SkillItemEntry('fa fa-database', 'Ms Sql Server'),
      new SkillItemEntry('', 'NoSql'),
      new SkillItemEntry('fab fa-js', 'jQuery')
    ],
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
            'To share Best Practises, Clean Code, K.I.S.S and S.O.L.I.D priciples with team members',
            'To configure eslint, prettier, puppeteer and etc. for each project',
            'To setup github actions',
            'To setup pre-commit / pre-push hooks for each project',
            'To participate in Sprint Planning with Project Managers'
          ],
          [
            new SkillItemEntry('fab fa-angular', 'Angular'),
            new SkillItemEntry('fab fa-react', 'React'),
            new SkillItemEntry('fab fa-react', 'React Native'),
            new SkillItemEntry('', 'Firebase'),
            new SkillItemEntry('fab fa-github', 'Github')
          ]
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
          [
            new SkillItemEntry('', 'NX'),
            new SkillItemEntry('fab fa-react', 'React'),
            new SkillItemEntry('fab fa-node', 'NestJs'),
            new SkillItemEntry('fab fa-docker', 'Docker Compose'),
            new SkillItemEntry('', 'Typescript')
          ]
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
          [
            new SkillItemEntry('fab fa-node', 'NestJs'),
            new SkillItemEntry('fab fa-node', 'Mikro-orm'),
            new SkillItemEntry('fab fa-node', 'passport'),
            new SkillItemEntry('', 'JWT'),
            new SkillItemEntry('', 'Swagger'),
            new SkillItemEntry('fa fa-database', 'PostgreSQL'),
            new SkillItemEntry('', 'RabbiqMQ'),
            new SkillItemEntry('fab fa-angular', 'Angular'),
            new SkillItemEntry('fab fa-react', 'React'),
            new SkillItemEntry('', 'Firebase')
          ]
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
          // [
          //   new SkillItemEntry('fab fa-angular', 'Angular'),
          //   new SkillItemEntry('fab fa-angular', 'NGXS'),
          //   new SkillItemEntry('', 'RxJs'),
          //   new SkillItemEntry('fab fa-windows', 'Asp.Net / Asp.Net core 2'),
          //   new SkillItemEntry('', 'agGrid'),
          //   new SkillItemEntry('fab fa-angular', 'Karma'),
          //   new SkillItemEntry('fab fa-angular', 'Jasmine')
          // ]
        ),
        new ProjectItemEntry(
          ['AES CIS'],
          [
            'To update legacy software UI from CSS to SCSS',
            'To update legacy software UI from HTML to HTML 5',
            'To make old (only IE compatible) software, compatible with modern browsers (JS)'
          ]
          // [
          //   new SkillItemEntry('fab fa-js', 'Javascript'),
          //   new SkillItemEntry('fab fa-sass', 'SCSS'),
          //   new SkillItemEntry('fab fa-windows', 'Asp.Net / Asp.Net core 2')
          // ]
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
          // [
          //   new SkillItemEntry('fab fa-docker', 'Docker'),
          //   new SkillItemEntry('fab fa-jenkins', 'CI / CD'),
          //   new SkillItemEntry('', 'C#'),
          //   new SkillItemEntry('fab fa-node', 'Node.js'),
          //   new SkillItemEntry('fab fa-amazon', 'AWS EC2'),
          //   new SkillItemEntry('fab fa-amazon', 'AWS AMI')
          // ]
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
          // [
          //   new SkillItemEntry('fab fa-angular', 'Angular'),
          //   new SkillItemEntry('fab fa-angular', 'Ngrx Store'),
          //   new SkillItemEntry('', 'RxJs'),
          //   new SkillItemEntry('fab fa-node', 'Node.js'),
          //   new SkillItemEntry('fab fa-docker', 'Docker'),
          //   new SkillItemEntry('fab fa-jenkins', 'CI / CD'),
          //   new SkillItemEntry('fab fa-angular', 'Karma'),
          //   new SkillItemEntry('fab fa-angular', 'Jasmine'),
          //   new SkillItemEntry('fab fa-amazon', 'AWS')
          // ]
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
          // [
          //   new SkillItemEntry('fab fa-angular', 'Angular'),
          //   new SkillItemEntry('', 'RxJs'),
          //   new SkillItemEntry('fab fa-angular', 'Karma'),
          //   new SkillItemEntry('fab fa-angular', 'Jasmine'),
          //   new SkillItemEntry('fab fa-angular', 'Protractor'),
          //   new SkillItemEntry('fab fa-java', 'Java Spring'),
          //   new SkillItemEntry('', 'Swagger'),
          //   new SkillItemEntry('', 'TypeScript')
          // ]
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
          // [
          //   new SkillItemEntry('fab fa-angular', 'Angular'),
          //   new SkillItemEntry('', 'RxJs'),
          //   new SkillItemEntry('fab fa-angular', 'Karma'),
          //   new SkillItemEntry('fab fa-angular', 'Jasmine'),
          //   new SkillItemEntry('fab fa-angular', 'Protractor'),
          //   new SkillItemEntry('', 'Web Api / REST Api'),
          //   new SkillItemEntry('', 'Swagger'),
          //   new SkillItemEntry('', 'TypeScript')
          // ]
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
