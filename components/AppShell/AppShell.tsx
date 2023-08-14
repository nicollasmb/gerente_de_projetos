import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  TextInputProps,
  useMantineTheme,
} from '@mantine/core';

import { InputWithButton } from '../searchButton';
import { LeftNavbar } from './Sidebar';

export default function AppShellDefault() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell 
    layout="alt"
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar  p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 80, lg: 250 }}>

        <LeftNavbar></LeftNavbar>
        </Navbar>
      }
      
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
          
        </MediaQuery>
      }
      footer={
        <Footer zIndex={0} height={60} p="md">
          Application footer
        </Footer>
      }
      header=  {
        
        <Header  height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Outlet />
  
    </AppShell>
      

  );
}