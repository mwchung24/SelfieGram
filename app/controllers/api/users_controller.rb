class Api::UsersController < ApplicationController
  def index

    if params["users"]
      query = params["users"]
      return @users = User
        .where("username LIKE ? OR name LIKE ?", "%#{query}%", "%#{query}%").all
    else
      @users = User.all - [current_user]
    end
  end

  def show
    @user = User.find_by_username(params[:id])
    if @user
      @photos = @user.photos.order('photos.created_at DESC')
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update

    @user = User.find_by_id(current_user.id)

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :bio, :photo)
  end
end
