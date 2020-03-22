import styled from 'styled-components/native';
import { responsiveSize } from '../../styles/themes/responsive';
import colors from '../../styles/themes/colors';

export const Container = styled.View`
  flex: 1;
  padding: ${responsiveSize(30)}px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: ${responsiveSize(20)}px;
  border-bottom-width: ${responsiveSize(1)}px;
  border-color: ${colors.ColorGainsboro};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.ColorBlackPrimary,
})`
  flex: 1;
  height: ${responsiveSize(50)}px;
  background: ${colors.ColorGainsboro};
  border-radius: ${responsiveSize(4)}px;
  padding: ${responsiveSize(0)} ${responsiveSize(15)}px;
  border: ${responsiveSize(1)}px solid ${colors.ColorLightSecondary};
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${colors.ColorBlackPrimary};
  border-radius: ${responsiveSize(4)}px;
  margin-left: ${responsiveSize(10)}px;
  padding: ${responsiveSize(0)} ${responsiveSize(12)}px;
`;
