import * as Yup from 'yup';

const validationSearch = Yup.object().shape({
    query: Yup
        .string()
        .trim()
        .required('Enter something.'),
    type: Yup
        .string()
        .required('You must select the type.'),
})

export {validationSearch}

