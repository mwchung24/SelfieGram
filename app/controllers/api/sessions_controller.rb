class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username or Password"], status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Not Logged In"], status: 404
    end
  end

  def update
    @user = User.find_by_id(current_user.id);
    if @user.update(currentUser_params)
      render "api/users/show"
    end
  end

  private

  def currentUser_params
    params.require(:user).permit(:followees)
  end

end
