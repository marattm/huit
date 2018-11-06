import React, { Component, Fragment } from 'react';
import { Collapse } from 'react-bootstrap';

import SearchFilterOptionsPrintType from './SearchFilterOptionsPrintType';
import SearchFilterOptionsFilter from './SearchFilterOptionsFilter';
import SearchFilterOptionsLanguage from './SearchFilterOptionsLanguage';
import SearchFilterOptionsType from './SearchFilterOptionsType';
import SearchFilterOptionsMaxResults from './SearchFilterOptionsMaxResults';

class FilterOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            open,
            type,
            printType,
            filter,
            maxResults,
            handleToggleChange,
            handleSelectLanguageChange
        } = this.props;
        return (
            <Fragment>
                <Collapse in={open}>
                    <div>
                        <SearchFilterOptionsType
                            type={type}
                            handleToggleChange={handleToggleChange}
                        />

                        <SearchFilterOptionsPrintType
                            printType={printType}
                            handleToggleChange={handleToggleChange}
                        />

                        <SearchFilterOptionsFilter
                            filter={filter}
                            handleToggleChange={handleToggleChange}
                        />

                        <SearchFilterOptionsLanguage
                            handleToggleChange={handleToggleChange}
                            handleSelectLanguageChange={handleSelectLanguageChange}
                        />

                        <SearchFilterOptionsMaxResults
                            maxResults={maxResults}
                            handleToggleChange={handleToggleChange}
                        />
                    </div>
                </Collapse>
            </Fragment>
        )
    }
}


export default FilterOptions;
