json.users @users do |user|
    json.value user.id
    json.label user.name
end