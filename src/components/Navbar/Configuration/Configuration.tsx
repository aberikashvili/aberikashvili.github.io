import { useCallback, useContext, useEffect, useState } from 'react';

import { Checkbox, Segmented, Select, SelectProps } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import ResumeContext from '../../../store/ResumeContext';
import ConfigurationContext from '../../../store/ConfigurationContext';
import { Mode } from '../../../types/Mode';

import './Configuration.css';

const Configuration = () => {
  const configCtx = useContext(ConfigurationContext);
  const resumeCtx = useContext(ResumeContext);
  const [workItemValue, setWorkItemValue] = useState<string[]>([]);

  useEffect(() => {
    setWorkItemValue(resumeCtx.getWorkHistoryIdList());
    configCtx.setVisibleWorkHistory(resumeCtx.getWorkHistoryOptions());
  }, []);

  const options: { key: Mode; label: string }[] = [
    {
      key: 'compact',
      label: 'Compact'
    },
    {
      key: 'full',
      label: 'Full'
    },
    {
      key: 'custom',
      label: 'Custom'
    }
  ];

  const labelFromKey = useCallback(
    (mode: Mode) => {
      return options.find((opt) => opt.key === mode)?.label || '';
    },
    [options, configCtx.mode]
  );

  const keyFromlabel = useCallback(
    (label: string) => {
      return options.find((opt) => opt.label === label)?.key || null;
    },
    [options, configCtx.mode]
  );

  const modeChanged = (value: SegmentedValue) => {
    const key = keyFromlabel(value.toString());

    if (key) {
      configCtx.setMode(key);
    }
  };

  const toggleProjectDescription = (e: CheckboxChangeEvent) => {
    configCtx.setProjectDescription(e.target.checked);
  };

  const toggleProjectImages = (e: CheckboxChangeEvent) => {
    configCtx.setProjectImages(e.target.checked);
  };

  const toggleToolsAndTech = (e: CheckboxChangeEvent) => {
    configCtx.setToolsAndTech(e.target.checked);
  };

  const toggleSoftSkills = (e: CheckboxChangeEvent) => {
    configCtx.setSoftSkills(e.target.checked);
  };

  const toggleCloudSkills = (e: CheckboxChangeEvent) => {
    configCtx.setCloudSkills(e.target.checked);
  };

  const toggleFrontEndSkills = (e: CheckboxChangeEvent) => {
    configCtx.setFrontEndSkills(e.target.checked);
  };

  const toggleBackEndSkills = (e: CheckboxChangeEvent) => {
    configCtx.setBackendSkills(e.target.checked);
  };

  const toggleDevOpsSkills = (e: CheckboxChangeEvent) => {
    configCtx.setDevopsSkills(e.target.checked);
  };

  const toggleToolsSkills = (e: CheckboxChangeEvent) => {
    configCtx.setToolsSkills(e.target.checked);
  };

  const toggleOsSkills = (e: CheckboxChangeEvent) => {
    configCtx.setOsSkills(e.target.checked);
  };

  const toggleCertifications = (e: CheckboxChangeEvent) => {
    configCtx.setCertification(e.target.checked);
  };

  const toggleCertificateImages = (e: CheckboxChangeEvent) => {
    configCtx.setCertificateImages(e.target.checked);
  };

  const togglePublications = (e: CheckboxChangeEvent) => {
    configCtx.setPublications(e.target.checked);
  };

  const selectProps: SelectProps = {
    mode: 'multiple',
    style: { width: '500px' },
    value: workItemValue,
    options: resumeCtx.getWorkHistoryOptions(),
    onChange: (newValue: string[]) => {
      setWorkItemValue(newValue);
      configCtx.setVisibleWorkHistory(
        resumeCtx
          .getWorkHistoryOptions()
          .filter((option) => newValue.includes(option.value.toString()))
      );
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
    size: 'large'
  };

  // const selectSkillProps: SelectProps = {
  //   mode: 'multiple',
  //   style: { width: '500px' },
  //   value: [],
  //   options: [{ label: 'Certification', value: 'certification' }],
  //   onChange: (newValue: string[]) => {
  //     // setWorkItemValue(newValue);
  //     // configCtx.setVisibleWorkHistory(
  //     //   resumeCtx
  //     //     .getWorkHistoryOptions()
  //     //     .filter((option) => newValue.includes(option.value.toString()))
  //     // );
  //   },
  //   placeholder: 'Select Skills...',
  //   maxTagCount: 'responsive',
  //   size: 'large'
  // };

  return (
    <div className="configuration-container">
      <div className="configuration-modes-wrapper">
        <Segmented
          options={options.map((opt) => opt.label)}
          value={labelFromKey(configCtx.mode)}
          onChange={modeChanged}
        />
      </div>
      {configCtx.mode === 'custom' && (
        <div className="configuration-custom-mode-wrapper">
          <div className="configuration-column">
            <Checkbox
              onChange={toggleProjectDescription}
              defaultChecked={configCtx.projectDescription}>
              Project Description
            </Checkbox>

            <Checkbox onChange={toggleProjectImages} defaultChecked={configCtx.projectImages}>
              Project Images
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleToolsAndTech} defaultChecked={configCtx.toolsAndTech}>
              Project Tools & Tech
            </Checkbox>
          </div>
          {/* <div className="configuration-column">
            <Select {...selectSkillProps} />
          </div> */}
          <div className="configuration-column">
            <Checkbox onChange={toggleSoftSkills} defaultChecked={configCtx.softSkills}>
              Soft Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleCloudSkills} defaultChecked={configCtx.cloudSkills}>
              Cloud Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleFrontEndSkills} defaultChecked={configCtx.frontEndSkills}>
              Frontend Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleBackEndSkills} defaultChecked={configCtx.backEndSkills}>
              Backend Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleDevOpsSkills} defaultChecked={configCtx.devOpsSkills}>
              DevOps Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleToolsSkills} defaultChecked={configCtx.toolsSkills}>
              Tools Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleOsSkills} defaultChecked={configCtx.osSkills}>
              OS Skills
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={toggleCertifications} defaultChecked={configCtx.certification}>
              Certificastion
            </Checkbox>
            <Checkbox
              onChange={toggleCertificateImages}
              defaultChecked={configCtx.certificateImages}>
              Certificate Images
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Checkbox onChange={togglePublications} defaultChecked={configCtx.publications}>
              Publications
            </Checkbox>
          </div>
          <div className="configuration-column">
            <Select {...selectProps} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuration;
