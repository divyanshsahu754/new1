import React, {useState, useEffect} from 'react'



const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    


    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);
    const[title,setTitle]=useState("")
    const[toggletitle,setToggleTitle]=useState(false)

    const addItem = () => {
        if (!inputData) {
            alert('plzz fill data');
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
                 setToggleSubmit(true);

                 setInputData('');

                 setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }

    
    
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

    
    
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);

    }
    

    
    const removeAll = () => {
         setItems([]);
    }

    
    useEffect(() => {
       localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);
    function handleTitle(e){
        setTitle(e.target.value)

    }
    function handleshowTitle(e){
        if(e.keyCode===13){

        setToggleTitle(!toggletitle)
        }
    }
    function handleshowTitleShow(){
        setToggleTitle(!toggletitle)
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    
                        {!toggletitle?<input onChange={handleTitle} placeholder='Add Title' value={title} onKeyDown={handleshowTitle}></input>
                        :<h1 onClick={handleshowTitleShow}>{title} </h1>}
                    

                    

                    <div className="showItems">
                        
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <button className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}> Edit</button>
                                            <button className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}> Delete</button>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                    <div className="addItems">
                        <input type="text" placeholder="+ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        {
                            toggleSubmit ? <button className="fa fa-plus add-btn" title="Add Item" onClick={addItem}>Add</button> :
                                 <button className="far fa-edit add-btn" title="Update Item" onClick={addItem}>Update This</button>
                        }
                       
                    </div>
                
                    
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> Remove all </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default Todo

