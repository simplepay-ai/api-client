export default class ValidationError<T> extends Error {
    constructor(public errors: Partial<T>) {
        super('Validation error');
        this.name = this.constructor.name;
    }
}
