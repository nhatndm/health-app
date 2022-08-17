import React, { FC, useState, useMemo } from 'react';
import { Container, Grid, Popper, Fade, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Hamburger from 'hamburger-react';

// LOGO
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as MyRecord } from 'assets/svg/icon_memo.svg';
import { ReactComponent as Challenge } from 'assets/svg/icon_challenge.svg';
import { ReactComponent as News } from 'assets/svg/icon_info.svg';

// COMPONENTS
import Icon from 'components/icon';

// STYLE
import {
  HeaderWrapper,
  HamburgerIconWrapper,
  HamburgerIcon,
  HamburgerMenuContentWrapper,
  HamburgerMenuContentItem
} from './styles';

interface IProps {
  isAuthenticated?: boolean;
}

const Header: FC<IProps> = ({ isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLSpanElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { t: locale } = useTranslation(['layout']);

  const renderHamburgerMenu = useMemo(() => {
    if (isAuthenticated) {
      return (
        <>
          <HamburgerMenuContentItem>{locale('myrecord')}</HamburgerMenuContentItem>
          <HamburgerMenuContentItem>{locale('weightChart')}</HamburgerMenuContentItem>
          <HamburgerMenuContentItem>{locale('target')}</HamburgerMenuContentItem>
          <HamburgerMenuContentItem>{locale('course')}</HamburgerMenuContentItem>
          <HamburgerMenuContentItem>{locale('list')}</HamburgerMenuContentItem>
          <HamburgerMenuContentItem>{locale('setting')}</HamburgerMenuContentItem>
        </>
      );
    }

    return (
      <>
        <HamburgerMenuContentItem>{locale('list')}</HamburgerMenuContentItem>
        <HamburgerMenuContentItem>{locale('setting')}</HamburgerMenuContentItem>
      </>
    );
  }, [locale, isAuthenticated]);

  return (
    <HeaderWrapper>
      <Popper transition anchorEl={anchorEl} open={openMenu} placement="bottom-end">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <HamburgerMenuContentWrapper>{renderHamburgerMenu}</HamburgerMenuContentWrapper>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Container>
        <Grid container alignItems="center" rowSpacing={2}>
          <Grid item sm={5} xs={12}>
            <Icon IconComponent={Logo} />
          </Grid>
          <Grid item sm={2} xs={12}>
            {isAuthenticated && <Icon IconComponent={MyRecord} text={locale('myrecord')} />}
          </Grid>
          <Grid item sm={2} xs={12}>
            {isAuthenticated && <Icon IconComponent={Challenge} text={locale('challenge')} />}
          </Grid>
          <Grid item sm={2} xs={12}>
            <Icon IconComponent={News} text={locale('news')} />
          </Grid>
          <Grid item sm={1} xs={12}>
            <HamburgerIconWrapper>
              <HamburgerIcon
                onClick={(e) => {
                  setOpenMenu((toggled) => !toggled);
                  setAnchorEl(e.currentTarget);
                }}
              >
                <Hamburger toggled={openMenu} />
              </HamburgerIcon>
            </HamburgerIconWrapper>
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
