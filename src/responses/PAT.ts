export type PATCreateErrors = {
    name?: 'required' | 'ascii' | 'max';
    scopes?: 'required';
};
