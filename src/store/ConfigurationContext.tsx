import { createContext, useState } from 'react';
import { Mode } from '../types/Mode';

const ConfigurationContext = createContext({
  mode: 'compact' as Mode,
  setMode: (mode: Mode) => {},
  projectDescription: false,
  setProjectDescription: (value: boolean) => {},
  toolsAndTech: false,
  setToolsAndTech: (value: boolean) => {},
  softSkills: true,
  setSoftSkills: (value: boolean) => {},
  cloudSkills: true,
  setCloudSkills: (value: boolean) => {},
  frontEndSkills: true,
  setFrontEndSkills: (value: boolean) => {},
  backEndSkills: true,
  setBackendSkills: (value: boolean) => {},
  devOpsSkills: true,
  setDevopsSkills: (value: boolean) => {},
  toolsSkills: true,
  setToolsSkills: (value: boolean) => {},
  osSkills: true,
  setOsSkills: (value: boolean) => {}
});

export const ConfigurationContextProvider = ({ children }: { children: any }) => {
  const [modeConfig, setModeConfig] = useState<Mode>('full');
  const [projectDescriptionConfig, setProjectDescriptionConfig] = useState<boolean>(true);
  const [toolsAndTechConfig, setToolsAndTechConfig] = useState<boolean>(true);
  const [softSkillsConfig, setSoftSkillsConfig] = useState<boolean>(true);
  const [cloudSkillsConfig, setCloudSkillsConfig] = useState<boolean>(true);
  const [frontEndSkillsConfig, setFrontEndSkillsConfig] = useState<boolean>(true);
  const [backEndSkillsConfig, setBackEndSkillsConfig] = useState<boolean>(true);
  const [devOpsSkillsConfig, setDevOpsSkillsConfig] = useState<boolean>(true);
  const [toolsSkillsConfig, setToolsSkillsConfig] = useState<boolean>(true);
  const [osSkillsConfig, setOsSkillsConfig] = useState<boolean>(true);

  const setMode = (mode: Mode) => {
    setModeConfig(mode);
  };

  const setProjectDescription = (value: boolean) => {
    setProjectDescriptionConfig(value);
  };

  const setToolsAndTech = (value: boolean) => {
    setToolsAndTechConfig(value);
  };

  const setSoftSkills = (value: boolean) => {
    setSoftSkillsConfig(value);
  };

  const setCloudSkills = (value: boolean) => {
    setCloudSkillsConfig(value);
  };

  const setFrontEndSkills = (value: boolean) => {
    setFrontEndSkillsConfig(value);
  };

  const setBackendSkills = (value: boolean) => {
    setBackEndSkillsConfig(value);
  };

  const setDevopsSkills = (value: boolean) => {
    setDevOpsSkillsConfig(value);
  };

  const setToolsSkills = (value: boolean) => {
    setToolsSkillsConfig(value);
  };

  const setOsSkills = (value: boolean) => {
    setOsSkillsConfig(value);
  };

  const context = {
    mode: modeConfig,
    setMode,
    projectDescription: projectDescriptionConfig,
    setProjectDescription,
    toolsAndTech: toolsAndTechConfig,
    setToolsAndTech,
    softSkills: softSkillsConfig,
    setSoftSkills,
    cloudSkills: cloudSkillsConfig,
    setCloudSkills,
    frontEndSkills: frontEndSkillsConfig,
    setFrontEndSkills,
    backEndSkills: backEndSkillsConfig,
    setBackendSkills,
    devOpsSkills: devOpsSkillsConfig,
    setDevopsSkills,
    toolsSkills: toolsSkillsConfig,
    setToolsSkills,
    osSkills: osSkillsConfig,
    setOsSkills
  };

  return <ConfigurationContext.Provider value={context}>{children}</ConfigurationContext.Provider>;
};

export default ConfigurationContext;
