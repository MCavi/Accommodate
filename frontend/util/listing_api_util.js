export const fetchListings = (filters) => {
    return (
    $.ajax({
        method: "GET",
        url: '/api/listings',
        data: filters,
        error: (error) => console.log(error)
    })
)};

export const fetchListing = listingId => (
    $.ajax({method: "GET",
        url: `/api/listings/${listingId}`,
        error: (error) => console.log(error)
    })
)

// export const fetchListings = () => (
//     $.ajax({
//         method: "GET",
//         url: '/api/reviews'
//     })
// )

export const createReview = review => {
    return(
        $.ajax({
            method: "POST",
            url: `/api/reviews`,
            data: {review}
        })
    )
}

export const createListing = listing => (
    $.ajax({method: "POST",
    url: `/api/listings`,
    data: {listing},
    error: (error) => console.log(error)
    })
)

export const updateListing = listing => (
    $.ajax({
        method: "PATCH",
        url: `/api/listings/${listing.id}/`,
        data: {listing},
        error: (error) => console.log(error)
    })
)

export const deleteListing = listingId => (
    $.ajax({
        method: "DELETE",
        url: `/api/listings/${listingId}`
    })
)
