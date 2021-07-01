import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//import './Aluno.css';

/*
{"id":0,"Nome":"Zeca","Nascimento":"2021-05-31","Nacionalidade":"Mexicano","Naturalidade":"Cidade do México","Sexo":"Masculino","Nome_mae":"Lina","Conclusao_em":"2021-05-31","RG":"0001","RG_org_exp":"ssp","RG_uf":"sp","RG_data_exp":"2021-05-31","CPF":"355","Endereco":"Rua Principal","Email":"zeca@localhost","Telefone":11,"Banco_cod":1,"Banco_n_agen":2,"Banco_tipo_con":3,"Banco_num_con":4,"created_at":null,"updated_at":null}
*/
class Aluno extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {body: this.props.body};
      this.state = {
          strapi_url:'http://localhost:1337/alunos',
          searchbar_Id: "",
          layout:"initial",
          disabled:true,
          msg_text: null,
          msg_type: null,
          //JSON
          "id":null,
          "Nome":null,
          "Nascimento":null,
          "Nacionalidade":null,
          "Naturalidade":null,
          "Sexo":null,
          "Nome_mae":null,
          "Conclusao_em":null,
          "RG":null,
          "RG_org_exp":null,
          "RG_uf":null,
          "RG_data_exp":null,
          "CPF":null,
          "Endereco":null,
          "Email":null,
          "Telefone":null,
          "Banco_cod":null,
          "Banco_n_agen":null,
          "Banco_tipo_con":null,
          "Banco_num_con":null
        }

    }

    findOne = (id) => {
        let url = this.state.strapi_url + "/" + parseInt(id);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200)
                return response.json();
            else {
                var data = {}
                data["status"] = response.status;
                data["msg"] = "Register not found.";

                return data;
            }
        } )
        .then(data => {
            if (data.msg != null)
                this.setState({layout: "initial", msg_text: data.msg, msg_type: "Error"});
            else {
                this.setState({layout:"find_one", msg_text:null, msg_type:null, disabled:true });
                this.setData(data);
            }
        });
    }

    saveForm = () => {
        let url = this.state.strapi_url;
        //let data = this.getData();
        let data = this.getData2();

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then(response => {
            if (response.status === 200)
                return response.json();
            else {
                var data = {}
                data["status"] = response.status;
                data["msg"] = "Database error.";

                return data;
            }
        })
        .then(data => {
            console.log("saveForm:");
            console.log(data.id);

            if (data.id != null) {
                this.setState({layout: "initial", msg_text: "Register created.", msg_type: "Success"});
                this.setData(data);
            }
            else
                this.setState({layout: "create_new", msg_text: data.msg, msg_type: "Error"});
        });
    }

    deleteId = (id) => {
        let url = this.state.strapi_url + "/" + parseInt(id);
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 200)
                return response.json();
            else {
                var data = {}
                data["status"] = response.status;
                data["msg"] = "Database error.";

                return data;
            }
        } )
        .then(data => {
            console.log(data);

            if (data.id != null) {
                this.setState({layout: "initial", msg_text: "Register deleted.", msg_type: "Success"});
            }
            else
                this.setState({layout: "initial", msg_text: data.msg, msg_type: "Error"});
        });

    }

    updateRegister = () => {
        let url = this.state.strapi_url + "/" + this.state.id;
        let data = this.getData();

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then(response => {
            if (response.status === 200)
                return response.json();
            else {
                var data = {}
                data["status"] = response.status;
                data["msg"] = "Database error.";

                return data;
            }
        })
        .then(data => {
            console.log("updateRegister:");
            console.log(data.id);

            if (data.id != null) {
                this.setState({layout: "find_one", disabled: true, msg_text: "Register updated.", msg_type: "Success"});
                this.setData(data);
            }
            else
                this.setState({msg_text: data.msg, msg_type: "Error"});
        });
    }

    getData = () => {
        var data = JSON.stringify({
            //id:this.state.id,
            Nome:this.state.Nome, Nascimento:this.state.Nascimento, Nacionalidade:this.state.Nacionalidade,Naturalidade:this.state.Naturalidade, Sexo:this.state.Sexo, Nome_mae:this.state.Nome_mae, Conclusao_em:this.state.Conclusao_em, RG:this.state.RG, RG_org_exp:this.state.RG_org_exp, RG_uf:this.state.RG_uf, RG_data_exp:this.state.RG_data_exp, CPF:this.state.CPF, Endereco:this.state.Endereco, Email:this.state.Email, Telefone:this.state.Telefone, Banco_cod:this.state.Banco_cod, Banco_n_agen:this.state.Banco_n_agen, Banco_tipo_con:this.state.Banco_tipo_con, Banco_num_con:this.state.Banco_num_con
        })

        return data;
    }

    getData2 = () => {
        var data = JSON.stringify({
            Nome:'a', Nascimento:"2000-01-01", Nacionalidade:"a", Naturalidade:"a", Sexo:"sexo", Nome_mae:"nome_mae", Conclusao_em:"2000-01-01", RG:"1", RG_org_exp:"a", RG_uf:"aa", RG_data_exp:"2000-01-01", CPF:"1", Endereco:"a", Email:"a", Telefone:1, Banco_cod:1, Banco_n_agen:1, Banco_tipo_con:1, Banco_num_con:1
        })

        return data;
    }

    setData = (data) => {
        if (data != null)
            this.setState({
                id:data["id"], Nome:data["Nome"], Nascimento:data["Nascimento"], Nacionalidade:data["Nacionalidade"], Naturalidade:data["Naturalidade"], Sexo:data["Sexo"], Nome_mae:data["Nome_mae"], Conclusao_em:data["Conclusao_em"], RG:data["RG"], RG_org_exp:data["RG_org_exp"], RG_uf:data["RG_uf"], RG_data_exp:data["RG_data_exp"], CPF:data["CPF"],
                Endereco:data["Endereco"], Email:data["Email"], Telefone:data["Telefone"], Banco_cod:data["Banco_cod"], Banco_n_agen:data["Banco_n_agen"], Banco_tipo_con:data["Banco_tipo_con"], Banco_num_con:data["Banco_num_con"]
            })
        else
            this.setState({
                id:null, Nome:null, Nascimento:null, Nacionalidade:null, Naturalidade:null, Sexo:null, Nome_mae:null, Conclusao_em:null, RG:null, RG_org_exp:null, RG_uf:null, RG_data_exp:null, CPF:null, Endereco:null, Email:null, Telefone:null, Banco_cod:null, Banco_n_agen:null, Banco_tipo_con:null, Banco_num_con:null
            });
    }

    handleSubmit_searchbar = (e) => {
        e.preventDefault();

        if (!isNaN(this.state.searchbar_Id))
            this.findOne(this.state.searchbar_Id);
    }
    
    handleChange_searchbar = (e) => {
        var new_value = "";
        if (e.target.value !== "")
            new_value = parseInt(e.target.value);

        if (isNaN(new_value))
            new_value = '';

        this.setState({searchbar_Id: new_value});
    }

    //BAR AND CONTROL
    layout = () => {
        switch(this.state.layout) {
            case "initial":
                return (        
                    <div className="container-fluid mt-5">
                        <header>
                            { this.top_bar("main") }
                            { this.top_bar("searchbar") }
                        </header>
                        { this.getMsg() }

                    </div>
                );
            case "create_new":
                return (
                    <div className="container-fluid mt-5">
                        <header>
                            { this.top_bar("main") }
                            { this.top_bar("searchbar") }
                        </header>
                        { this.getMsg() }

                        { this.top_bar("create_new") }
                        <div className="row mb-2">
                            { this.form_header() }
                            { this.form() }
                        </div>
                    </div>
                );
            case "find_one":
                return (
                    <div className="container-fluid mt-5">
                        <header>
                            { this.top_bar("main") }
                            { this.top_bar("searchbar") }
                        </header>
                        { this.getMsg() }

                        { this.top_bar("pre_edit") }
                        <div className="row mb-2">
                            { this.form_header() }
                            { this.form() }
                        </div>
                    </div>
                );
            default:
                return null;
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

    
    top_bar = (identifier) => {
        var state_default = {searchbar_Id:"", msg_text:null, msg_type:null}

        switch(identifier) {
            case "main":
                var state_create_new = Object.assign({}, state_default, {layout: "create_new", disabled: false});

                return (
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <input className="mx-2" type="submit" value="Create New" onClick={() => {
                                this.setState(state_create_new);
                                this.setData(null); } } />
                        </div>
                    </div>
                );
            case "searchbar":
                return (
                    <div className="row mb-2">
                        <div className="col-12 text-center my-1">
                            <form onSubmit={this.handleSubmit_searchbar}>
                                <label>Search an "Id": 
                                    <input className="mx-3" type="text" value={this.state.searchbar_Id} onChange={this.handleChange_searchbar} />
                                </label>
                                <input type="submit" value="Find" />
                            </form>
                        </div>
                    </div>
                );
            case "create_new":
                var state_cancel = Object.assign({}, state_default, {layout: "initial", "disabled":true});
                return (
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <input className="mx-2" type="submit" value="Save" onClick={() => this.saveForm()} />
                            <input className="mx-2" type="submit" value="Cancel" onClick={() => this.setState(state_cancel)} />
                        </div>
                    </div>
                );
            case "pre_edit":
                var button_edit;
                var state_enable_edit;
                var edit_function;

                if (this.state.disabled) {
                    button_edit = "Enable Update";
                    state_enable_edit = {layout:"find_one","disabled":false};
                    edit_function = () => {this.setState(state_enable_edit)}
                }
                else {
                    button_edit = "Update";
                    //state_enable_edit = {layout:"find_one","disabled":true};
                    edit_function = () => {this.updateRegister()}
                }
                
                return (
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <input className="mx-2" type="submit" value={button_edit} onClick={() => edit_function()} />
                            <input className="mx-2 btn-danger" type="submit" value="Delete" onClick={() => this.deleteId(this.state.id)} />
                        </div>
                    </div>
                );
            
            default:
                return "";
        }
    }

    //FORMULARY
    form_header = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">Id: { this.state.id }</div>
                </div>
            </div>
        );
    }
    form = () => {
        return(
            <div className="container-fluid">
                <form>
                <div className="row my-1">
                    <div className="col-12">{ this.form_component("Nome") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("Nacionalidade") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Naturalidade") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12">{ this.form_component("Nome_mae") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("Sexo") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Conclusao_em") }</div>
                </div>
                <div className="row mt-5 mb-1">
                    <div className="col-12 col-md-6">{ this.form_component("RG") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("RG_org_exp") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("RG_uf") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("RG_data_exp") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("CPF") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Nascimento") }</div>
                </div>
                <div className="row mt-5 mb-1">
                    <div className="col-12">{ this.form_component("Endereco") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("Email") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Telefone") }</div>
                </div>
                <div className="row mt-5 mb-1">
                    <div className="col-12 col-md-6">{ this.form_component("Banco_cod") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Banco_tipo_con") }</div>
                </div>
                <div className="row my-1">
                    <div className="col-12 col-md-6">{ this.form_component("Banco_n_agen") }</div>
                    <div className="col-12 col-md-6">{ this.form_component("Banco_num_con") }</div>
                </div>
                </form>
            </div>
        );
    }

    
    handleChange = (e) => {
        //var data = this.getData(); console.log(data);
        this.setState({ [e.target.name]: e.target.value });
    }

    
    form_component = (identifier) => {
        var text, name, value;
        var component = null;

        switch (identifier) {
            case "Nome":
                component = "text"; text = "Nome:"; name = "Nome"; value = this.state.Nome; break;
            case "Nacionalidade":
                component = "text"; text = "Nacionalidade:"; name = "Nacionalidade"; value = this.state.Nacionalidade; break;
            case "Naturalidade":
                component = "text"; text = "Naturalidade:"; name = "Naturalidade"; value = this.state.Naturalidade; break;
            case "Nome_mae":
                component = "text"; text = "Nome da mãe:"; name = "Nome_mae"; value = this.state.Nome_mae; break;
            case "Sexo":
                component = "text"; text = "Sexo:"; name = "Sexo"; value = this.state.Sexo; break;
            case "Conclusao_em":
                component = "date"; text = "Conclusão em:"; name = "Conclusao_em"; value = this.state.Conclusao_em; break;
            case "RG":
                component = "text"; text = "RG:"; name = "RG"; value = this.state.RG; break;
            case "RG_org_exp":
                component = "text"; text = "Órgão Expedidor:"; name = "RG_org_exp"; value = this.state.RG_org_exp; break;
            case "RG_uf":
                component = "text"; text = "UF:"; name = "RG_uf"; value = this.state.RG_uf; break;
            case "RG_data_exp":
                component = "date"; text = "Data de expedição:"; name = "RG_data_exp"; value = this.state.RG_data_exp; break;
            case "CPF":
                component = "text"; text = "CPF:"; name = "CPF"; value = this.state.CPF; break;
            case "Nascimento":
                component = "date"; text = "Nascimento:"; name = "Nascimento"; value = this.state.Nascimento; break;
            case "Endereco":
                component = "text"; text = "Endereço:"; name = "Endereco"; value = this.state.Endereco; break;
            case "Email":
                component = "text"; text = "E-mail:"; name = "Email"; value = this.state.Email; break;
            case "Telefone":
                component = "text"; text = "Telefone:"; name = "Telefone"; value = this.state.Telefone; break;
            case "Banco_cod":
                component = "text"; text = "Banco (código):"; name = "Banco_cod"; value = this.state.Banco_cod; break;
            case "Banco_tipo_con":
                component = "text"; text = "Tipo de conta:"; name = "Banco_tipo_con"; value = this.state.Banco_tipo_con; break;
            case "Banco_n_agen":
                component = "text"; text = "Agência:"; name = "Banco_n_agen"; value = this.state.Banco_n_agen; break;
            case "Banco_num_con":
                component = "text"; text = "Número da conta:"; name = "Banco_num_con"; value = this.state.Banco_num_con; break;
            default:
                component = "text"; text = ""; name = ""; value = null; break;
        }

        switch(component) {
            case "text":
            case "date":
                return (
                    <label className="w-100">
                        {text} <br/>
                        <div className="w-100 text-center">
                            <input className="w-75" name={name} type={component} value={value || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                        </div>
                    </label>
                );

            default:
                return null;
        }
    }


    render() {
        /*
        var layout = this.layout("initial");

        return (
            <div className="Aluno">
                { layout }
            </div>
        );*/
        
        return (
            <View>
                Test
            </View>
        );
    }
}

export default Aluno;
