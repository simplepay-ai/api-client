export type UserProfileUpdateErrors = {
    name?: 'ascii' | 'max';
    description?: 'ascii' | 'max';
    image?: 'ascii' | 'max' | 'invalid';
    username?: 'alphanum' | 'max' | 'taken';
    usernameTelegram?: 'username_telegram';
    usernameX?: 'username_x';
    websiteUrl?: 'http_url' | 'max';
};
