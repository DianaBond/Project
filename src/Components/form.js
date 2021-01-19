import React from "react";
class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.weatherMethod}>
                <div className="row">
                        <div className="col-sm-6">
                            <input type="text" name="city" placeholder="Город"/>
                        </div>
                        <div className="col-sm-6">
                            <button>Получить погоду</button>
                        </div>
                     </div>
            </form>
        );
    }
}

export default Form;