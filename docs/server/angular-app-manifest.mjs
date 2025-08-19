
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/testNew/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/testNew/login",
    "route": "/testNew"
  },
  {
    "renderMode": 2,
    "route": "/testNew/directors"
  },
  {
    "renderMode": 2,
    "route": "/testNew/home"
  },
  {
    "renderMode": 2,
    "route": "/testNew/actors"
  },
  {
    "renderMode": 2,
    "route": "/testNew/categories"
  },
  {
    "renderMode": 2,
    "route": "/testNew/history"
  },
  {
    "renderMode": 2,
    "route": "/testNew/login"
  },
  {
    "renderMode": 2,
    "route": "/testNew/register"
  },
  {
    "renderMode": 2,
    "route": "/testNew/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 980, hash: 'c2145b9fb7a99c626e7c884b9ffe819aec478dfedc9200958567cb9fef62071b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1493, hash: '2d089b2f474f19a59b9c0c9ee3fc28267cb96b1a5542c7ea6b7bf5072d590faf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'directors/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/directors_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'actors/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/actors_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8098, hash: 'e352e78ad92516bec39d1821272b5687461f2f9e3b21b5261cadc2d02e26fa8b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7511, hash: '5fab3c24800ef4b1eac6f32bff59b796be942bf0fff69b67554f3db7182f8c70', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
