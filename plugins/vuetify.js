import "vuetify/styles";
import { createVuetify } from "vuetify";
import '@mdi/font/css/materialdesignicons.css';

const customLightTheme = {
  dark: false,
  colors: {
  	/* Vuetify theme settings */
    primary: '#36c', /* WMF: accent50 */
    secondary: '#202122', /* WMF: base10 */
    accent: '#f8f9fa', /* WMF: base90 */
    error: '#d33', /* WMF: red50 */
    info: '#ac6600', /* WMF: yellow30 */
    success: '#00af89', /* WMF: green50 */
    warning: '#fc3', /* WMF: yellow50 */

    /* Additional Wikimedia style guide colors by name */
    base10: '#202122',
    base20: '#54595d',
    base30: '#72777d',
    base80: '#e0e0e0',
    base90: '#f8f9fa',
    base100: '#fff',
    accent90: '#eaf3ff',
    accent50: '#36c',
    red50: '#d33',
    green50: '#00af89',
    yellow30: '#ac6600',
    yellow50: '#fc3',
    yellow90: '#fef6e7',

    /* Colors from Toolhub logo */
    logoblue: '#069',
    logogreen: '#396',
    logored: '#900'
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme
    }
  }
});


