import SavedRecipe from '../components/SavedRecipe'
import CreatedRecipe from '../components/CreatedRecipe'

const Profile = () => {
  return (
    <div>
      <div>
        <h1>profile</h1>
        <h3>Username: Zaddy</h3>
        <h3>img:Puppy</h3>
        <h4>Favorite Dish: Burgers</h4>
      </div>
      <div>
        <CreatedRecipe />
      </div>
      <div>
        <SavedRecipe />
      </div>
    </div>
  )
}

export default Profile
