import React, { Component } from 'react';
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
            <div>
                <Collapse in={open}>
                    <div>
                        <SearchFilterOptionsType
                            type={type}
                            handleToggleChange={handleToggleChange}
                        />
                        <br />
                        <SearchFilterOptionsPrintType
                            printType={printType}
                            handleToggleChange={handleToggleChange}
                        />
                        <br />
                        <SearchFilterOptionsFilter
                            filter={filter}
                            handleToggleChange={handleToggleChange}
                        />
                        <br />
                        <SearchFilterOptionsLanguage
                            handleToggleChange={handleToggleChange}
                            handleSelectLanguageChange={handleSelectLanguageChange}
                        />
                        <br />
                        <SearchFilterOptionsMaxResults
                            maxResults={maxResults}
                            handleToggleChange={handleToggleChange}
                        />
                    </div>
                </Collapse>
            </div>
        )
    }
}


export default FilterOptions;
