// const tinderUser = new Object() //singleton object
const tinderUser = {}  //non singelton

tinderUser.id = "123abc"
tinderUser.name = "Sana"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "any@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saba",
            lastname: "fatima"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  // spread values
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //key and vaues in array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in english",
    price: "999",
    courseInstructor: "english"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Saba",
//     "coursename": "js in english",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
