class ApplicationController < ActionController::Base    
    protect_from_forgery unless: -> { request.format.json? }
    
    include Pundit
    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    helper_method :current_user
    
    def authorized
        redirect_to '/' unless current_user
    end

    private

    def user_not_authorized
        flash[:warning] = "All accesssable tasks are listed below."
        redirect_to '/'
    end
end
