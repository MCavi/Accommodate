Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:create, :show, :index]
    resources :reviews, only: [:create, :index]
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end