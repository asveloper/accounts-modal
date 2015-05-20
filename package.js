Package.describe({
    summary: "Make signup and signin their own modals.",
    version: '0.0.1',
    name: "asveloper:accounts-modal",
    githubUrl: 'https://github.com/asveloper/accounts-modal.git',
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['iron:router@1.0.3', 'softwarerero:accounts-t9n@1.0.3', 'joshowens:simple-form@0.2.2', 'sacha:spin@2.0.4'], ['client', 'server']);
  // CLIENT
  api.use([
    'deps',
    'service-configuration',
    'accounts-base',
    'underscore',
    'templating',
    'handlebars',
    'session',
    'coffeescript',
    'less',
    'sha',
    'twbs:bootstrap'
    ], 'client');


  api.addFiles([
  ], 'client');

  // SERVER
  api.use([
    'deps',
    'service-configuration',
    'accounts-password',
    'accounts-base',
    'underscore',
    'coffeescript'
  ], 'server');

  api.addFiles(['server/entry.coffee'], 'server');

  // CLIENT and SERVER
  api.imply('accounts-base', ['client', 'server']);
  api.imply('accounts-password', ['client', 'server']);
  api.addFiles(['shared/router.coffee'], ['client', 'server']);

});
