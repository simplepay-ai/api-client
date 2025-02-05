export default interface UserProfile {
    /**
     * Profile name (title)
     *
     * @example 'Crypto trader, influencer'
     */
    name: string | null;

    /**
     * Profile description (bio)
     *
     * @example 'Experienced crypto trader specializing in market analysis, DeFi strategies, and risk management. Passionate about leveraging blockchain technology to capitalize on emerging trends and maximize returns.'
     */
    description: string | null;

    /**
     * Profile image URL
     *
     * @format URL
     * @example 'https://example.com/image.webp'
     */
    image: string | null;

    /**
     * Username
     *
     * @example 'john_doe'
     */
    username: string | null;

    /**
     * Username in Telegram (without starting `@`)
     *
     * @example 'john_doe'
     */
    usernameTelegram: string | null;

    /**
     * Username in X (without starting `@`)
     *
     * @example 'john_doe'
     */
    usernameX: string | null;

    /**
     * URL of user's website
     *
     * @format URL
     * @example 'https://example.com'
     */
    websiteUrl: string | null;
}
