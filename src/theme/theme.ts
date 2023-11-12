export default {
    palette: {
      primary: {
        main: '#152f2e',
        dark: '#1c2334',
        light: '#00c2c5',
      },
      secondary: {
        main: '#FFB81D',
        dark: '#404348',
        light: '#C89C76',
        lighter: '#EFECEC',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920,
      },
    },
    // spacing: (factor = 1) => baseSize * factor,
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1440,
    //     xl: 1920,
    //   },
    // },
    // typography: {
    //   htmlFontSize: baseFontSize,
    //   fontFamily: `'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    //   pxToRem: (size) => `${size / baseFontSize}rem`,
    //   ...headingTypography,
    //   subtitle1: {
    //     fontWeight: 400,
    //     fontSize: '1rem', // 16px
    //     letterSpacing: -0.2,
    //     lineHeight: 1.5, // 24px
    //   },
    //   subtitle2: {
    //     fontWeight: 500,
    //     fontSize: '0.875rem', // 14px
    //     letterSpacing: -0.1,
    //     lineHeight: 1.5, // 24px
    //   },
    //   body1: {
    //     ...baseTypography,
    //   },
    //   body2: {
    //     fontWeight: 400,
    //     fontSize: '0.75rem', // 12px
    //     letterSpacing: 0,
    //     lineHeight: 1.333333333333333, // 16px
    //   },
    //   button: {
    //     fontWeight: 700,
    //     fontSize: '0.875rem', // 14px
    //     letterSpacing: 0.2,
    //     lineHeight: 1.428571428571429, // 20px
    //     textTransform: 'none',
    //   },
    // },
    // palette: {
    //   primary: {
    //     light: '#C9D9F2',
    //     main: '#015FFF',
    //     dark: '#24489E',
    //     contrastText: neutralWhite,
    //   },
    //   destructive: {
    //     light: '#FFC3B6',
    //     main: '#DB322D',
    //     dark: '#AB1117',
    //     contrastText: neutralWhite,
    //   },
    //   warning: {
    //     light: '#FEF8E2',
    //     main: '#F0D354',
    //     dark: '#C3A127',
    //     contrastText: darkContrast,
    //   },
    //   error: {
    //     light: '#FFD5CC',
    //     main: '#F76F72',
    //     dark: '#CC5C5E',
    //     contrastText: darkContrast,
    //   },
    //   success: {
    //     light: '#EBFFDE',
    //     main: '#7EBB69',
    //     dark: '#4E783B',
    //     contrastText: darkContrast,
    //   },
    //   info: {
    //     light: '#D8F1FA',
    //     main: '#3DBBE7',
    //     dark: '#2A8AAE',
    //     contrastText: darkContrast,
    //   },
    //   text: {
    //     primary: '#072448',
    //     secondary: secondarySlate,
    //     disabled: '#9DA2A7',
    //     hint: '#70757a',
    //     contrast: neutralWhite,
    //   },
    //   grey: {
    //     50: '#F5FAFF',
    //     100: '#F0F5FA',
    //     200: '#E9EEF3',
    //     300: '#DBE0E5',
    //     400: '#B8BDC2',
    //     500: '#999EA3',
    //     600: '#70757A ',
    //     700: '#5C6166',
    //     800: '#3D4247',
    //     900: '#1C2126',
    //     A100: '#E0EAF8', // nav items
    //     A200: '#7390CF', // textFilled background
    //     A400: '#031B37', // nav footer
    //     A700: '#072A51', // nav header
    //   },
    //   divider: '#DBE0E5',
    //   background: {
    //     default: neutralWhite,
    //     paper: neutralWhite,
    //   },
    //   action: {
    //     activatedOpacity: 0.16,
    //     active: secondarySlate,
    //     disabled: '#BABDC0',
    //     disabledBackground: '#DBE0E5',
    //     disabledOpacity: 0.4,
    //     focus: alpha(secondarySlate, 0.16),
    //     focusOpacity: 0.16,
    //     hover: alpha(secondarySlate, 0.08),
    //     hoverOpacity: 0.08,
    //     selected: alpha(secondarySlate, 0.12),
    //     selectedOpacity: 0.12,
    //   },
    //   dataVisualization: {
    //     blue50: '#4E7AD7',
    //     purple90: '#53366A',
    //     purple50: '#A56BD3',
    //     red90: '#7A3738',
    //     red60: '#E26668',
    //     cyan80: '#256784',
    //     magenta50: '#E46DBB',
    //     blue70: '#24489E',
    //     green60: '#689F50',
    //     cyan90: '#0B4A64',
    //     cyan60: '#2CA7D0',
    //     orange90: '#7D4817',
    //     yellow70: '#C3A127',
    //     purple70: '#7C519F',
    //     orange40: '#FBA657',
    //     red70: '#CC5C5E',
    //     yellow50: '#F0D354',
    //     blue80: '#183978',
    //   },
    // },
    // shape: {
    //   borderRadius: 8,
    //   borderRadiusSmall: 4,
    //   borderRadiusRound: '50%',
    // },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       '::-moz-focus-inner': {
    //         border: 0,
    //       },
    //       body: {
    //         ...baseTypography,
    //       },
    //       ...headingTypography,
    //       '*, body': {
    //         fontVariantNumeric: 'tabular-nums',
    //         scrollbarWidth: 'thin',
    //         scrollbarColor: `${secondarySlate} transparent`,
    //         '&::-webkit-scrollbar': {
    //           borderRadius: 3,
    //           height: 6,
    //           width: 6,
    //         },
    //         '&::-webkit-scrollbar-track': {
    //           backgroundColor: 'transparent',
    //         },
    //         '&::-webkit-scrollbar-corner': {
    //           backgroundColor: 'transparent',
    //         },
    //         '&::-webkit-scrollbar-thumb': {
    //           backgroundColor: secondarySlate,
    //           borderRadius: 3,
    //           outline: 0,
    //         },
    //       },
    //     },
    //   },
    // },
    // overrides: {
    //   sovosNavigation: {
    //     headerBackground: '#072a51',
    //     gradientTop: '#07335e',
    //     gradientBottom: '#072448',
    //     footerBackground: '#031b37',
    //     navItemHover: alpha('#74bfff', 0.08),
    //     navItemForeground: '#e0eaf8',
    //     highlights: '#015fff',
    //     productNameColor: alpha('#74bfff', 0.75),
    //   },
    // },
  }