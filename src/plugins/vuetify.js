import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#22bd86',
				secondary: '#6c757d',
				success: '#22bd86',
				background: '#292b2f',
			}
		},
		options: {
			customProperties: true
		},
	},
});
