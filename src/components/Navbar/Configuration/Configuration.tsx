import { useCallback, useContext, useEffect, useState } from 'react';

import { Button, Checkbox, Divider, Drawer, Segmented, Select, SelectProps } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { SegmentedValue } from 'antd/es/segmented';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

import ResumeContext from '../../../store/ResumeContext';
import ConfigurationContext from '../../../store/ConfigurationContext';
import { Mode } from '../../../types/Mode';

import './Configuration.css';

const Configuration = () => {
  const configCtx = useContext(ConfigurationContext);
  const resumeCtx = useContext(ResumeContext);
  const [workItemValue, setWorkItemValue] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onClose = () => {
    setOpen(false);
    document.body.style.overflow = 'scroll';
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

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
      <div className="configuration-modes-wrapper">
        {configCtx.mode === 'custom' && (
          <Button
            type="default"
            shape="default"
            icon={<SettingOutlined {...({} as any)} />}
            onClick={showDrawer}>
            Configure
          </Button>
        )}
      </div>
      {configCtx.mode === 'custom' && (
        <Drawer
          title="Confirguration"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          getContainer={false}
          width={550}>
          <div
            style={{
              padding: '0 0 20px 0'
            }}>
            <Divider orientation="left">Work History</Divider>
            <Select {...selectProps} />
          </div>

          <div
            style={{
              padding: '0 5px'
            }}>
            <Divider orientation="left">Projects</Divider>
            <Checkbox
              onChange={toggleProjectDescription}
              defaultChecked={configCtx.projectDescription}>
              Project Description
            </Checkbox>

            <Checkbox onChange={toggleProjectImages} defaultChecked={configCtx.projectImages}>
              Project Images
            </Checkbox>

            <Checkbox onChange={toggleToolsAndTech} defaultChecked={configCtx.toolsAndTech}>
              Project Tools & Tech
            </Checkbox>

            <Divider orientation="left">Skills</Divider>
            <Checkbox onChange={toggleSoftSkills} defaultChecked={configCtx.softSkills}>
              Soft Skills
            </Checkbox>

            <Checkbox onChange={toggleCloudSkills} defaultChecked={configCtx.cloudSkills}>
              Cloud Skills
            </Checkbox>

            <Checkbox onChange={toggleFrontEndSkills} defaultChecked={configCtx.frontEndSkills}>
              Frontend Skills
            </Checkbox>

            <Checkbox onChange={toggleBackEndSkills} defaultChecked={configCtx.backEndSkills}>
              Backend Skills
            </Checkbox>

            <Checkbox onChange={toggleDevOpsSkills} defaultChecked={configCtx.devOpsSkills}>
              DevOps Skills
            </Checkbox>

            <Divider orientation="left">Tools</Divider>

            <Checkbox onChange={toggleToolsSkills} defaultChecked={configCtx.toolsSkills}>
              Tools Skills
            </Checkbox>

            <Checkbox onChange={toggleOsSkills} defaultChecked={configCtx.osSkills}>
              OS Skills
            </Checkbox>

            <Divider orientation="left">Education & Certificates</Divider>

            <Checkbox onChange={toggleCertifications} defaultChecked={configCtx.certification}>
              Certificastion
            </Checkbox>
            <Checkbox
              onChange={toggleCertificateImages}
              defaultChecked={configCtx.certificateImages}>
              Certificate Images
            </Checkbox>

            <Divider orientation="left">Other</Divider>

            <Checkbox onChange={togglePublications} defaultChecked={configCtx.publications}>
              Publications
            </Checkbox>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default Configuration;
