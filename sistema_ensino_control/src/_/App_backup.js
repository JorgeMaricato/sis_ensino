
/*
{"id":0,"Nome":"Zeca","Nascimento":"2021-05-31","Nacionalidade":"Mexicano","Naturalidade":"Cidade do México","Sexo":"Masculino","Nome_mae":"Lina","Conclusao_em":"2021-05-31","RG":"0001","RG_org_exp":"ssp","RG_uf":"sp","RG_data_exp":"2021-05-31","CPF":"355","Endereco":"Rua Principal","Email":"zeca@localhost","Telefone":11,"Banco_cod":1,"Banco_n_agen":2,"Banco_tipo_con":3,"Banco_num_con":4,"created_at":null,"updated_at":null}
*/
    form_component = (identifier) => {
        switch (identifier) {
            case "Nome":
                return (
                    <label>
                        Nome: 
                        <input className="mx-3" name="nome" type="text" value={this.state.Nome || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "Nacionalidade":
                return (
                    <label>
                        Nacionalidade: 
                        <input className="mx-3" name="nacionalidade" type="text" value={this.state.Nacionalidade || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "Naturalidade":
                return (
                    <label>
                        Naturalidade: 
                        <input className="mx-3" name="naturalidade" type="text" value={this.state.naturalidade || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "Nome_mae":
                return (
                    <label>
                        Nome da mãe: 
                        <input className="mx-3" name="nome_mae" type="text" value={this.state.nome_mae || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "sexo":
                return (
                    <label>
                        Sexo: 
                        <input className="mx-3" name="sexo" type="text" value={this.state.sexo || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "conclusao_em":
                return (
                    <label>
                        Conclusão em: 
                        <input className="mx-3" name="conclusao_em" type="text" value={this.state.conclusao_em || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "rg":
                return (
                    <label>
                        RG: 
                        <input className="mx-3" name="rg" type="text" value={this.state.rg || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "rg_org_exp":
                return (
                    <label>
                        Órgão Expedidor: 
                        <input className="mx-3" name="rg_org_exp" type="text" value={this.state.rg_org_exp || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "rg_uf":
                return (
                    <label>
                        UF: 
                        <input className="mx-3" name="rg_uf" type="text" value={this.state.rg_uf || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "rg_data_exp":
                return (
                    <label>
                        Data de Expedição: 
                        <input className="mx-3" name="rg_data_exp" type="text" value={this.state.rg_data_exp || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "cpf":
                return (
                    <label>
                        CPF: 
                        <input className="mx-3" name="cpf" type="text" value={this.state.cpf || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "nascimento":
                return (
                    <label>
                        Nascimento: 
                        <input className="mx-3" name="nascimento" type="text" value={this.state.nascimento || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "endereco":
                return (
                    <label>
                        Endereço: 
                        <input className="mx-3" name="endereco" type="text" value={this.state.endereco || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "email":
                return (
                    <label>
                        E-mail: 
                        <input className="mx-3" name="email" type="text" value={this.state.email || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "telefone":
                return (
                    <label>
                        Telefone: 
                        <input className="mx-3" name="telefone" type="text" value={this.state.telefone || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "banco_cod":
                return (
                    <label>
                        Banco (código): 
                        <input className="mx-3" name="banco_cod" type="text" value={this.state.banco_cod || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "banco_tipo_con":
                return (
                    <label>
                        Tipo de conta: 
                        <input className="mx-3" name="banco_tipo_con" type="text" value={this.state.banco_tipo_con || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "banco_n_agen":
                return (
                    <label>
                        Agência: 
                        <input className="mx-3" name="banco_n_agen" type="text" value={this.state.banco_n_agen || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            case "banco_num_con":
                return (
                    <label>
                        Número da conta: 
                        <input className="mx-3" name="banco_num_con" type="text" value={this.state.banco_num_con || ""} onChange={this.handleChange} disabled={this.state.disabled} />
                    </label>
                );
            default:
                return "";
                
        }

    }