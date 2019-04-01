export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    };

    updateMarkers(listings) {
        listings.filter(listing => !this.markers[listing.id])
            .forEach(newlisting => this.createMarkerFromListing(newlisting, this.handleClick));

        Object.keys(this.markers)
            .filter(listingId => !listings[listingId])
            .forEach((listingId) => this.removeMarker(this.markers[listingId]));
    }
    createMarkerFromListing(listing) {
        const position = new google.maps.LatLng(listing.lat, listing.long);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id
        });

    //     addmarker.Listener('click', () => this.handleClick(bench));
    //     this.markers[marker.benchId] = marker;
    // }
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    };
};