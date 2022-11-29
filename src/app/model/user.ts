
export class User {
    id:         number;
    email:      string;
    roles:      string;
    password:   string;
    first_name: string | null;
    last_name:  string | null;
    token:      string | null;
    points:     number | null;

    constructor(
        id?:         number,
        email?:      string,
        roles?:      string,
        password?:   string,
        first_name?: string | null,
        last_name?:  string | null,
        token?:      string | null,
        points?:     number | null,

    )
    {
        this.id         = id         == undefined ?  0          : id;
        this.email      = email      == undefined ? ''          : email;
        this.roles      = roles      == undefined ? 'ROLE_USER' : roles;
        this.password   = password   == undefined ? ''          : password;
        this.first_name = first_name == undefined ? null        : first_name;
        this.last_name  = last_name  == undefined ? null        : last_name;
        this.token      = token      == undefined ? null        : token;
        this.points     = points     == undefined ? null        : points;
    }

}

