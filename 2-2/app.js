const robots = [
    {
        name:'Johnny',
        power:500
    },
    {
        name:'Dorian',
        power: 600
    },
    {
        name: 'Teo',
        power:700

    },
    {
        name:'Lion ',
        power: 800
    },
    {
        name:'Alex',
        power:900
    }
 ]
 const therobots = [];

 for( let robot of robots) {
   if(robot.power > 700){
      therobots.push(robot.name)
     }
   }
  console.log(therobots)
 