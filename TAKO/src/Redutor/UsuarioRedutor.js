export const InitialState = {
    avatar: '',
    appointments:[]
};

export const UsuarioRedutor = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar };
        break;
        default:
            return state;

    }
}