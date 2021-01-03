Rails.application.routes.draw do
  root 'covers#index'
  post 'pdf', to: 'covers#pdf'
end
