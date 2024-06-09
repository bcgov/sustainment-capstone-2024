/**
 * @desc Styling with BC Design Tokens and Emotion for
 *       Main Page of Better Berries App
 * @author @GDamaso
 */
import styled from '@emotion/styled';
import screenSizes from '@Constants/ScreenSize';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  margin-top: 100px;
  margin-bottom: 50px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: ${screenSizes.desktop}) {
    gap: 11px;
  }
`;

export { StyledMain, StyledMainContainer };