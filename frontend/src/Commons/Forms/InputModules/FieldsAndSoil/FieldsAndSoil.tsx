/**
 * @summary Field and Soil Input Module
 * @description A module with input fields to be used in a Form Module
 * @author @GDamaso
 */
import InputModuleInterface from 'src/Interface/InputModuleinterface';
import InputModuleProps from 'src/Interface/InputModuleProps';
import React from 'react';
import FarmDetailsInterface from 'src/Interface/FarmDetailsInterface';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ComponentText from '@Constants/ComponentText';
import Button from '@Commons/Button/Button';
import CustomField from '@Commons/Input/Field/CustomField';
import CustomTextArea from '@Commons/Input/TextArea/CustomTextArea';
import { faWheatAwn } from '@fortawesome/free-solid-svg-icons';
import {
  StyledFarmInfo,
  StyledTextAreaContainer,
  StyledButtonGroupContainer,
} from './FieldsAndSoil.style';

interface SubmissionValues {
  FieldName: string;
  Area: number;
  Comments?: string;
}

const FieldsAndSoilComponent: React.FC<InputModuleProps> = ({ farmDetails, updateFarmDetails }) => {
  const initialValues = {
    FieldName: farmDetails.FieldName,
    Area: farmDetails.Area,
    Comments: farmDetails.Comments,
  };

  const validationSchema = Yup.object().shape({
    FieldName: Yup.string().max(24).required('Required'),
    Area: Yup.number().min(1).max(100).required('Required'),
    Comments: Yup.string().max(200),
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
      farmInformation.FieldName = values.FieldName;
      farmInformation.Area = values.Area;
      farmInformation.Comments = values.Comments;
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
              label="Field name"
              id="FieldName"
              name="FieldName"
              type="text"
              size="lg"
            />
            <CustomField
              label="Area"
              id="Area"
              name="Area"
              type="number"
              size="sm"
            />
          </div>
          <StyledTextAreaContainer>
            <CustomTextArea
              name="Comments"
              id="Comments"
              label="Comments (optional)"
              placeholder="e.g., poor drainage in southwest corner (no need to specify crop here)"
              width="50%"
            />
            <StyledButtonGroupContainer>
              <Button
                type="reset"
                size="sm"
                disabled={false}
                text={ComponentText.CANCEL}
              />
              <Button
                type="submit"
                size="sm"
                disabled={false}
                text={ComponentText.ADD}
              />
            </StyledButtonGroupContainer>
          </StyledTextAreaContainer>
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
