import 'uno.css';
import { createSSRApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import { Lazyload } from 'vant';

export function createApp() {
  const app = createSSRApp(App).use(store);
  app.use(Lazyload);
  return {
    app
  };
}

