export function validationsToRules(validations) {
    return {
        required: {
            value: true,
            message: 'This field is required'
        },
        ...validations
    }
}