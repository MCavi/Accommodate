json.extract! user, :id, :email, :first_name, :last_name, :thumbnailUrl
json.photoUrl url_for(user.photo)
