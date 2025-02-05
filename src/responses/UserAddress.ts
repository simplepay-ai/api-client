export type UserAddressCreateErrors = {
    name?: 'required' | 'ascii' | 'max';
    address?: 'required' | 'alphanum' | 'invalid';
    type?: 'required' | 'oneof';
};

export type UserAddressUpdateErrors = {
    name?: 'ascii' | 'max';
};
