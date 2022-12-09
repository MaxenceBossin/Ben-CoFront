
export class Support {
    id:         number;
    dumpsterId: number|null;
    fkUserId:   number;
    category:   string;
    title:      string;
    content:    string | null;
   
    constructor(
        id?:         number,
        dumpsterId?: number,
        fkUserId?:   number,
        category?:   string,
        title?:   string,
        content?:   string,
        

    )
    {
        this.id         = id         == undefined ?  0  : id;
        this.dumpsterId = dumpsterId == undefined ?  0  : dumpsterId;
        this.fkUserId   = fkUserId   == undefined ?  0  : fkUserId;
        this.category   = category   == undefined ?  '' : category;
        this.title      = title      == undefined ?  '' : title;
        this.content    = content    == undefined ?  '' : content;

    }

}

