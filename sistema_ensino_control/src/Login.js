import React from 'react';
//import ReactDOM from 'react-dom';

//import './Login.css';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          strapi_url: this.props.strapi_url,
          identifier: '',
          password: '',
        }

    }

    
    getMsg = () => {
        switch (this.state.msg_type) {
            case "Error":
                return (
                    <div className="row my-1">
                        <div className="w-75 m-auto text-center alert alert-danger" role="alert">
                            Error: {this.state.msg_text}
                        </div>
                    </div>
                );
            case "Success":
                return (
                    <div className="row my-1">
                        <div className="w-75 m-auto text-center alert alert-success" role="alert">
                            {this.state.msg_text}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }
    
    login = () => {
        let url = this.state.strapi_url + "/auth/local";
        

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: this.state.identifier,
                password: this.state.password,
            }),
            })
            .then(response => {
                if (response.status === 405){
                    this.setState({msg_text:"Not allowed.", msg_type:"Error" })
                    return "";
                }
                else if (response.status === 400){
                    this.setState({msg_text:"Username and Password not accepted.", msg_type:"Error" })
                    return "";
                }
                else
                    return response.json();
            })
            .then(data => {
                if(data.jwt != null) {
                    this.props.get_jwt(data.jwt);
                }
                else if(data.statusCode !== 200 && data !== "")
                    this.setState({msg_text:"Error.", msg_type:"Error" })

            });
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){

        return (
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-12 text-center my-1">
                            LOGIN PANEL
                        </div>
                    </div>
                    { this.getMsg() }
                    <div className="row mb-2">
                        <div className="col-6 text-end my-1">
                            E-mail:
                        </div>
                        <div className="col-6 text-start my-1">
                            <input className="" name="identifier" type="text" value={this.state.identifier || ""} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-6 text-end my-1">
                            Password:
                        </div>
                        <div className="col-6 text-start my-1">
                            <input className="" name="password" type="password" value={this.state.password || ""} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12 text-center my-1">
                            <input type="submit" value="Login" onClick={() => this.login()}/>
                        </div>
                    </div>
                </div>
            );
        //return ("Logging...");
    }
}
/*

            <Form>
                <fieldset>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2em" }}
                    />
                  </FormGroup>
                </fieldset>
            </Form>
            */

export default Login;
