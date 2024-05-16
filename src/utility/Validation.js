const emailRegex =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateRegister = (data) => {
    const errors = {};
    const { firstName, lastName, businessName, workEmail, password } = data;
    if (!firstName?.trim()) {
        errors.firstName = "This field is required";
    }
    if (!lastName?.trim()) {
        errors.lastName = "This field is required";
    }
    if (!businessName?.trim()) {
        errors.businessName = "This field is required";
    }
    if (!workEmail?.trim()) {
        errors.workEmail = "This field is required";
    } else if (!emailRegex.test(workEmail?.trim())) {
        errors.workEmail = "Please add valid email address";
    }
    if (!password?.trim()) {
        errors.password = "This field is required";
    } else if (password?.length < 12) {
        console.log('password?.length: ', password?.length);
        errors.password = "Password must be at least 12 characters";
    }
    return errors;
};

export const validateCode = (data) => {
    const errors = {};
    const { enterCode } = data;
    if (!enterCode?.trim()) {
        errors.enterCode = "This field is required";
    }
    return errors;
};

export const validateResetPassword = (data) => {
    const errors = {};
    const { email } = data;
    if (!email?.trim()) {
        errors.email = "This field is required";
    } else if (!emailRegex.test(email?.trim())) {
        errors.email = "Please add valid email address";
    }
    return errors;
};
export const validateLogin = (data) => {
    const errors = {};
    const { email, password } = data;
    if (!email?.trim()) {
        errors.email = "This field is required";
    } else if (!emailRegex.test(email?.trim())) {
        errors.email = "Please add valid email address";
    }
    if (!password?.trim()) {
        errors.password = "This field is required";
    }
    return errors;
};