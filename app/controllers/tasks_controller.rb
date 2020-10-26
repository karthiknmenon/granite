class TasksController < ApplicationController           
    def index
        @tasks = Task.all
    end

    def new 
        @users = User.all        
    end

    def create
        @task = Task.new(task_params)
        p @task
        if @task.save!
            render status: :ok, json: { notice: 'Task was successfully created' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end   
    end

    def update        
        @task = Task.find(params[:id])
        if @task.update(task_params)
            render status: :ok, json: { notice: 'Task was updated successfully' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end 
    end

    def destroy
        @task = Task.find(params[:id])

        p '--------------'
        p params[:id]
        p @task
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
