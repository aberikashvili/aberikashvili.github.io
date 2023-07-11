import { createContext, useState } from 'react';
import { Mode } from '../types/Mode';
import { LabelValue } from '../types/label-value';

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
  setOsSkills: (value: boolean) => {},
  visibleWorkHistory: [] as LabelValue[],
  setVisibleWorkHistory: (items: LabelValue[]) => {}
});

const varToString = (varObj: any) => Object.keys(varObj)[0];

export const ConfigurationContextProvider = ({ children }: { children: any }) => {
  const [config, setConfig] = useState<{
    mode: Mode;
    projectDescription: boolean;
    toolsAndTech: boolean;
    softSkills: boolean;
    cloudSkills: boolean;
    frontEndSkills: boolean;
    backEndSkills: boolean;
    devOpsSkills: boolean;
    toolsSkills: boolean;
    osSkills: boolean;
    visibleWorkHistory: LabelValue[];
  }>({
    mode: 'full',
    projectDescription: true,
    toolsAndTech: true,
    softSkills: true,
    cloudSkills: true,
    frontEndSkills: true,
    backEndSkills: true,
    devOpsSkills: true,
    toolsSkills: true,
    osSkills: true,
    visibleWorkHistory: []
  });

  const updateState = (value: any) => {
    const propName = varToString(value);

    setConfig((state) => ({
      ...state,
      [propName]: value[propName]
    }));
  };

  const context = {
    mode: config.mode,
    setMode: (mode: Mode) => updateState({ mode }),
    projectDescription: config.projectDescription,
    setProjectDescription: (projectDescription: boolean) => updateState({ projectDescription }),
    toolsAndTech: config.toolsAndTech,
    setToolsAndTech: (toolsAndTech: boolean) => updateState({ toolsAndTech }),
    softSkills: config.softSkills,
    setSoftSkills: (softSkills: boolean) => updateState({ softSkills }),
    cloudSkills: config.cloudSkills,
    setCloudSkills: (cloudSkills: boolean) => updateState({ cloudSkills }),
    frontEndSkills: config.frontEndSkills,
    setFrontEndSkills: (frontEndSkills: boolean) => updateState({ frontEndSkills }),
    backEndSkills: config.backEndSkills,
    setBackendSkills: (backEndSkills: boolean) => updateState({ backEndSkills }),
    devOpsSkills: config.devOpsSkills,
    setDevopsSkills: (devOpsSkills: boolean) => updateState({ devOpsSkills }),
    toolsSkills: config.toolsSkills,
    setToolsSkills: (toolsSkills: boolean) => updateState({ toolsSkills }),
    osSkills: config.osSkills,
    setOsSkills: (osSkills: boolean) => updateState({ osSkills }),
    visibleWorkHistory: config.visibleWorkHistory,
    setVisibleWorkHistory: (visibleWorkHistory: LabelValue[]) => updateState({ visibleWorkHistory })
  };

  return <ConfigurationContext.Provider value={context}>{children}</ConfigurationContext.Provider>;
};

export default ConfigurationContext;
