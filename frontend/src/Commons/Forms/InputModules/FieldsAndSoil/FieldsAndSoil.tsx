/**
 *
 * THIS IS A SKELETON!
 * THIS IS STILL TO BE IMPLEMENTED!
 *
 * @summary Farm Information Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import Button from '@Commons/Button/Button.tsx';
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React from 'react';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import ComponentText from '@Constants/ComponentText';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomSelect from '@Commons/Input/Select/CustomSelect';
import OptionInterface from 'src/Interface/OptionInterface';
import { StyledFarmInfo, StyledSelectContainer } from './FieldsAndSoil.style';

interface SubmissionValues {
  FarmName: string;
  Year: string;
  FarmRegion: string;
}

const options: OptionInterface[] = [{ value: 'Vancouver Island', label: 'Vancouver Island' }];

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const initialValues = {
    FarmName: farmDetails.FarmName,
    Year: farmDetails.Year,
    FarmRegion: farmDetails.FarmRegion,
  };

  const validationSchema = Yup.object().shape({
    FarmName: Yup.string().max(24).required('Required'),
    Year: Yup.number().min(1900).max(2099).required('Required'),
    FarmRegion: Yup.string().required('Required'),
  });

  const onSubmit = (
    values: SubmissionValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): void => {
    // Suggested timeout by Formik docs
    setTimeout(() => {
      // There is probably a better way of doing this with a for loop
      // Build a FarmDetails object and use it to update the main data passed from the Main Page
      const farmInformation: FarmDetailsInterface = { ...farmDetails };
      farmInformation.FarmName = values.FarmName;
      farmInformation.Year = values.Year;
      farmInformation.FarmRegion = values.FarmRegion;
      // Update the Main Data Object
      updateFarmDetails(farmInformation);
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <StyledFarmInfo>
          <div id="inputContainer">
            <CustomField
              label="Year"
              id="Year"
              name="Year"
              type="number"
              width="20%"
            />

            <CustomField
              label="Farm Name"
              id="FarmName"
              name="FarmName"
              type="text"
            />
          </div>

          <StyledSelectContainer>
            <CustomSelect
              name="FarmRegion"
              id="FarmRegion"
              label="Region"
              options={options}
              width="50%"
            />
            <Button
              type="submit"
              size="sm"
              disabled={false}
              text={ComponentText.NEXT}
            />
          </StyledSelectContainer>
        </StyledFarmInfo>
      </Form>
    </Formik>
  );
};

const FieldsAndSoil: InputModuleInterface = {
  InputModuleComponent: FieldsAndSoilComponent,
  id: 'FieldsAndSoil',
  name: { long: 'Fields and Soil', short: 'Fields' },
  faIcon: faWheatAwn,
  enable: false,
};

export default FieldsAndSoil;
