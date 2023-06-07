import React, { useState } from 'react'

function Todo() {
    const[inputData,setInputData]=useState("")
    const[lis,setlis]=useState([])
    function addItems(){

        if(inputData===""){
        alert("Please Write the Task")}
        else{
        setlis([...lis,inputData])
        setInputData("")
        }

    }
    function del(id){
        const filteredData=lis.filter((e,index)=>{
            return index!==id;

        })
        setlis(filteredData)

    }
  return (
    <div>
        <div className='main-div'>
            <div className='addItems'>
                <input type="text" placeholder='Add items' value={inputData} onChange={(e)=>setInputData(e.target.value)}></input>
               <button onClick={addItems} >Add</button> 

            </div>
            <div className='show-items'>
                <div className='each items'>
                    {lis.map((e,index) => {
                        return(
                        <div key={index} className='eachitems'>
                            <h3>{e}</h3>
                            <button onClick={()=>{del(index)}}>Delete</button>
                            </div>
                        )


                    })}

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Todo
