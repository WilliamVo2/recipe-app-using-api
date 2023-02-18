import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const userData = [
      {
        firstName: "Tommy",
        lastName: "Jon",
        email: "tommyjon@gmail.com",
        cryptedPassword: "12345"
      },
      {
        firstName: "Amy",
        lastName: "Jon",
        email: "amyjon@gmail.com",
        cryptedPassword: "12345" 
      },
      {
        firstName: "Larry",
        lastName: "Tee",
        email: "teelarry@gmail.com",
        cryptedPassword: "12345"
      },
      {
        firstName: "Sony",
        lastName: "Jon",
        email: "sonnyjon@gmail.com",
        cryptedPassword: "12345"
      }
    ]
    for (const userSeed of userData) {
      const currentUser = await User.query().findOne({ email: userSeed.email})
      if(!currentUser){
        await User.query().insert(userSeed)
      }
    }
  }
}

export default UserSeeder