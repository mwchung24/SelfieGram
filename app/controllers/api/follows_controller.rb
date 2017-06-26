class Api::FollowsController < ApplicationController
  def create
    @user = User.find_by_username(params[:id])
    @follow = Follow.new(follow_params)

    if @follow.save
      render 'api/users/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])

    if @follow.destroy
      render 'api/users/show'
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:id, :follower_id, :following_id)
  end
end
