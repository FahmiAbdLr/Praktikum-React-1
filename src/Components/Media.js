import React, {Component} from "react";

class Media extends Component{
    render () {
        return (
            <div className={'row alert alert-' + this.props.type}>
                <div className='col col-auto'>
                    <img src={process.env.PUBLIC_URL+'/image/'+this.props.image} className="mr-3" width='100px' alt='media'/>
                </div>
                <div className='col col-auto text-left'>
                    <h4 className='mt-0' text>{this.props.title}</h4>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}

export default Media;