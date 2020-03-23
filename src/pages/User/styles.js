import styled from 'styled-components/native';
import { responsiveSize } from '../../styles/themes/responsive';
import colors from '../../styles/themes/colors';

export const Container = styled.View`
  flex: 1;
  padding: ${responsiveSize(30)}px;
  background: ${colors.ColorLightPrimary};
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: ${responsiveSize(20)}px;
  border-bottom-width: ${responsiveSize(1)}px;
  border-color: ${colors.ColorLightSecondary};
`;

export const Avatar = styled.Image`
  width: ${responsiveSize(100)}px;
  height: ${responsiveSize(100)}px;
  border-radius: ${responsiveSize(50)}px;
  background: ${colors.ColorLightSecondary};
`;

export const Name = styled.Text`
  font-size: ${responsiveSize(20)}px;
  color: ${colors.ColorBlackPrimary};
  font-weight: bold;
  margin-top: ${responsiveSize(10)}px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: ${responsiveSize(14)}px;
  margin-top: ${responsiveSize(5)}px;
  text-align: center;
  line-height: ${responsiveSize(18)}px;
  color: ${colors.ColorBlackSecondary};
`;

export const Login = styled.Text`
  font-size: ${responsiveSize(14)}px;
  text-align: center;
  line-height: ${responsiveSize(18)}px;
  color: ${colors.ColorBlackSecondary};
  margin-bottom: ${responsiveSize(5)}px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${responsiveSize(20)}px;
`;

export const Starred = styled.View`
  background: ${colors.ColorLightSemi};
  border-radius: ${responsiveSize(4)}px;
  padding: ${responsiveSize(10)}px ${responsiveSize(15)}px;
  align-items: center;
  margin-bottom: ${responsiveSize(20)}px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${responsiveSize(15)}px;
  color: ${colors.ColorBlackPrimary};
  font-weight: bold;
`;

export const OwnerAvatar = styled.Image`
  width: ${responsiveSize(42)}px;
  height: ${responsiveSize(42)}px;
  border-radius: ${responsiveSize(21)}px;
  background: ${colors.ColorLightSecondary};
`;

export const Info = styled.View`
  margin-left: ${responsiveSize(10)}px;
  flex: 1;
`;

export const Author = styled.Text`
  font-size: ${responsiveSize(13)}px;
  color: ${colors.ColorBlackSecondary};
`;
