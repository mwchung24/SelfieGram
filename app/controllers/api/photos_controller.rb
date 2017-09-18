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

    @photos.sort_by! do |photo|
      photo[:created_at]
    end
    return @photos = @photos.reverse[photo_params[:start].to_i..photo_params[:end].to_i]
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

  private

  def photo_params
    params.require(:photo).permit(:image, :caption, :start, :end)
  end
end
