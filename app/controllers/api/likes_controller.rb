class Api::LikesController < ApplicationController
  def create

    @like = Like.new(photo_id: params[:like][:photo_id])
    @like.user_id = current_user.id
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by_id(params[:id])
    if @like.destroy
      render :show
    end
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
