// import React from 'react';


function Items(props) {
    console.log(props)

    const moveToTop = () => {
        const firstItem = "A";
        props.items.sort((x,y)=>{ return x.code === firstItem ? -1 : y.code === firstItem ? 1 : 0; });
    }
  return (
    <div>
        <ul>
        {props.items.map((item,index) =><li key={index} onClick={moveToTop}>{item}</li>)}


        </ul>
    </div>
  );
}

export default Items;
