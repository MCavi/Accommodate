Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:create, :show, :index]
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end