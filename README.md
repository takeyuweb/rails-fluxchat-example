README
---

rails-fluxchat-example

- Rails 4.2
- ActionCable
- ES6
- React
- Flux (Alt)

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
