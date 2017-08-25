export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string
    ) { }
}

// Only email and password will be used when logging in so firstname and lastname will be optional
// and used when signing up instead.