const path = require("path")

const result = {
    profile: "https://res.cloudinary.com/dttwgojsj/image/upload/v1751116284/ngb8gtlbqudqxvdvcthk.avif"
}
console.log(path.basename(result.profile).split(".")[0]);

const base = path.basename(result.profile)
console.log(base)
console.log(base.split("."))

