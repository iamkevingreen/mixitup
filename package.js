Package.describe({
  name: "iamkevingreen:mixitup",
  git: "https://github.com/iamkevingreen/mixitup.git",
  summary: "Meteor packaging of patrickkunka/mixitup",
  "version": "2.1.7"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');

  api.addFiles('mixitup/src/jquery.mixitup.js', 'client');
});
