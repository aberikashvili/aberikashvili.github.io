import { ArticleEntry } from '../models/ArticleEntry';
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
        'nx',
        'docker',
        'docker-compose',
        'postman',
        'fiddler',
        'tfs',
        'testrail',
        'gitlab',
        'browserstack',
        'git',
        'figma',
        'storybook'
      ])
    },
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
        'Preparing',
        'AlgoExpert Certification in Algorithms & Data Structures',
        'Online',
        'fa fa-asterisk'
      ),
      // new TrainCertEntry(
      //   'Preparing',
      //   '.NET Core Microservices - The Complete Guide (.NET 8 MVC)',
      //   'Online',
      //   'fab fa-windows'
      // ),
      // new TrainCertEntry(
      //   'Preparing',
      //   'Cypress End-to-End Testing - Getting Started',
      //   'Online',
      //   'fab fa-angular'
      // ),
      new TrainCertEntry(
        'Certified',
        'React Native - The Practical Guide [2023]',
        'Online',
        'fab fa-react',
        '/assets/certificates/UC-7cb1e0fd-e81b-4fab-8294-6a3618aff264.jpg'
      ),
      new TrainCertEntry(
        'Certified',
        "NestJS: The Complete Developer's Guide",
        'Online',
        'fab fa-node',
        '/assets/certificates/UC-c49c5d58-070e-4ae1-baf3-9a4a9e5ce6bb.jpg'
      ),
      new TrainCertEntry(
        'Certified',
        'Learning Algorithms in JavaScript from Scratch',
        'Online',
        'fab fa-js',
        '/assets/certificates/UC-3CBGS5S6.jpg'
      ),
      new TrainCertEntry(
        'Certified',
        'Learning Data Structures in JavaScript from Scratch',
        'Online',
        'fab fa-js',
        '/assets/certificates/UC-APHRY51G.jpg'
      ),
      new TrainCertEntry(
        'Certified',
        'Redux in Angular (2 and 4+)',
        'Online',
        'fab fa-angular',
        '/assets/certificates/UC-5V2KOW57.jpg'
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
      'Aug',
      2023,
      null,
      null,
      'Senior Angular Developer',
      'Hybrid',
      'Full-Time Employment',
      'Sweeft Digital',
      'https://sweeftdigital.com/',
      [
        new ProjectItemEntry(
          ['ENERGO-PRO BG'],
          `
          ENERGO-PRO Varna EAD is part of the ENERGO-PRO Group established in 1994 in the Czech Republic. 
          Its business is focused on generation, distribution and power trading. 
          The Group operates hydropower plants and electrical distribution grids in Central and Eastern Europe, the Black Sea and the Caucasus. ENERGO-PRO Varna EAD has more than 2300 employees. Holding licenses for the activities: electrical power distribution and power supply though its daughter companies Electrodistribution North AD and ENERGO-PRO Sales AD, it serves 1 200 000 customers in Northeastern Bulgaria. ENERGO-PRO Energy Services EAD is also part of ENERGO-PRO Varna EAD and is one of the leading traders on the liberalized market in Bulgaria serving more than 33 000 customers.
          `,
          [],
          [
            'To implement complex UI/UX on Angular',
            'To take technical decisions related to Angular app architecture',
            'To take technical decisions and implement high performance solutions for high loaded Angular app',
            'To communicate and collaborate with back-end team',
            'To perform peer reviews',
            'To participate in Sprint Planning with Project Managers',
            'To perform defect hunting routine'
          ],
          SkillSet(['angular', 'swagger', 'web api / rest api', 'ngxs', 'git', 'gitlab'])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Jul',
      2023,
      'Oct',
      2023,
      'Senior React / React Native Engineer',
      'Remote Part-Time',
      'Freelance',
      'MaxinAI',
      'https://maxinai.com',
      [
        // new ProjectItemEntry(
        //   ['fitness-community trainer-app'],
        //   `desc`,
        //   [],
        //   [],
        //   SkillSet([
        //     'react-native',
        //     'nx',
        //     'expo-cli',
        //     'firebase',
        //     'aws',
        //     'auth0',
        //     'push-notifications',
        //     'git',
        //     'github'
        //   ])
        // ),
        // new ProjectItemEntry(
        //   ['amkhanagoba-app'],
        //   `
        //     Mobile app connects the apartament owners, development companies and service providers into the same space.
        //     The app simplifies the communication between the sides and helps to manage the issues related to living place and achieve the result.
        //   `,
        //   [],
        //   [
        //     'To implement CI/CD pipelins for Pull Request automated Android/iOS builds',
        //     'To implement new features according to technical specs and business requirements',
        //     'To fix bugs according to provided backlog',
        //     'To release the development and production versions of mobile app',
        //     'To fix bugs on the web jQuery + React + Python + MySQL'
        //   ],
        //   SkillSet([
        //     'react-native',
        //     'nx',
        //     'expo-cli',
        //     'firebase',
        //     'aws',
        //     'auth0',
        //     'push-notifications',
        //     'git',
        //     'github'
        //   ])
        // ),
        new ProjectItemEntry(
          ['pixidium-mobile', 'pixidium-web'],
          `Mobile app connects the business who needs to spread flyers / leaflets to the people who can spread.
          The business posts campaign with requirements and information, how much flyers they need to spread, where do they need to spread etc.
          Campaigns can be assigned to ambassadors.`,
          [
            '/assets/projects/mobile/pixidium/IMG_0005.PNG',
            '/assets/projects/mobile/pixidium/IMG_0006.PNG',
            '/assets/projects/mobile/pixidium/IMG_0007.PNG',
            '/assets/projects/mobile/pixidium/IMG_0008.PNG',
            '/assets/projects/mobile/pixidium/IMG_0009.PNG',
            '/assets/projects/mobile/pixidium/IMG_0010.PNG',
            '/assets/projects/mobile/pixidium/IMG_0012.PNG',
            '/assets/projects/mobile/pixidium/IMG_0013.PNG',
            '/assets/projects/mobile/pixidium/IMG_0014.PNG',
            '/assets/projects/mobile/pixidium/IMG_0015.PNG',
            '/assets/projects/mobile/pixidium/IMG_0016.PNG'
          ],
          [
            'To implement CI/CD pipelins for Pull Request automated Android/iOS builds',
            'To implement new features according to technical specs and business requirements',
            'To fix bugs according to provided backlog',
            'To release the development and production versions of mobile app',
            'To fix bugs on the web jQuery + React + Python + MySQL'
          ],
          SkillSet([
            'react',
            'react-native',
            'web api / rest api',
            'python',
            'django',
            'aws-s3',
            'aws-sdk',
            'jquery',
            'git',
            'github',
            'jira',
            'cicd',
            'firebase',
            'push-notifications'
          ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Mar',
      2023,
      'Sep',
      2023,
      'Tech Lead (Angular, React Native, NestJs)',
      'Remote Part-Time',
      'Contract',
      'Conceptdigital',
      'https://www.conceptdigital.com/',
      [
        new ProjectItemEntry(
          ['forbes-mobile-app', 'bmg-mobile-app'],
          `
          I'm tech leading 2 teams of 3 Junior/Middle React Native developers per each team. We're building Android/iOS mobile apps from scratch,
          for 2 biggest local internet magazines, Forbes georgia and BMG (Business Media Georgia). Due to these mobile apps consist of quite many screens and components, 
          I made technical decision to start coding from shared component libraries, I've created project architecture using NX (https://nx.dev) and added 2 shared libraries: core and platform, 
          core contains trivial components like: buttons, inputs, labels, etc. but platform contains bigger specific components, which are build from core components. 
          These libraries can be build as npm package later as well. I also implemented CI using github action and expo.dev and we have Android .apk and iOS simulator builds per each pull request.
          `,
          [],
          [
            'To setup github repositories and application architecture uising NX',
            'To setup and configure CI/CD on expo.dev',
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
          SkillSet([
            'nx',
            'react-native',
            'expo-cli',
            'web api / rest api',
            'git',
            'github',
            'trello',
            'figma'
          ])
        ),
        new ProjectItemEntry(
          ['Tbilisi Holding Company', 'Casa Calda'],
          `
          The projects I'm leading are various, web projects are based on Angular, Mobile projects are based on React Native.
          All of them are being developed from scratch
          `,
          [],
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
          SkillSet([
            'angular',
            'web api / rest api',
            'firebase',
            'git',
            'github',
            'trello',
            'netlify',
            'figma'
          ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Feb',
      2023,
      'Aug',
      2023,
      'Senior Javascript Engineer',
      'Remote',
      'Contract',
      'Simplifield',
      'https://simplifield.com',
      [
        new ProjectItemEntry(
          ['sf-frontend', 'sf-mobile', 'sf-backend'],
          `
          SimpliField is leading the retail digital transformation as the first fully integrated mobile platform for retail operations, 
          internal communications and advanced performance analytics.
          `,
          [],
          [
            `To implement new frontend features using Angular.js or React, following the design spec from Figma`,
            `To implement new mobile features using Ionic + Angular.js, following the design spec from Figma`,
            `To provide defect / bug fixes for mobile and frontend`,
            `To participate in daily meetings, sprint plannings`,
            `To participate in discussions of technical aspects of the current and future goals`,
            `To debug the backend and provide fixes if needed`
          ],
          SkillSet([
            'javascript',
            'typescript',
            'angularjs',
            'react',
            'ionic',
            'nodejs',
            'mongodb',
            'jira',
            'github',
            'circleci',
            'figma'
          ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Dec',
      2022,
      'Apr',
      2023,
      'Full-Stack Freelancer (Angular, NestJs, React, React Native, AWS, Docker)',
      'Remote',
      'Freelance',
      'Upwork.com',
      'https://upwork.com',
      [
        new ProjectItemEntry(
          ['Foxtrail: Integration Test Environment Setup on NX monorepo'],
          null,
          [],
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
          `
          The TRKR is a US based startup, which provides web/mobile apps for managing and automate relations between truck drivers & cargo companies.
          The product is based on Nest.js microservises, which are communicating between each other using the message broker RabbitMQ.
          I've implemented Auth microservice and integrated it with Angular and React UI apps. As a Database I used PostgreSQL and Mikro-ORM as a data access layer.
          The brief functionality of the microservice is Authorization / Authentication using JWT, Role Management, Permission Management, User Management APIs.
          `,
          [],
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
          'Online education platform developing customized educational content to fit the needs of individual students.',
          [],
          [
            'To implement separated reusable components in ultra library according to new design. Ultra library is private component library, based on angular',
            'To re-implement LMS ui using new ultra library components. LMS is Learning Management System, web platform for online learning materials, like videos, documents etc.',
            'To collaborate with StudyTube team'
          ],
          SkillSet([
            'angular',
            'angular-material',
            'nx',
            'typescript',
            'netlify',
            'nestjs',
            'storybook'
          ])
        ),
        new ProjectItemEntry(
          ['SAP/Fundamental-NGX', 'SAP/Fundamental-Styles'],
          `
          The @fundamental-ngx (core / platform) library is a set of Angular components built using Fundamental Library Styles.
          The Fundamental Library Styles is a design system and HTML/CSS component library used to build modern product user experiences with the SAP look and feel.\
          `,
          [],
          [
            'To Implement new features into Fundamental NGX / Styles library',
            'To collaborate with external teams and fix defects they require',
            'To Do the defect hunting and constantly figure out regressions, then fix them',
            'To implement accessibility functionality'
          ],
          SkillSet(['angular', 'nx', 'typescript', 'netlify', 'nestjs', 'storybook'])
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
          'Kayako Classic is self-hosted service desk software, which helps companies and their customers to deal with support tickets.',
          [],
          [
            'To Do the defect RCA (Root Cause Analysis)',
            'To Implement the fix of defects using PHP 7, MySQL',
            'To implement the fix of frontend defects using React, Javascript',
            'To write automated E2E test for the fix using Gherkin'
          ],

          SkillSet(['react', 'php', 'mysql', 'docker', 'docker-compose'])
        ),
        new ProjectItemEntry(
          ['CX Monitor'],
          'CX Monitor is enterprise software which delivers the system monitoring, root-cause analysis, and issue identification tools you need to run your business in real time.',
          [],
          [
            'To update legacy software UI components from Adobe Flash to Javascript / React',
            'To update legacy software UI charts from Adobe Flash to Fusion Charts (Js)',
            'To update legacy software UI graphs from Adobe Flash to D3.js',
            'To refactor old legacy Ext.js code, make it compatible with eslint rules'
          ],
          SkillSet(['react', 'd3', 'fusion-charts', 'typescript', 'javascript'])
        ),
        new ProjectItemEntry(
          ['Acorn PA5G/AAA'],
          'Acorn is Time-Driven Activity-Based-Costing (TDABC) platform that distills and attributes costs of delivering products and services by building business-specific models which take into account nuances of account processes.',
          [],
          [
            'To update legacy software UI from Microsoft Silverlight to Angular 8 / Material / Scss / NGXS',
            'To update legacy software UI complex grid components from Silverlight to Ag-Grid',
            'To make new angular software compatible with legacy .Net RIA Services api',
            'To test Angular software with Karma / Jasmine',
            "To do a regular code reviews for non angular expert team members PR's and coach them how to achieve better result"
          ],
          SkillSet(['angular', 'ngxs', 'rxjs', 'asp.net core', 'agGrid', 'karma', 'jasmine'])
        ),
        new ProjectItemEntry(
          ['AES CIS'],
          "AES CIS (Aurea Energy Solutions Customer Information System) is a web-based billing, invoicing, payment, and Customer service & management system designed for use by suppliers. The product is part of Aurea's Revenue Lifecycle Management and it's used by top US energy provider companies.",
          [],
          [
            'To update legacy software UI from CSS to SCSS',
            'To update legacy software UI from HTML to HTML 5',
            'To make old (only IE compatible) software, compatible with modern browsers (JS)'
          ],
          SkillSet(['javascript', 'scss', 'asp.net core'])
        ),
        new ProjectItemEntry(
          ['Volt Delta'],
          'Volt Delta is multi-channel contact center solutions, smart automation and data-driven contact management in the cloud and within the company to optimize customer journeys. The product consists of many various modules, written on various technologiesm like: C++, C#, Node.js, Javascript.',
          [],
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
          ],
          SkillSet(['docker', 'cicd', 'csharp', 'nodejs', 'aws-ec2', 'aws-ami'])
        ),
        new ProjectItemEntry(
          ['Mobilogy'],
          'Mobilogy is an advanced mobile lifecycle solutions that enable operators, retailers, buyback vendors and enterprises to provide enhanced customer experience, increase revenue, improve productivity, enhance security and reduce cost.',
          [],
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
          ],
          SkillSet([
            'angular',
            'ngrx-store',
            'rxjs',
            'nodejs',
            'docker',
            'docker-compose',
            'cicd',
            'karma',
            'jasmine',
            'aws'
          ])
        ),
        new ProjectItemEntry(
          ['LyrisHQ / Campaign Manager'],
          `
          Lyris Technologies – now Aurea Email Marketing – is a leading digital messaging platform. 
          Lyris delivers mature, field-tested email marketing capabilities, as an industry leading cloud-based or on-premise solution that lets customers easily, segment, target, and measure the effectiveness of email campaigns on every device.
          `,
          [],
          [
            'To investigate legacy application and expose necessary Api endpoints',
            'To reskin legacy Lyris application UI using Angular 5',
            'To write Unit Tests using Karma, Jasmine',
            'To integrate Angular 5 UI with Java / Spring based REST Api',
            'To write E2E Tests using Protractor',
            'To run E2E Tests against several browsers using Browserstack'
          ],
          SkillSet([
            'angular',
            'rxjs',
            'karma',
            'jasmine',
            'protractor',
            'java',
            'swagger',
            'typescript'
          ])
        ),
        new ProjectItemEntry(
          ['CRM'],
          `
          CRM is a Customer Relationship Management system provided by Aurea, 
          the goal of this product is to manage every lead, opportunity, and interaction with all of your prospects and customers – quickly, easily, and effectively.
          `,
          [],
          [
            'To investigate legacy application and expose necessary Api endpoints',
            'To reskin legacy CRM application UI using Angular 4',
            'To write Unit Tests using Karma, Jasmine',
            'To integrate Angular 4 UI with .Net Core based REST Api',
            'To implement Swagger mocks',
            'To write E2E Tests using Protractor',
            'To run E2E Tests against several browsers using Browserstack'
          ],
          SkillSet([
            'angular',
            'rxjs',
            'karma',
            'jasmine',
            'protractor',
            'asp.net core',
            'swagger',
            'typescript'
          ])
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
          ['PSP Gateway'],
          `
          PSP Gateway stands for Payment Service Provider Gateway, and it is responsible for processing Visa, MasterCard, Diners Club, SEPA, etc. online transactions.
          The product provides the pure API only for the E-commerce customers who has PCI-DSS license and Payment Page for the rest of other clients. Payment Page can be embedded into the E-commerce website.
          `,
          [],
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
          ],
          SkillSet(['angular', 'php', 'asp.net core', 'javascript', 'typescript'])
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
          `
          Sportsbook is a online Gambling platform, focused on betting solutions for sport games like soccer, basketball, volleyball, etc. which consists of the following modules: 
          Website (based on real-time websockets, where users can login and register to make bets). Mobile app (based on Sencha Touch technology and websockets).
          Core (based on .NET, SQL and Ext.js (UI), mainly Core is responsible for handling general functionality across other modules and other products of the company).
          Feed (separated backend service, which requests and delivers third party data to our database, the third party data providers are Betradar, Bwin, etc).
          Admin (based on .NET, SignalR, Ext.js / angular.js, which is responsible for managing everything for the Sporttsbook: Risk management, Monitoring, Acceptance, Live event management, Resulting, Event / Market / Odd management, Reporting, etc).
          The Sportsbook itself was using N-Tier architecture from the beginning, later we decided to redesign the architecture and split it as microservices to overcome the issues we faced, and we implemented RabbitMQ for communication between microservices, Redis for data caching and protobuf.
          `,
          [],
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
          ],
          SkillSet([
            'csharp',
            'asp.net core',
            'ado.net',
            'extjs',
            'redis',
            'rabbitmq',
            'mssqlserver',
            'angularjs',
            'web api / rest api'
          ])
        )
      ]
    ),
    new WorkHistoryItemEntry(
      'Jun',
      2011,
      'Sep',
      2013,
      'Junior Web Developer',
      'On-Site',
      'Full-Time Employment',
      'Solo Group Ltd',
      'https://solostudio.ge',
      [
        new ProjectItemEntry(
          ['Website Development'],
          null,
          [],
          [
            'To create Web Site Markup using HTML 5 & CSS 3',
            'To create Web Site Front-End using Javascript, jQuery',
            'To create Web Site Back-End using PHP 5 or ASP.NET MVC',
            'To create Web Site Database using MySQL or Ms SQL Server ',
            'To create Web based software for Restaurants, Delivery companies etc using PHP 5 or ASP.NET, HTML 5, CSS 3, jQuery'
          ],
          SkillSet(['php', 'mysql', 'jquery', 'javascript'])
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
  ],
  publications: [
    {
      title: 'React Native EAS builds on NX + @nrwl/expo using Github workflows',
      caption: 'How to setup EAS builds for NX + expo',
      date: new Date(2023, 6, 1),
      featuredImage:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*t_fYGjeVe84rhd6xlal2yA.jpeg',
      url: 'https://medium.com/@arkadi.berikashvili/react-native-eas-builds-on-nx-nrwl-expo-using-github-workflows-80f420f52563',
      channel: 'medium.com'
    },
    {
      title: `You shouldn’t worry about CCAT`,
      caption: 'How to take tough CCAT test with confidence',
      date: new Date(2023, 0, 4),
      featuredImage:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*TDRG5PLafNPYohlN.jpg',
      url: 'https://medium.com/@arkadi.berikashvili/you-shouldnt-worry-about-ccat-45e6a05e7bac',
      channel: 'medium.com'
    },
    {
      title: 'How to use @nestjs/cli with NX workspace',
      caption: '',
      date: new Date(2022, 11, 28),
      featuredImage:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*q7CbzBsMxfWBCFdZwHeNCg.png',
      url: 'https://medium.com/@arkadi.berikashvili/how-to-use-nestjs-cli-with-nx-workspace-40ebcfbea303',
      channel: 'medium.com'
    }
  ] as ArticleEntry[]
};

export default DUMMY_DATA;
