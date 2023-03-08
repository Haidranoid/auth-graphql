export interface Event {
    target: {
        value: string
    }
}

const e: Event = {
    target: {
        value: ''
    }
}

const inputName = e.target.value;

if (inputName){
    if (inputName.split(' ').length < 3){
        throw new Error('You have to insert your full name')
    } else {
        // work with the value
    }
}