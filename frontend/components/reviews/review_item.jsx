import React from 'react';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
    }

    render() {
        const month = this.months[Number(this.state.created_at.slice(5, 7)) - 1]
        const year = Number(this.state.created_at.slice(0, 4))
        return (
            <>
                <div className="review-container">
                    <div className="review-top-div">
                        <div className="author-thumbnail"><img src={window.defaultThumbnail} /></div>
                        <div className="author-date">
                            <p className="author-first-name">{this.state.first_name}</p>
                            <p className="review-created-date">{month} {year}</p>
                        </div>
                    </div>
                    <div className="review-body">
                        {this.state.body}
                    </div>
                </div>
                <div className="shadow-line"></div>

            </>
        )

    }

}

export default ReviewItem; 