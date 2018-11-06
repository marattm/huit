import React, { Component, Fragment } from 'react';

import SearchFilterOptionsPrintType from './SearchFilterOptionsPrintType.withFormik';
import SearchFilterOptionsFilter from './SearchFilterOptionsFilter.withFormik';
import SearchFilterOptionsLanguage from './SearchFilterOptionsLanguage.withFormik';
import SearchFilterOptionsType from './SearchFilterOptionsType.withFormik';
import SearchFilterOptionsMaxResults from './SearchFilterOptionsMaxResults.withFormik';

class FilterOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            handleChange,
        } = this.props;
        return (
            <Fragment>

                <SearchFilterOptionsType
                    handleChange={handleChange}
                />

                <SearchFilterOptionsPrintType
                    handleChange={handleChange}
                />

                <SearchFilterOptionsFilter
                    handleChange={handleChange}
                />

                <SearchFilterOptionsLanguage
                    handleChange={handleChange}
                />

                <SearchFilterOptionsMaxResults
                    handleChange={handleChange}
                />

            </Fragment>
        )
    }
}


export default FilterOptions;
