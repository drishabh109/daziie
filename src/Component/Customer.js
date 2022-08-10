import filter from './Img/filter.svg';
import threedots from './Img/threedots.svg';
import SEARCH from './Img/SEARCH.svg';

export default function Customer(){

    return(
        <>
        <div className="customer">
            <h2>Customer</h2><br/>
         <div className='div' >
            <div className='div3'>
            <div className='ab'>
            <img width={25} src={SEARCH} /><input placeholder="Search Here.."/></div>
            <img src={filter} /><img src={threedots} /> <br/>
            </div>
         <table>
            <div className='div2'>
            <tr >
                <td style={{padding:70}} ><b>ID</b></td>
                <td style={{padding:110}}><b>Name</b></td>
                <td style={{padding:35}}><b>Join Date</b></td>
                <td style={{padding:100}}><b>Total Visit</b></td>
                <td style={{padding:20}}><b>Purchased Items</b></td>
                <td style={{padding:60}}><b>Total Spend</b></td>
            </tr>
            </div>
            <tr>
                <td>XXX1</td>
                <td>Arlene McCoy</td>
                <td>1 February 2021</td>
                <td>2</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$490.51</td>
            </tr>
            <tr>
                <td>XXX2</td>
                <td>Savannah Nguyen</td>
                <td>3 February 2021</td>
                <td>3</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$396.84</td>
            </tr>
            <tr>
                <td>XXX3</td>
                <td>Jacob Jones</td>
                <td>5 February 2021</td>
                <td>6</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$406.27</td>
            </tr>
            <tr>
                <td>XXX4</td>
                <td>Jerome Bell</td>
                <td>1 February 2021</td>
                <td>12</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$767.50</td>
            </tr>
            <tr>
                <td>XXX5</td>
                <td>Cody Fisher</td>
                <td>18 February 2021</td>
                <td>14</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$475.22</td>
            </tr>
            <tr>
                <td>XXX6</td>
                <td>Kathryn Murphy</td>
                <td>12 February 2021</td>
                <td>53</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$601.13</td>
            </tr>
            <tr>
                <td>XXX7</td>
                <td>Jane Cooper</td>
                <td>1 February 2021</td>
                <td>21</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$293.01</td>
            </tr>   
            <tr>
                <td>XXX8</td>
                <td>Ronald Richards</td>
                <td>15 February 2021</td>
                <td>31</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$948.55</td>
            </tr>  
            <tr>
                <td>XXX9</td>
                <td>Theresa Webb</td>
                <td>21 February 2021</td>
                <td>41</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$928.41</td>
            </tr> 
            <tr>
                <td>XXX10</td>
                <td>Jane Cooper</td>
                <td>11 February 2021</td>
                <td>6</td>
                <td>americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)<br/><div style={{color:'#5541D7'}}><b>Sea Details</b></div></td>
                <td>$473.85</td>
            </tr>          
            </table>
            </div>
        </div>
        </>
    )
}