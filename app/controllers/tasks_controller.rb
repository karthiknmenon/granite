class TasksController < ApplicationController           
    def index
        @tasks = Task.all
    end

    def create
        @task = Task.new(task_params)
        if @task.save!
            render status: :ok, json: { notice: 'Task was successfully created' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end   
    end

    def update        
        @task = Task.find_by(params[:id])
        if @task.update(task_params)
            render status: :ok, json: { notice: 'Task was updated successfully' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end 
    end

    def destroy
        @task = Task.find_by(params[:id])
        if @task.destroy
            render status: :ok, json: { notice: 'Task was deleted successfully' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end  
    end

    private 
        def task_params
            params.permit(:description, :title, :status)
        end
end
