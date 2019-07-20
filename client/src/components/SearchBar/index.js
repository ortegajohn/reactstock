import React from "react";
import "./style.css";

const SearchBar = props => {
    return (
        <div className="searchDiv">
        <form>
            <div className="form-group">
                <label className="StockSearch"><h3>Search For Stock</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchStock"
                    placeholder="Enter Stock's Ticker"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.refresh}>
                Refresh
            </button>    
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.getUserId}>
                get user id
            </button>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.logout}>
                Logout
            </button>

            
        </form>
        </div>
    )
 }


export default SearchBar;
