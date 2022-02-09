import Vue from 'vue';
import Vuetify from 'vuetify'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
	theme: {
		themes: {
			light: {
				primary: '#1A8750',
				secondary: '#6c757d',
				success: '#22bd86',
				titlegreen: '#29AB4A',
			}
		},
		options: {
			customProperties: true
		},
	},
});
