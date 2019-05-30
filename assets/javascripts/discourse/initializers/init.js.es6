import { withPluginApi } from "discourse/lib/plugin-api";


function initialize(api){
  api.modifyClass('component:categories-only', {
    didRender() {
      this.$('.subcategories').addClass('hidden');
      $('.toggleBtn-cat').on('click',function (e) {
        e.preventDefault();
        $(this).parent().find('.subcategories').toggleClass('hidden');
      });
    }
  });
}
export default {
  name: 'main-category',
  initialize(container) {debugger
    const siteSettings = container.lookup("site-settings:main");
      withPluginApi("0.8.7", initialize);
  }
};


