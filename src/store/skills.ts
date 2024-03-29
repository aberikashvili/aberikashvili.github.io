import SkillItemEntry from '../models/SkillItemEntry';
import SkillMap from '../types/skill-map.type';

const skillsMap: SkillMap = {
  // Soft Skills
  commubnication: new SkillItemEntry('fa fa-hashtag', 'Communication'),
  teamwork: new SkillItemEntry('fa fa-hashtag', 'Teamwork'),
  leadership: new SkillItemEntry('fa fa-hashtag', 'Leadership'),
  'problem-solving': new SkillItemEntry('fa fa-hashtag', 'Problem Solving'),
  'time-management': new SkillItemEntry('fa fa-hashtag', 'Time Management'),
  'critical-thinking': new SkillItemEntry('fa fa-hashtag', 'Critical Thinking'),
  collaboration: new SkillItemEntry('fa fa-hashtag', 'Collaboration'),
  learning: new SkillItemEntry('fa fa-hashtag', 'Learning'),
  management: new SkillItemEntry('fa fa-hashtag', 'Management'),
  'project-management': new SkillItemEntry('fa fa-hashtag', 'Project Management'),
  flexibility: new SkillItemEntry('fa fa-hashtag', 'Flexibility'),
  // Soft Skills

  // Tools
  github: new SkillItemEntry('fab fa-github', 'Github'),
  bitbucket: new SkillItemEntry('fab fa-bitbucket', 'BitBucket'),
  jenkins: new SkillItemEntry('fab fa-jenkins', 'Jenkins'),
  testrail: new SkillItemEntry('fa fa-hashtag', 'TeatRail'),
  teamcity: new SkillItemEntry('fa fa-hashtag', 'TeamCity'),
  gitlab: new SkillItemEntry('fab fa-github', 'GitLab'),
  browserstack: new SkillItemEntry('fab fa-firefox', 'Browserstack'),
  postman: new SkillItemEntry('fa fa-hashtag', 'Postman'),
  fiddler: new SkillItemEntry('fa fa-hashtag', 'Fiddler'),
  tfs: new SkillItemEntry('fab fa-windows', 'Team Fundation Server'),
  git: new SkillItemEntry('fab fa-github', 'Git'),
  jira: new SkillItemEntry('fab fa-jira', 'Jira'),
  trello: new SkillItemEntry('fab fa-trello', 'Trello'),
  circleci: new SkillItemEntry('fa fa-hashtag', 'CircleCI'),
  nx: new SkillItemEntry('fa fa-code', 'NX'),
  figma: new SkillItemEntry('fab fa-figma', 'Figma'),
  storybook: new SkillItemEntry('fa fa-code', 'Storybook'),
  // Tools

  // General
  'unit-testing': new SkillItemEntry('fa fa-hashtag', 'Unit Testing'),
  protractor: new SkillItemEntry('fa fa-hashtag', 'Protractor'),
  'integration-testing': new SkillItemEntry('fa fa-hashtag', 'Integration Testing'),
  'agile-scrum': new SkillItemEntry('fa fa-hashtag', 'Agile / Scrum Methodology'),
  yaml: new SkillItemEntry('fa fa-hashtag', 'YAML'),
  xml: new SkillItemEntry('fa fa-hashtag', 'XML'),
  'domain-driven-design': new SkillItemEntry('fa fa-hashtag', 'Domain Driven Design'),
  // General

  // DevOps
  groovy: new SkillItemEntry('fa fa-hashtag', 'Groovy'),
  docker: new SkillItemEntry('fab fa-docker', 'Docker'),
  'docker-compose': new SkillItemEntry('fab fa-docker', 'Docker Compose'),
  cicd: new SkillItemEntry('fab fa-jenkins', 'CI / CD'),
  // DevOps

  // Cloud
  aws: new SkillItemEntry('fab fa-amazon', 'AWS'),
  'aws-ebs': new SkillItemEntry('fab fa-amazon', 'AWS EBS'),
  'aws-cli': new SkillItemEntry('fab fa-amazon', 'AWS CLI'),
  'aws-sdk': new SkillItemEntry('fab fa-amazon', 'AWS SDK'),
  'aws-lambda': new SkillItemEntry('fab fa-amazon', 'AWS Lambda'),
  'aws-api-gateway': new SkillItemEntry('fab fa-amazon', 'AWS API Gateway'),
  'aws-cloudfront': new SkillItemEntry('fab fa-amazon', 'AWS CloudFront'),
  'aws-cognito': new SkillItemEntry('fab fa-amazon', 'AWS Cognito'),
  'aws-iam': new SkillItemEntry('fab fa-amazon', 'AWS IAM'),
  'aws-ec2': new SkillItemEntry('fab fa-amazon', 'AWS EC2'),
  'aws-ami': new SkillItemEntry('fab fa-amazon', 'AWS AMI'),
  'aws-s3': new SkillItemEntry('fab fa-amazon', 'AWS S3'),
  'aws-route53': new SkillItemEntry('fab fa-amazon', 'AWS Route53'),
  'aws-dynamodb': new SkillItemEntry('fab fa-amazon', 'AWS DynamoDB'),
  'aws-cloudwatch': new SkillItemEntry('fab fa-amazon', 'AWS CloudWatch'),
  'aws-rds': new SkillItemEntry('fab fa-amazon', 'AWS RDS'),
  'aws-efs': new SkillItemEntry('fab fa-amazon', 'AWS EFS'),
  'aws-elb': new SkillItemEntry('fab fa-amazon', 'AWS ELB'),
  digitalocean: new SkillItemEntry('fa fa-cloud', 'DigitalOcean'),
  firebase: new SkillItemEntry('fab fa-google', 'Firebase'),
  netlify: new SkillItemEntry('fa fa-cloud', 'Netlify'),
  // Cloud

  // Front-End
  angular: new SkillItemEntry('fab fa-angular', 'Angular 15'),
  typescript: new SkillItemEntry('fa fa-hashtag', 'Typescript'),
  javascript: new SkillItemEntry('fab fa-js', 'Javascript'),
  'angular-material': new SkillItemEntry('fab fa-angular', 'Angular Material'),
  rxjs: new SkillItemEntry('fa fa-hashtag', 'RxJs'),
  'react-native': new SkillItemEntry('fab fa-react', 'React Native'),
  'expo-cli': new SkillItemEntry('fab fa-react', 'Expo CLI'),
  react: new SkillItemEntry('fab fa-react', 'React'),
  redux: new SkillItemEntry('fab fa-react', 'Redux'),
  jest: new SkillItemEntry('fa fa-hashtag', 'Jest'),
  karma: new SkillItemEntry('fa fa-hashtag', 'Karma'),
  jasmine: new SkillItemEntry('fa fa-hashtag', 'Jasmine'),
  agGrid: new SkillItemEntry('fa fa-hashtag', 'agGrid'),
  ngxs: new SkillItemEntry('fab fa-angular', 'NGXS'),
  'ngrx-store': new SkillItemEntry('fab fa-angular', 'NGRX Store'),
  scss: new SkillItemEntry('fab fa-sass', 'SCSS'),
  'angular-e2e': new SkillItemEntry('fab fa-angular', 'Angular E2E Testing'),
  angularjs: new SkillItemEntry('fab fa-angular', 'AngularJs'),
  ionic: new SkillItemEntry('fab fa-angular', 'Ionic'),
  'twitter-bootstrap': new SkillItemEntry('fab fa-twitter', 'Twitter Bootstrap'),
  extjs: new SkillItemEntry('fab fa-js', 'ExtJs'),
  jquery: new SkillItemEntry('fab fa-js', 'jQuery'),
  cypress: new SkillItemEntry('fa fa-hashtag', 'Cypress'),
  d3: new SkillItemEntry('fa fa-code', 'D3.js'),
  'fusion-charts': new SkillItemEntry('fa fa-code', 'FusionCharts'),
  // Front-End

  // Back-End
  nodejs: new SkillItemEntry('fab fa-node', 'NodeJs'),
  nestjs: new SkillItemEntry('fab fa-node', 'NestJs'),
  swagger: new SkillItemEntry('fa fa-hashtag', 'Swagger'),
  netcore: new SkillItemEntry('fab fa-windows', '.Net / .Net Core'),
  csharp: new SkillItemEntry('fa fa-hashtag', 'C#'),
  java: new SkillItemEntry('fab fa-java', 'Java Spring'),
  efcore: new SkillItemEntry('fa fa-hashtag', 'EF Core 2'),
  'asp.net core': new SkillItemEntry('fab fa-windows', 'Asp.Net / Asp.Net core 2'),
  'ado.net': new SkillItemEntry('fa fa-hashtag', 'ADO.NET'),
  'web api / rest api': new SkillItemEntry('fa fa-hashtag', 'Web Api / REST Api'),
  mysql: new SkillItemEntry('fa fa-database', 'MySql'),
  'mikro-orm': new SkillItemEntry('fab fa-node', 'Mikro-Orm'),
  passport: new SkillItemEntry('fab fa-node', 'passport'),
  jwt: new SkillItemEntry('fa fa-hashtag', 'JWT'),
  postgresql: new SkillItemEntry('fa fa-database', 'PostgreSQL'),
  php: new SkillItemEntry('fab fa-php', 'PHP'),
  tsql: new SkillItemEntry('fa fa-database', 'T-SQL'),
  redis: new SkillItemEntry('fa fa-hashtag', 'Redis'),
  rabbitmq: new SkillItemEntry('fa fa-hashtag', 'RabbitMQ'),
  nginx: new SkillItemEntry('fa fa-hashtag', 'Nginx'),
  mssqlserver: new SkillItemEntry('fa fa-database', 'Ms Sql Server'),
  nosql: new SkillItemEntry('fa fa-hashtag', 'NoSql'),
  mongodb: new SkillItemEntry('fa fa-database', 'MongoDB'),
  python: new SkillItemEntry('fab fa-python', 'Python'),
  django: new SkillItemEntry('fab fa-django', 'Django')
  // Back-End
};

export const SkillSet = (skills: (keyof SkillMap)[]): SkillItemEntry[] => {
  return skills.map((skillKey) => skillsMap[skillKey]);
};
