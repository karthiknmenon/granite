class TaskLoggerJob < ApplicationJob
  
  def perform()
    puts "Created task"
  end

end
