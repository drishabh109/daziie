export default function Product(){

    return(
        <>
        <div className="customer">
            <h2>Edit Product</h2><br/>
         <div className='div' >
            <h3 style={{margin:30 ,textAlign:'left' }}>ID</h3>
            <div className='div4'>
            <p>&nbsp;&nbsp;&nbsp;AAA1</p>
            </div>
            <div className="div7">
                <span className='div6'></span>
            <p><b>Select your product picture</b></p>
            <button>Browser</button>
            </div>
            <h3 style={{margin:30 ,textAlign:'left' }}>Product Name</h3>
            <div className='div4'>
            <p>&nbsp;&nbsp;&nbsp;Cappuccino</p>
            </div>
            <h3 style={{margin:30 ,textAlign:'left' }}>Category</h3>
            <div className='div4'>
            <p>&nbsp;&nbsp;&nbsp;Drink</p>
            </div>
            <h3 style={{margin:30 ,textAlign:'left' }}>Price</h3>
            <div className='div4'>
            <p>&nbsp;&nbsp;&nbsp;$3</p>
            </div>
            <h3 style={{margin:30 ,textAlign:'left' }}>Discription</h3>
            <div className='div5'>
            <p>&nbsp;&nbsp;&nbsp;A cappuccino is an espreeso-based coffee drink that originated in italy, and is traditionally prepared with steamed milk foam (microfoam)</p>
            </div>
            <div className="div8"><button>Save</button><b style={{color:'#E2E2EA'}}>Cancel</b></div>
            </div>
        </div>
        </>
    )
}