export class ToysMemory{
    constructor(){
        this.toys = [];
    };

    get(){
        return this.toys;
    };

    create(toyInfo){
        this.toys.push(toyInfo);
        return "juguete creado";
    };

    delete(id){
        const newToys = this.toys.filter(toy=>toy.id !== id);
        this.toys = newToys;
        return "juguete eliminado";
    };
};