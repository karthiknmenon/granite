class TasksController < ApplicationController        
    def index
        @tasks = Task.all
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render status: :ok, json: { notice: 'Task was successfully created' }
        else            
            render status: :unprocessable_entity, json: { errors: @task.errors.full_messages  }
        end   
    end



    private 
        def task_params
            params.require(:task).permit(:description, :title, :status)
        end
end
