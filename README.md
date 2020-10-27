# Granite

## Heroku Deployment

```
git add .
git commit -m "commit-message"
git push heroku HEAD:master
```

## Heroku DB - Migration

`heroku run rake db:migrate`

## Running on local

```
bundle install
bundle exec rails db:migrate
bundle exec rails server
```

## Reset Local DB

`rake db:reset`

## Routes

`rake routes | grep "route-name"`
