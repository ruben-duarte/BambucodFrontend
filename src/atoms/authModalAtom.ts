import {atom} from 'recoil';

type AuthModalState = {
    isopen: boolean;
    type: 'login' | 'register' | 'forgotPassword';
};

const initialAuthModalState: AuthModalState = {
    isopen: false,
    type: 'login',
}

export const AuthModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: initialAuthModalState,
})