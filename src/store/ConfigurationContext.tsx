import { createContext, useState } from 'react';
import { Mode } from '../types/Mode';
import { LabelValue } from '../types/label-value';

export type ConfigContextState = {
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
  certification: boolean;
  certificateImages: boolean;
  publications: boolean;
  visibleWorkHistory: LabelValue[];
};

export type ConfigurationContextFunctions = ConfigContextState & {
  setMode: (mode: Mode) => void;
  setProjectDescription: (value: boolean) => void;
  setToolsAndTech: (value: boolean) => void;
  setSoftSkills: (value: boolean) => void;
  setCloudSkills: (value: boolean) => void;
  setFrontEndSkills: (value: boolean) => void;
  setBackendSkills: (value: boolean) => void;
  setDevopsSkills: (value: boolean) => void;
  setToolsSkills: (value: boolean) => void;
  setOsSkills: (value: boolean) => void;
  setCertification: (value: boolean) => void;
  setCertificateImages: (value: boolean) => void;
  setPublications: (value: boolean) => void;
  setVisibleWorkHistory: (items: LabelValue[]) => void;
};

const ConfigurationContext = createContext({} as ConfigurationContextFunctions);

const varToString = (varObj: any) => Object.keys(varObj)[0];

export const ConfigurationContextProvider = ({ children }: { children: any }) => {
  const [config, setConfig] = useState<ConfigContextState>({
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
    certification: true,
    certificateImages: false,
    publications: true,
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
    certification: config.certification,
    setCertification: (certification: boolean) => updateState({ certification }),
    certificateImages: config.certificateImages,
    setCertificateImages: (certificateImages: boolean) => updateState({ certificateImages }),
    publications: config.publications,
    setPublications: (publications: boolean) => updateState({ publications }),
    visibleWorkHistory: config.visibleWorkHistory,
    setVisibleWorkHistory: (visibleWorkHistory: LabelValue[]) => updateState({ visibleWorkHistory })
  };

  return <ConfigurationContext.Provider value={context}>{children}</ConfigurationContext.Provider>;
};

export default ConfigurationContext;
