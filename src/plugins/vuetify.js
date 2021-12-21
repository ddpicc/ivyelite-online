import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
	theme: {
		themes: {
			light: {
				primary: '#22bd86',
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
