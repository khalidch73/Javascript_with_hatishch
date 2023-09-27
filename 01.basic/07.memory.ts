// two type of memory 
      // 01. stack used for all type of primitive data type. 
                   //make a copy of value all changed vale is in copy not in original value.
                   let id = 234
                   let new_id  = id
                   console.log(new_id);
                   new_id =34455
                   console.log(id);
                   console.log(new_id);
      // 02. heap used for non primitive data type.
                   // give you a original value reference all change in new variable will changed the original value
                   const objects ={
                      name : "ali",
                      id : 1334,
                      class: "fsc",
                   }
                   console.log(objects);
                   const new_Objects = objects
                   new_Objects.id = 3344
                   new_Objects.class ="ics"
                   console.log(objects);
                   
                   