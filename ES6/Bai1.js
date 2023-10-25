let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
let addCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },  
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    },
]
// Yeu cau 1
let newCourses = courses.filter((course) => course.rating >= 4 );
console.log(newCourses);
//Yeu cau 2
let newCourses2 = courses.map((course) => course.rating < 4 );
