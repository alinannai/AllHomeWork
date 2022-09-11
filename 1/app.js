const animals = {
    cat: {
        name: "Lily",
        age: 5,
        first_children: {
            name: "Bi",
            age: 2
        },
        second_children: {
            name: "Masya",
            age:3,
        }
    },
    dog: {
        name: "Kiki",
        age: 4,
        first_children:{
            name: "Rex",
            age: 1
        },
        second_children: {
            name: "Ru",
            age:2,
        }
    },
    cow: {
        name: "Rose",
        age:7,
        first_children: {
            name: "Grace",
            age:3
        },
        second_children:{
            name: "Sasha",
            age:4,
        }
    }
}
console.log(animals.cat.name + " Ей " + animals.cat.age + " лет ." + " Дети " + animals.cat.first_children.name + " Ему " + animals.cat.first_children.age + " годиков ," + animals.cat.second_children.name + " Ей " + animals.cat.second_children.age + " годиков." + animals.cow.name + " Ей " + animals.cow.age + " лет ." + " Дети " + animals.cow.first_children.name + " Ей " + animals.cow.first_children.age + " годиков ," + animals.cow.second_children.name + " Ей " + animals.cow.second_children.age + " годиков .");
