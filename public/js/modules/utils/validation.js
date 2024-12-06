export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validateRequired = (value) => {
    return value !== null && value !== undefined && value.trim() !== '';
};

export const validateLength = (value, min, max) => {
    const length = value.trim().length;
    return length >= min && length <= max;
};