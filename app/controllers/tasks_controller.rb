class TasksController < ApplicationController    
    before_action :authorized    

    def show
        @task = Task.find(params[:id])
        authorize @task
        @comments = @task.comments
        if @comments.empty? 
            render status: :ok, json: { notice: 'Comments Fetched Successfully', task: @task, comments: 'No Comments' }
        else
            render status: :ok, json: { notice: 'Comments Fetched Successfully', task: @task, comments: @comments }
        end
    end

    def index
        @tasks = policy_scope(Task)
    end

    def new 
        @users = User.all        
    end

    def create
        @task = Task.new(task_params)        
        @task.creator_id = @current_user.id                               
        authorize @task
        if @task.save!
            render status: :ok, json: { notice: 'Task was successfully created' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end   
    end

    def update        
        @task = Task.find(params[:id])
        authorize @task
        if @task.update(task_params)
            render status: :ok, json: { notice: 'Task was updated successfully' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end 
    end

    def destroy
        @task = Task.find(params[:id])
        authorize @task
        if @task.destroy
            render status: :ok, json: { notice: 'Task was deleted successfully' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end  
    end

    def archive 
        @task = Task.find(params[:id])        
        if @task.status == "active"
            @task.update(status: "archived")
            render status: :ok, json: { notice: 'Task was archived successfully' }
        else
            @task.update(status: "active")
            render status: :ok, json: { notice: 'Task was unarchived successfully' }
        end
    end

    private 
        def task_params
            params.permit(:description, :title, :status, :user_id)
        end
end
