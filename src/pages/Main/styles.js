import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { responsiveSize } from '../../styles/themes/responsive';
import colors from '../../styles/themes/colors';

export const Container = styled.View`
  flex: 1;
  padding: ${responsiveSize(30)}px;
  background: ${colors.ColorLightPrimary};
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

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${colors.ColorBlackPrimary};
  border-radius: ${responsiveSize(4)}px;
  margin-left: ${responsiveSize(10)}px;
  padding: ${responsiveSize(0)} ${responsiveSize(12)}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${responsiveSize(20)}px;
`;

export const User = styled.View`
  align-items: center;
  margin: ${responsiveSize(0)} ${responsiveSize(20)}px ${responsiveSize(30)}px;
`;

export const Avatar = styled.Image`
  width: ${responsiveSize(64)}px;
  height: ${responsiveSize(64)}px;
  border-radius: ${responsiveSize(32)}px;
  background: ${colors.ColorLightSecondary};
`;

export const Name = styled.Text`
  font-size: ${responsiveSize(14)}px;
  color: ${colors.ColorBlackPrimary};
  font-weight: bold;
  margin-top: ${responsiveSize(5)}px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: ${responsiveSize(13)}px;
  margin-top: ${responsiveSize(5)}px;
  text-align: center;
  line-height: ${responsiveSize(18)}px;
  color: ${colors.ColorBlackSecondary};
`;

export const ProfileButton = styled.TouchableOpacity`
  margin-top: ${responsiveSize(10)}px;
  align-self: stretch;
  border-radius: ${responsiveSize(5)}px;
  background: ${colors.ColorBlackPrimary};
  justify-content: center;
  align-items: center;
  height: ${responsiveSize(36)}px;
`;

export const ProfileButtoText = styled.Text`
  font-size: ${responsiveSize(14)}px;
  font-weight: bold;
  color: ${colors.ColorLightPrimary};
  text-transform: uppercase;
`;
