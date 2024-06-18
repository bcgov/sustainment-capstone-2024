/**
 * @desc Styling with BC Design Tokens and Emotion for Footer component
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import * as tokens from '@bcgov/design-tokens/js';
import screenSizes from '@Constants/ScreenSize';

type StyledFieldProps = {
  size: string;
};

const StyledField = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: ${(props) => (props.size === 'sm' ? '30%' : props.size === 'md' ? '50%' : '100%')};
  label {
    font-weight: ${tokens.typographyFontWeightsBold};
  }
  input {
    border: solid 1px ${tokens.themeGray40};
    border-radius: 3px;
  }

  @media (min-width: ${screenSizes.desktop}) {
    
  }
`;

export default StyledField;
