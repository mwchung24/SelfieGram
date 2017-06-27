class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
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
    params.require(:photo).permit(:image, :caption)
  end
end
