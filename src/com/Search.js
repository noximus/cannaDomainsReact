import React, { Component } from 'react';
import Modal from "./Modal";

const domainList = [
    {host:"CannaDomains",price:"150.00",noh:"500 mil hits"},
    {host:"DannaDomains2",price:"250.00",noh:"800 mil hits"},
    {host:"BannaDomains3",price:"350.00",noh:"1000 mil hits"}
]
class Search extends Component {
    constructor(props) {
        super();
        this.state = {
            domain: "Canna domains",
            searchField : "",
            newDomainList : domainList,
            Modal : false,
            selectedItem : null
        };

    }
    onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, 
            newDomainList : domainList.filter(
                (e) => {
                    const regEx = new RegExp(event.target.value, "gi");
                    return regEx.test(e.host);
                }
            )
        });
    }
    onModalPopUp = (obj) => {
        this.setState({ Modal: !this.state.Modal, selectedItem :obj });
        // console.log(obj);
    }
    
    render() {
        return (
            <div>
                <p className="lead form-group">
                    <input type="text" name="searchField" className="form-control inputTag" 
                        value={this.state.searchField}
                        onChange={(event) => this.onHandleChange(event)} />
                </p>
                <div>
                    <table className="table green">
                        <caption className="purple">* footer note List of users</caption>
                        <thead className="orange">
                            <tr>
                                <th scope="col">Key</th>
                                <th scope="col">domain</th>
                                <th scope="col">Price</th>
                                <th scope="col">Hits</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.newDomainList.map(
                            (obj,i) => {
                                return (
                                    <tr key={obj.host + i} onClick={() => {
                                        this.onModalPopUp(obj);
                                    }}>
                                        <th scope="row">{i}</th>
                                        <td>{obj.host}</td>
                                        <td>{obj.price}</td>
                                        <td>{obj.noh}</td>
                                    </tr>
                                )
                            } 
                        )}
                        </tbody>
                    </table> 
                    
                </div>
                { this.state.Modal ? <Modal {...this.state.selectedItem} onModalPopUp={this.onModalPopUp} /> : null }
            </div>
        );
    }
}

export default Search;