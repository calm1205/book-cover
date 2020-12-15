Rails.application.routes.draw do
  root 'covers#index'
  draw(:pdf)
end
