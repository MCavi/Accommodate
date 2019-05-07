class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      if params[:user][:email] == ""
        render json: ["Email can't be blank."], status: 401
      elsif params[:user][:password] == ""
        render json: ["Password can't be blank."], status: 401
      else
        render json: ["Invalid credentials"], status: 401
      end 
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    end
  end
end