import React from 'react';

export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator" style={{display: 'block', textAlign: 'center', marginTop: '100px', tabSize:"100px"}}>
             <img src={require("../img/loading.gif")} style={{height:"350px"}} class="img-fluid" alt=""></img>
              <div>Loading</div>
        </div>
    );
}