const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateStudentRegisterInput = (data) => {
    let errors = {}
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.department = !isEmpty(data.department) ? data.department : '';
    data.section = !isEmpty(data.section) ? data.section : '';
    data.dob = !isEmpty(data.dob) ? data.dob : '';
    data.year = !isEmpty(data.year) ? data.year : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.contactNumber = !isEmpty(data.contactNumber) ? data.contactNumber : '';
    data.fName = !isEmpty(data.fName) ? data.fName : '';
    data.fcontact = !isEmpty(data.fcontact) ? data.fcontact : '';
    data.aadharCard = !isEmpty(data.aadharCard) ? data.aadharCard : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }


    if (Validator.isEmpty(data.department)) {
        errors.department = 'Department field is required';
    }

    if (Validator.isEmpty(data.year)) {
        errors.year = 'Year field is required';
    }

    if (Validator.isEmpty(data.section)) {
        errors.section = 'Section field is required';
    }

    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'DOB field is required';
    }
    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'This field is required';
    }
    if (Validator.isEmpty(data.contactNumber)) {
        errors.contactNumber = 'This field is required';
    }
    if (Validator.isEmpty(data.fName)) {
        errors.fName = 'This field is required';
    }
    if (Validator.isEmpty(data.fcontact)) {
        errors.fcontact = 'This field is required';
    }
    if (Validator.isEmpty(data.aadharCard)) {
        errors.aadharCard = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateStudentRegisterInput