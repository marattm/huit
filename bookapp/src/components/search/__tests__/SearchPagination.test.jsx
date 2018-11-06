import React from 'react';
import { mount } from 'enzyme';

import SearchPagination from '../SearchPagination';

describe('SearchPagination renders properly', () => {

    let props;
    let mountedSearchPagination;
    const searchPagination = () => {
        if (!mountedSearchPagination) {
            mountedSearchPagination = mount(
                <SearchPagination {...props} />
            );
        }
        return mountedSearchPagination;
    }

    beforeEach(() => {
        props = {
            displayDisabled: undefined,
            previousButtonDisabled: undefined,
            startIndex: undefined,
            query: undefined,
            bot: undefined
        };
        mountedSearchPagination = undefined;
    });


    it('always render div component properly', () => {
        let element = searchPagination().find('div');
        expect(element.length).toBe(1);
    })
    it('always render Pager component properly', () => {
        let element = searchPagination().find('Pager');
        expect(element.length).toBe(1);
    })

    // describe(" CASE 1", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 2", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 3", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 4", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 5", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 6", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 7", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 8", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 9", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 10", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 11", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(false); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 12", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(false); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 13", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true);
    //     })
    // });
    // describe(" CASE 14", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false);
    //     })
    // });
    // describe(" CASE 15", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // need to return to the user that he must put something in the field in case he erase it
    //     })
    // });
    // describe(" CASE 16", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = false;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#bottom');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false);
    //     })
    // });



    // describe(" CASE 1 BIS", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 2 BIS", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 3 BIS", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 4 BIS", () => {
    //     beforeEach(() => {
    //         props.previousButtonDisabled = false;
    //         props.displayDisabled = false;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 5 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 6 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 7 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 8 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = false;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders nothing', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(0);
    //     })
    // });
    // describe(" CASE 9 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 10 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 11 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(false); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 12 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = false;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(false); // meaning disabled button
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to "); // depend on the startIndex === 0
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false); // if nothing is in the query field
    //     })
    // });
    // describe(" CASE 13 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true);
    //     })
    // });
    // describe(" CASE 14 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 0;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results from ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false);
    //     })
    // });
    // describe(" CASE 15 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = '';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.length).toBe(3);
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(true); // need to return to the user that he must put something in the field in case he erase it
    //     })
    // });
    // describe(" CASE 16 BIS", () => {
    //     beforeEach(() => {
    //         props.displayDisabled = true;
    //         props.previousButtonDisabled = true;
    //         props.startIndex = 10;
    //         props.query = 'something';
    //         props.bot = true;
    //     });

    //     it('renders something', () => {
    //         let element = searchPagination().find('li');
    //         expect(element.get(0).props.children.props.children[0]).toBe("← Prev ");
    //         expect(element.get(0).props.children.props.name).toBe('prev');
    //         expect(element.get(0).props.children.props.disabled).toBe(true);
    //         expect(element.get(1).props.children.props.children[0]).toBe("Results up to ");
    //         expect(element.get(1).props.children.props.children[1]).toBe(props.startIndex);
    //         expect(element.get(1).props.children.props.href).toBe('#top');
    //         expect(element.get(1).props.children.props.disabled).toBe(false);
    //         expect(element.get(2).props.children.props.children[0]).toBe("Next  ");
    //         expect(element.get(2).props.children.props.children[2]).toBe(" →");
    //         expect(element.get(2).props.children.props.name).toBe('next');
    //         expect(element.get(2).props.children.props.disabled).toBe(false);
    //     });
    // });


    it('should render correctly', () => {
        expect(searchPagination()).toMatchSnapshot();
    });

})