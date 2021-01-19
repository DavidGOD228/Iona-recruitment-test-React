export enum PayloadTypes {
    ONCHANGE = 'ON_CHANGE',
    CLEARSTATE = 'CLEAR_STATE',
}

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        };
};