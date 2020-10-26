class UsersController < ApplicationController

    def new
        render
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render status: :ok, json: { notice: 'Account created successfully!' }
        else
            render status: :unprocessable_entity, json: { errors: @user.errors.full_messages}
        end
    end
    
    private
    
        def user_params
            params.permit(:email, :password, :password_confirmation)
        end
end
