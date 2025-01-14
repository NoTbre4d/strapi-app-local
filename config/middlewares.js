module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000', 'http://localhost:1337', 'http://127.0.0.1:3000'],
      headers: [
        'Content-Type',
        'Authorization',
        'X-Frame-Options',
        'Access-Control-Allow-Headers',
        'Origin',
        'Accept',
        'Pragma',
        'Cache-Control'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];