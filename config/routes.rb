Rails.application.routes.draw do
  root "static_pages#index"

  resources :quizzes, only: %i[index show new create destroy]
end
