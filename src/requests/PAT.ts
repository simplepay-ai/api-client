import { PATScope } from '../models';

export type PATCreateRequest = {
    /**
     * Token name
     *
     * @format ASCII
     * @maxLength 255
     */
    name: string;

    /**
     * Token scopes
     */
    scopes: PATScope[];
};

export type PATCreateErrors = {
    name?: 'required' | 'ascii' | 'max';
    scopes?: 'required';
};
