import React, {Component} from "react";

class Pancasila extends Component{
    render () {
        return (
            <div className="container-pancasila">
                <hr/>
                <div className="gambar-sila">
                    <img src={process.env.PUBLIC_URL+'/image/'+this.props.image} alt='media'/>
                    <div className="nama-sila">
                        <h4 className="mt-0">{this.props.title}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pancasila;