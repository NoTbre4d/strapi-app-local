module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http://*', 'https://*'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://*', 'https://*'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://*', 'https://*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000', 'http://localhost:1337', 'http://127.0.0.1:3000'],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'Cache-Control',
        'Pragma',
        'X-Requested-With'
      ],
      exposedHeaders: ['Content-Range', 'X-Total-Count'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      credentials: true,
      maxAge: 86400
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];