import { makeObservable, makeAutoObservable, observable, computed, action } from "mobx";

interface TodosList {
    id: string;
    label: string;
    done: boolean;
}

const k = {
    id: 'csdfcsdf',
    label: 'kek',
    done: true
}

class Todos {
    @observable todosList: Array<TodosList> = [k];
    @observable name: string = 'kakashka';

    @action
    changeList = () :void => {
        this.name = 'nananana';
        console.log(this.name)
    }

    @computed getList() {
        return this.todosList[0].label;
    }
}

export default new Todos();