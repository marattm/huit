import React, { Component } from 'react';
import { Media, Panel, PanelGroup} from 'react-bootstrap';


class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentDidMount() {
        this.render();
    };

    checkThumbnail(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} URL to the book's thumbnail.
         */
        try {
            if (info.imageLinks.smallThumbnail) {
                return info.imageLinks.smallThumbnail;
            }
        } catch (error) {
            console.log(error)
        }
    };
    checkTitle(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's title.
         */
        try {
            if (info.title) {
                return info.title;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkAuthors(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's authors.
         */
        try {
            if (info.authors) {
                return info.authors;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishers(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's publisher.
         */
        try {
            if (info.publisher) {
                return info.publisher;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkPublishedDate(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's publish date.
         */
        try {
            if (info.publishedDate) {
                return info.publishedDate;
            }
        } catch (error) {
            console.log(error);
            
        }
    };
    checkDescription(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's description.
         */
        try {
            if (info.description) {
                return info.description;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkPageCount(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's page count.
         */
        try {
            if (info.pageCount) {
                return info.pageCount;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkAverageRating(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's average rating.
         */
        try {
            if (info.averageRating) {
                return info.averageRating;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkCategories(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's categories.
         */
        try {
            var result = '';
            if (info.categories) {
                for (let i = 0; i < info.categories.length; i++) {
                    const element = info.categories[i];
                    result += element;
                }
                return result;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkPreviewLink(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's web reader link.
         */
        try {
            if (info.webReaderLink) {
                return info.webReaderLink;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkLanguage(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's language.
         */
        try {
            if (info.language) {
                return info.language;
            }
        } catch (error) {
            console.log(error);
            
        }
    }; 
    checkInfoLink(info) {
        /**
         * Check if the thumbnail info os available in the response json from the API call.
         * @param {json} info - Book information in JSON.
         * @return {string} Book's information link.
         */
        try {
            if (info.infoLink) {
                return info.infoLink;
            }
        } catch (error) {
            console.log(error);
            
        }
    };

    render() {
        return (
            <div>
                {this.props.books ?
                    this.props.books.map( (book) => {
                    return (
                        <PanelGroup accordion key={book.id} id={"panel-group-" + book.id}>
                            <Panel eventKey="1" bsStyle="info" id={"panel-" + book.id}>
                                <Panel.Heading id={"panel-heading" + book.id}>
                                    <Panel.Title toggle id={"panel-title" + book.id}>
                                        <Media id={"media-" + book.id}>
                                            <Media.Left id={"media-left-" + book.id}>
                                                <img width={64} height={64} alt='' src={this.checkThumbnail(book.volumeInfo)}/>
                                            </Media.Left>
                                            <Media.Body id={"media-body-" + book.id}>
                                                <Media.Heading id={"media-heading-" + book.id}>{this.checkTitle(book.volumeInfo)}</Media.Heading>
                                                <p>
                                                    {this.checkAuthors(book.volumeInfo)}, 
                                                    <em>   {this.checkPublishers(book.volumeInfo)}</em>, 
                                                    <em>   {this.checkPublishedDate(book.volumeInfo)}</em>
                                                </p>
                                            </Media.Body>
                                        </Media>
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible id={"panel-body-" + book.id}>
                                    <p><b>Description:</b> {this.checkDescription(book.volumeInfo)}</p>
                                    <p><b>Average Rating:</b> {this.checkAverageRating(book.volumeInfo)}/5</p>
                                    <p><b>Category:</b> {this.checkCategories(book.volumeInfo)}</p>
                                    <p><b>Page number:</b> {this.checkPageCount(book.volumeInfo)} pages</p>
                                    <p><b>Language:</b> {this.checkLanguage(book.volumeInfo)}</p>
                                    <p><a href={this.checkPreviewLink(book.accessInfo)} target="_blank">Preview</a></p>
                                    <p><a href={this.checkInfoLink(book.volumeInfo)} target="_blank">More..</a></p>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                    )
                })
                : "No results"}
            </div>
        )
    };
}

export default SearchResults;
