class Api::FollowsController < ApplicationController
  def create
    @user = User.find_by_username(params[:id])
    @follow = Follow.new(followee_id: params[:id])
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows_of_follower.find_by_followee_id(params[:id])

    if @follow.destroy
      render :show
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:id, :follower_id, :following_id)
  end
end
