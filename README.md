README
---

rails-fluxchat-example

- Rails 4.2
- ActionCable
- ES6
- React
- Flux (Alt)

## Demo

http://fluxchat.takeyu-web.com/

## Starting the servers

```bash
git clone https://github.com/takeyuweb/rails-fluxchat-example.git
cd rails-fluxchat-example
bundle install
bundle exec rake db:migrate
bundle exec rake bower:install
./bin/cable
bundle exec rails s
redis-server
```

Visit `http://localhost:3000`


## Using gems

- bower-rails
- react-rails
- sprockets-es6
- browserify-rails
- actioncable

## Heroku

memo

```bash
heroku create fluxchat --remote rails
heroku create fluxchat-actioncable --remote actioncable
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-multi.git --app fluxchat
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-multi.git --app fluxchat-actioncable
heroku config:add PROCFILE_PATH=Procfile.rails --app fluxchat
heroku config:add PROCFILE_PATH=Procfile.actioncable --app fluxchat-actioncable
heroku config:add REDIS_URL=redis://rediscloud:xxxxxxxxxxxxxx@pub-redis-18876.us-east-1-2.4.ec2.garantiadata.com:18876 --app fluxchat
heroku config:add REDIS_URL=redis://rediscloud:Qxxxxxxxxxxxxxxx@pub-redis-18876.us-east-1-2.4.ec2.garantiadata.com:18876 --app fluxchat-actioncable
heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-multi.git --app fluxchat-actioncable
heroku config:set DATABASE_URL=postgres://xxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxx@ec2-50-16-229-89.compute-1.amazonaws.com:5432/xxxxxxxxxxxxxxxxxxx --app fluxchat-actioncable

heroku domains:add fluxchat.takeyu-web.com --app fluxchat
heroku domains:add fluxchat-actioncable.takeyu-web.com --app fluxchat-actioncable
heroku config:set CABLE_URL=fluxchat-actioncable.takeyu-web.com --app fluxchat
heroku config:set CABLE_URL=fluxchat-actioncable.takeyu-web.com --app fluxchat-actioncable
heroku config:set CABLE_PORT=80 --app fluxchat
heroku config:set CABLE_PORT=80 --app fluxchat-actioncable
heroku config:set CABLE_PROTOCOL=ws --app fluxchat
heroku config:set CABLE_PROTOCOL=ws --app fluxchat-actioncable
heroku config:set COOKIE_DOMAIN=.takeyu-web.com --app fluxchat
heroku config:set COOKIE_DOMAIN=.takeyu-web.com --app fluxchat-actioncable
heroku config:set SECRET_KEY_BASE=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX --app fluxchat-actioncable

git push heroku heroku:master
git push actioncable heroku:master

heroku logs --tail --app fluxchat
heroku logs --tail --app fluxchat-actioncable
```

抜けあるかも

参考 http://stackoverflow.com/questions/31644603/deploying-ruby-on-rails-app-to-heroku-while-using-action-cable-puma-port-listen

