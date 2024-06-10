import { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
  //colorScheme: 'light',
  primaryColor: 'gray',
  colors: {
    indigo: [
      '#F5FBFF',
      '#A8DBFF',
      '#67BFFF',
      '#2FA8FF',
      '#0094FF',
      '#0080F0',
      '#006CC3',
      '#005BAA',
      '#004B8D',
      '#003E75',
    ],
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },
  shadows: {
    sm: '0px 1px 4px rgba(0, 0, 0, 0.12)',
    md: '4px 8px 24px rgba(0, 0, 0, 0.04)',
    lg: '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)',
  },
  breakpoints: {
    sm: '1000px',
    md: '1200px',
    lg: '1500px',
  },
  headings: {
    fontWeight: '400',
  },
  defaultRadius: 'md',
  /*globalStyles: (theme) => ({
    body: {
      color: theme.colors.gray[9],
      backgroundColor: theme.colors.gray[0],
    },
    [`& .mantine-Input-invalid:focus`]: {
      borderColor: theme.colors.red[7],
    },
    [`& .mantine-Checkbox-input`]: {
      borderRadius: theme.radius.sm,
    },
    [`& .mantine-Select-input`]: {
      color: theme.colors.gray[9],
    },
    [`& .mantine-Text-input`]: {
      color: theme.colors.gray[9],
    },
    [`& .mantine-Autocomplete-input`]: {
      color: theme.colors.gray[9],
    },
  }),*/
}
