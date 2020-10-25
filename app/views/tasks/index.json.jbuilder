json.tasks @tasks do |task_item|
    json.id task_item.id
    json.title task_item.title
    json.description task_item.description
    json.status task_item.status
end