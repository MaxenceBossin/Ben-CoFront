export class Declaration {

    constructor(
        public id: number|null,
        public dumpster_id_id: number,
        public fk_user_id_id: number,
        public fk_admin_id_id: number,
        public image_src: string,
        public content: string,
        public title: string
      ) {  }
 
}
