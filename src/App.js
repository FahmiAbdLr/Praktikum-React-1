import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Alert from './Components/Alert';
import Media from './Components/Media';
import FormOsis from './Components/Osis';
import Pancasila from './Components/Pancasila';
import { event } from 'jquery';

class App extends Component {
  render () {
    return (
      <div class = 'App'>
        {/* <div class = 'App-header'>
          <img src = {logo} className = "App-logo" alt = "logo react" />
          <h1 className='judul'>Hello World! I am a react component.</h1>
          <p className='sub-judul'>Belajar React Js itu mudah <strong> *mudah stres</strong></p>
          <div>
            <button className='btn btn-success' onClick={() => alert('Nggak kok, Coba aja dulu')}>Setuju</button>
            <span> </span>
            <button className='btn btn-info' onClick={() => alert('Iya, Mudah kok, Asal berusaha aja')}>Mudah Kok</button>
          </div>
        </div>

        <br/>
        <div className='App container col-sm-6'>
          <Alert/>
          <Alert/>
          <Alert/>
        </div>

        <div>
          <div className='App container col-sm-6'>
            <Alert type="danger" header="Fatal Error">
              This is danger alert
            </Alert>
            <Alert type="success" header="Berhasil">
              This is success alert
            </Alert>
            <Alert type="warning" header="Warning">
              This is warning alert
            </Alert>
          </div>
        </div>

        <div className='container'>
          <Media image="react.png" title="React Js" type="info">
            Framework untuk FrontEnd Development
          </Media>
          <Media image="node.png" title="Node Js" type="success">
            Framework untuk BackEnd Development
          </Media>
        </div>

        <div>
          <Alert type={this.state.type} header={this.state.header}>
            {this.state.content}
          </Alert>
          <hr/>
          <h4>Alert Control</h4>
          <b className='text-left'>Tipe Alert</b>
          <select className='form-control' name="type" value={this.state.type} onChange={this.changeTypeAlert}>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value='danger'>Danger</option>
            <option value="info">Info</option>
          </select>
          <b className='text-left'>Header Alert</b>
          <input type='text' name='header' className='form-control' value={this.state.header} onChange={this.changeHeaderAlert} />
          <b className='text-left'>Content Alert</b>
          <input type='text' name='content' className='form-control' value={this.state.content} onChange={this.changeContentAlert} />
        </div> */}


        <div className='Pancsila'>
          <h1 className="judul-pancasila">Pancasila</h1>
          <div>
            <Pancasila title="1. Ketuhanan Yang Maha Esa" image="sila-1.png"></Pancasila>
            <Pancasila title="2. Kemanusiaan yang Adil dan Beradab" image="sila-2.png"></Pancasila>
            <Pancasila title="3. Persatuan Indonesia" image="sila-3.png"></Pancasila>
            <Pancasila title="4. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan Dalam Permusyawaratan / Perwakilan" image="sila-4.png"></Pancasila>
            <Pancasila title="5. Keadilan Sosial bagi Seluruh Rakyat Indonesia" image="sila-5.png"></Pancasila>
          </div>
        </div>

        <div>
          <Button/>
        </div>

        <div>
          <br/>
          <h1>Form Pendaftaran OSIS</h1>
          <FormOsis/>
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      type: "info",
      header: 'Ini adalah "Tabel Alert"',
      content: "Anda bisa mengubahnya pada form di bawah"
    };
  }
  // fungsi untuk mengubah tipe
  changeTypeAlert = (event) => {
    this.setState({type: event.target.value});
  }
  // fungsi untuk mengubah isi Header
  changeHeaderAlert = (event) => {
    this.setState({header: event.target.value});
  }
  // fungsi untuk mengubah Content
  changeContentAlert = (event) => {
    this.setState({content: event.target.value});
  }
}

export default App;