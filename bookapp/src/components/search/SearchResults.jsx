import React, { Component } from 'react';
import { Media, Panel, PanelGroup } from 'react-bootstrap';


class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    checkInfo(key, info) {
        /**
         * Check if the info link info is available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's information link.
         */
        try {
            if (key === 'smallThumbnail') {
                if (info.imageLinks.smallThumbnail) {
                    return info.imageLinks.smallThumbnail;
                }
            }
            else if (key === 'categories') {
                var result = '';
                if (info.categories) {
                    for (let i = 0; i < info.categories.length; i++) {
                        let element = info.categories[i];
                        result += element;
                    }
                    return result;
                }
            }
            else {
                if (info[key]) {
                    return info[key];
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div className='container'>
                {this.props.books ?
                    this.props.books.map((book) => {
                        return (
                            <PanelGroup accordion key={book.id} id={"panel-group-" + book.id} style={{ backgroundColor: 'transparent' }}>
                                <Panel eventKey="1" bsStyle="info" id={"panel-" + book.id} style={{ backgroundColor: 'transparent' }}>
                                    <Panel.Heading id={"panel-heading" + book.id} style={{ backgroundColor: `rgba(${255}, ${255}, ${255}, ${0.85})`, color: 'black' }}>
                                        <Panel.Title toggle id={"panel-title" + book.id}>
                                            <Media id={"media-" + book.id}>
                                                <Media.Left id={"media-left-" + book.id}>
                                                    <img width={64} height={64} alt='' src={this.checkInfo('smallThumbnail', book.volumeInfo)} />
                                                </Media.Left>
                                                <Media.Body id={"media-body-" + book.id}>
                                                    <Media.Heading id={"media-heading-" + book.id}><strong>{this.checkInfo('title', book.volumeInfo)}</strong></Media.Heading>
                                                    <p style={{ textAlign: 'right' }}> <em>
                                                        {this.checkInfo('authors', book.volumeInfo)},
                                                       {this.checkInfo('publisher', book.volumeInfo)},
                                                       {this.checkInfo('publishedDate', book.volumeInfo)}
                                                    </em></p>
                                                </Media.Body>
                                            </Media>
                                        </Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible id={"panel-body-" + book.id} style={{ backgroundColor: `rgba(${253}, ${246}, ${228}, ${0.85})`, color: 'black' }}>
                                        <p><b>Description:</b> {this.checkInfo('description', book.volumeInfo)}</p>
                                        <p><b>Average Rating:</b> {this.checkInfo('averageRating', book.volumeInfo)}/5</p>
                                        <p><b>Category:</b> {this.checkInfo('categories', book.volumeInfo)}</p>
                                        <p><b>Page number:</b> {this.checkInfo('pageCount', book.volumeInfo)} pages</p>
                                        <p><b>Language:</b> {this.checkInfo('language', book.volumeInfo)}</p>
                                        <p><a href={this.checkInfo('webReaderLink', book.accessInfo)} target="_blank">Preview</a></p>
                                        <p><a href={this.checkInfo('infoLink', book.volumeInfo)} target="_blank">More..</a></p>
                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                        )
                    })
                    : <p style={{ color: 'white' }}>No results</p>}
            </div>
        )
    }
}

export default SearchResults;
