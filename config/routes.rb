Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :photos
    resource :session
    resources :follows
    resources :likes
    resources :comments
  end
end
