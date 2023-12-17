   
   
   import { useState } from "react"
   
   function SomaliQoutes(){

 const[index, setIndex] =useState(0)
  const  maahmaah =[
   



    
    "1. far kaligeed fool ma dhaqdo",
    "2.ninki seexda saciis dabi dhalay",
    "3. hal fadhi ayaa wadar fadhi ka kacsho ",
    "4.Abal qof kale lkn qof gudo wow yar yahay",
    "5.dhagax meel dhaw bow ku dhacaa dhawaqna meel dheer",
    "6.laba kala bariday kala war la",
    ".7 hubsimo hal geel baa la siista",
    "8.gacmo wada jirbay wax ku goyan",
    ".9 beentaada hore runtaada danbo u baas baxda",
    ".kor waayeel waa wada indho"
  ]

  const nextBtn = ()=>{
    setIndex(index+1)
    
  }

  
  const PreviousBtn =() =>{
    if(index>0)
    setIndex(index- 1)
 
  }


  
     return <div  className="text-center">
        <h1 style={{display:index===maahmaah.length -1? "block":"none"}} className="font-bold text-center text-4xl text-red-500 ">Dhamaad</h1>
        <p style={{color : index=== 2 ? "red":""}} className="text-center mt-6">{maahmaah[index]}</p>

        <button onClick={PreviousBtn} className="bg-blue-400 py-8 px-3 rounded text-white mt-4">Previous</button>
        <button onClick={nextBtn} className="bg-blue-400 py-8 px-3 rounded text-white ml-10"> Next</button>

     </div>
   }

   export default SomaliQoutes