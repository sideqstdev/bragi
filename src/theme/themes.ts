export const weights = {
    body: 400,
    heading: 700,
    bold: 700,
}

export const typography = {
    web_xxl: `40px`,
    web_xl: `32px`,
    web_lg: `24px`,
    web_md: `20px`,
    web_sm: `18px`,
    web_xs: `16px`,
    web_xxs: `14px`,
    web_tny: `12px`,
}

export const colors = {
    // dark colors
    dark: {
        night: `#282D34`, // for text
        lightblack: `#757575`, // for light text
        nightlight: `#333F50`, // for dark bg
        darkslategray1: `#282D34`, // for off-black text
        darkslategray2: `#21262B`, // for off-black bg
        slategray: `#242C37`,
        grayhaze: `#404F64`
    },
    light: {
        white: `#FFFFFF`,
        offwhite: `#F5F5F5`,
        lightgray1: `#E8E8E8`,
        lightgray2: `#E0E0E0`,
        lightgray3: `#ADADAD`,
    },
    reds: {
        red: `#EB596E`,
        reddark1: `#D45063`,
        reddark2: `#BC4758`,
        redlight1: `#ED6A7D`,
        redlight2: `#EF7A8B`,
        redmiddlelight: `#F5ACB7`,
        redmiddledark: `#762D37`,
    },
    blues: {
        blue: `#696BC9`,
        bluedark1: `#5F60B5`,
        bluedark2: `#5456A1`,
        bluelight1: `#787ACE`,
        bluelight2: `#8789D4`,
        bluemiddlelight: `#B4B5E4`,
        bluemiddledark: `#353665`,
    },
    greens: {
        green: `#69C997`,
        greendark1: `#5FB588`,
        greendark2: `#54A179`,
        greenlight1: `#78CEA1`,
        greenlight2: `#87D4AC`,
        greenmiddlelight: `#B4E4CB`,
        greenmiddledark: `#35654C`
    },
    purples: {
        purple: `#8D59EB`,
        purpledark1: `#7F50D4`,
        purpledark2: `#7147BC`,
        purplelight1: `#986AED`,
        purplelight2: `#A47AEF`,
        purplemiddlelight: `#C6ACF5`,
        purplemiddledark: `#472D76`,
    },
    yellows: {
        yellow: `#C9C769`,
        yellowdark1: `#B5B35F`,
        yellowdark2: `#A19F54`,
        yellowlight1: `#CECD78`,
        yellowlight2: `#D4D287`,
        yellowmiddlelight: `#E4E3B4`,
        yellowmiddledark: `#656435`,
    }
}

// non-static theme objects here

export const lightTheme = {
    colors: {
        // text & container colors
        text: colors.dark.darkslategray1,
        deemphasizedText: colors.dark.darkslategray2,
        invertText: colors.light.white,
        background: colors.light.white,
        backgroundAlt: colors.light.offwhite,

        // button & element colors
        default: colors.light.lightgray1,
        primary: colors.blues.bluelight1,
        confirm: colors.greens.green,
        danger: colors.reds.red,
        secondary: colors.light.white,
        themeMode: colors.purples.purplemiddledark,

        // color names
        blues: colors.blues,
        greens: colors.greens,
        reds: colors.reds,
        purples: colors.purples,
        yellows: colors.yellows,
        dark: colors.dark,
        light: colors.light,
    },
}

export const darkTheme = {
    colors: {
        // text & container colors
        text: colors.light.white,
        deemphasizedText: colors.light.lightgray1,
        invertText: colors.dark.darkslategray1,
        background: colors.dark.darkslategray2,
        backgroundAlt: colors.dark.darkslategray1,
        
        // button & element colors
        default: colors.dark.grayhaze,
        primary: colors.blues.blue,
        confirm: colors.greens.greenlight1,
        danger: colors.reds.reddark2,
        secondary: colors.dark.darkslategray2, // should be the same as background
        themeMode: colors.yellows.yellowmiddlelight,

        // color names
        blues: colors.blues,
        greens: colors.greens,
        reds: colors.reds,
        purples: colors.purples,
        yellows: colors.yellows,
        dark: colors.dark,
        light: colors.light,
    },
}

export const themes = {
    light: lightTheme,
    dark: darkTheme
}

export const text_xxl = {
    fontWeight: weights.heading
}

