import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

export default ({ app, route }, inject) => {
    Vue.use(VueScrollTo, {
        onStart: function (element) {
            const hash = '#' + element.id;

            if (route.hash != hash) {
                app.router.replace(hash);
            }
        }
    });
};
