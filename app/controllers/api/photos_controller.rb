class Api::PhotosController < ApplicationController
  def index
    @photos = []
    current_user.followees.each do |followee|
      followee.photos.each do |photo|
        @photos << photo
      end
    end

    current_user.photos.each do |photo|
      @photos << photo
    end

    @photos



    render :index
  end

  def show

    @photo = Photo.find(params[:id])

    if @photo
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  # def current_user_liked(current_user)
  #   liked = false
  #   self.likes.each do |like|
  #     if(like.user_id == current_user.id)
  #       liked = true
  #     end
  #   end
  #   return liked
  # end
  #
  # def current_user_like_id(curret_user)
  #   id = nil
  #   self.likes.each do |like|
  #     if(like.user_id == current_user.id)
  #       id = like.id
  #     end
  #   end
  #   return id
  # end

  private

  def photo_params
    params.require(:photo).permit(:image, :caption)
  end
end
