import { useState } from 'react';
import { Image } from '@mantine/core';
import { createStyles, Navbar, Group, Code, getStylesRef, rem, Avatar, Text, Space } from '@mantine/core';
import {
  IconApps,
  IconListCheck,
  IconUsersGroup,
  IconSettings,
  IconCalendarEvent,
  IconChevronsLeft,
  
} from '@tabler/icons-react';

import { InputWithButton } from '../searchButton';

const useStyles = createStyles((theme) => ({

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Dashboard', icon: IconApps },
  { link: '', label: 'Calendário', icon: IconCalendarEvent },
  { link: '', label: 'Task List', icon: IconListCheck },
  { link: '', label: 'Equipe', icon: IconUsersGroup },
  { link: '', label: 'Configurações', icon: IconSettings },
];

const user = [
    { name: 'Nicollas Moleta', job: 'Desenvolvedor', avatar: "https://static.gamersclub.com.br/teams/avatar/235755/235755.png" },
  ];


export function LeftNavbar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');


  const profile = user.map((item) => (
    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Avatar size={40} src={item.avatar} radius={40} />
      <div>
        <Text fz="sm" fw={500}>
          {item.name}
        </Text>
        <Text c="dimmed" fz="xs">
          {item.job}
        </Text>
      </div>
    </div>
  ));
  
      

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (

    
<Navbar width={{ sm: 250 }} p="md">

  <Navbar.Section grow>
    <Group p="sm" className={classes.header} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <Image src="https://media.discordapp.net/attachments/1072649911255969835/1140711189043761404/WhatsApp_Image_2023-08-14_at_15.17.441.jpeg" alt="Logo" stroke={1.5} width={140} height={36} />
      </div>
      
      <IconChevronsLeft />
      <Space h="xm" />
      <InputWithButton></InputWithButton>
    </Group>


    {links}
  </Navbar.Section>

      
      <Navbar.Section className={classes.footer} >
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>

          <Group spacing="sm">
           {profile}
        </Group>
        </a>

      </Navbar.Section>
    </Navbar>
  );
}