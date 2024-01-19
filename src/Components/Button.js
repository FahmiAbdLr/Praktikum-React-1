import React, {Component} from "react";

class Button extends Component {
    render(){
        return(
            <div className="container-button">
                <div className="button">
                    <button className="button-merah">Merah</button>
                    <button className="button-kuning">Kuning</button>
                    <button className="button-hijau">Hijau</button>
                    <button className="button-putih">Putih</button>
                    <button className="button-hitam">Hitam</button>
                </div>
            </div>
        )
    }
}

export default Button;