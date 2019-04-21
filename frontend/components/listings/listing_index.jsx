import React from 'react';
import ListingIndexItem from './listing_index_item';
import {Link} from 'react-router-dom'
import MarkerManager from '../../util/marker_manager';
import NavBar from '../navbar/navbar';
import FilterBar from '../navbar/filter_bar';

class ListingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.idleListener = this.idleListener.bind(this);
    };

    idleListener() {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
            northEast: { lat: north, lng: east },
            southWest: { lat: south, lng: west }
        };

        this.props.fetchListings({ bounds });
    }

    componentDidMount(){
        
        const mapOptions = {
            center: new google.maps.LatLng(40.751359, -73.983930),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        window.map = this.map;
        this.MarkerManager = new MarkerManager(this.map);

        this.listener = google.maps.event.addListener(this.map, 'idle', this.idleListener);

    };

    componentDidUpdate(oldProps){
        
        if (oldProps.listings != this.props.listings) {
            this.MarkerManager.updateMarkers(this.props.listings);
        }
    }

    componentWillUnmount() {
        google.maps.event.removeListener(this.listener);
    }

    render(){
        const listingItems = this.props.listings.map(listing => {
            debugger
            const markerOptions = {
                position: new google.maps.LatLng(listing.lat, listing.long),
                map: this.map
            }

            const marker = new google.maps.Marker(markerOptions);
            return (
                <a key={listing.id} className="grid-link" href={`/#/listings/${listing.id}`}>
                    <div className="grid-item">
                        <ListingIndexItem 
                            listing={listing} 
                        />
                    </div>
                </a>
            )
        });


        
       

        return (
            <>
                <NavBar /> 
                {/* <FilterBar /> */}
                <div className="listing-index">
                    <div id="map"></div>
                    
                    <div className="grid-container">
                        {listingItems}
                    </div>
                </div>
            </>
        );

    };

};

export default ListingIndex;