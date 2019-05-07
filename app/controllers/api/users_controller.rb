class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end 

    def create  
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            if params[:user][:email] == ""
                render json: ["Email can't be blank."], status: 401
            elsif params[:user][:first_name] == ""
                render json: ["First Name can't be blank."], status: 401
            elsif params[:user][:last_name] == ""
                render json: ["Last Name can't be blank."], status: 401
            elsif params[:user][:password] == ""
                render json: ["Password can't be blank."], status: 401
            else 
                render json: ["Invalid credentials"], status: 401
            end 
        end 
    end 

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end     

end 