/**
 *
 * @desc    Custom TextArea that aligns with the designer's mockup
 * @author  @Kcaparas
 */

import { Field, ErrorMessage } from 'formik';
import { FC } from 'react';
import StyledField from './CustomTextArea.styles';
import '../ErrorMessage.css';

interface CustomTextAreaProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  width?: string;
}

const CustomTextArea: FC<CustomTextAreaProps> = ({
  label,
  id,
  placeholder,
  name,
  width = '100%',
}) => (
  <StyledField width={width}>
    <label htmlFor={id}>{label}</label>
    <Field
      as="textarea"
      placeholder={placeholder}
      name={name}
      id={id}
    />
    <ErrorMessage
      name={id}
      render={(msg) => <div className="errorMessage">{msg}</div>}
    />
  </StyledField>
);

export default CustomTextArea;
