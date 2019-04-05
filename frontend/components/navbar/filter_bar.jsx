import React from 'react';
import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listings_actions';


class FilterBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            capacity: 2
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        
        this.setState({capacity: e.target.value})
        this.props.fetchListings(this.state)
        
    }



    render(){
        return (
            <div className="filter-bar">
                <div className="select-guests">
                    <label>Guests</label>
                    <select className="num-guests" 
                        value={this.state.selectValue}
                        onChange={this.handleChange} 
                        >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mdp = dispatch => ({
    fetchListings: filters => dispatch(fetchListings(filters))
})

export default connect(null, mdp)(FilterBar)