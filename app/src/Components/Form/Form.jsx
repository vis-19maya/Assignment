import React from 'react';
import './Form.css'; 

const Form = () => {
    return (
        <div className="blogbackgroundimage" style={{backgroundColor: 'blue'}}> 
            <br />
            <br />
            <div className="addblog">
                <div>
                    <h2>Add a New Blog</h2>
                </div>
                <div>
                    Blog Name:<input style={{height:'30px',width:'350px'}}
                    type="text" required placeholder="name"/>
                </div>
                <div>
                    Description :<textarea style={{height:'200px',width:'350px'}}
                    required placeholder="description"/>
                </div>
                <div>
                    Blog author:<input style={{height:'30px',width:'350px'}}
                    type="text" placeholder="author"/>
                </div>
                <div>
                    <button style={{height:'30px',width:'200px'}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Form;