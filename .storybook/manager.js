import {addons} from '@storybook/addons'
import {create} from '@storybook/theming'


import logo from '../public/sideqst-logo-white-140.png'

addons.setConfig({
    theme: create({
        base: `dark`,
        brandTitle: `🏰 Qstbook 🗡️`,
        brandUrl: `https://sideqst.com`
    }) 
})