

export class RefState {
    public refs: any[] = [];
};

export enum RefsActionType {
    AddRef = "AddRef"
};

export interface RefsAction {
    type: RefsActionType;
    payload: any;
};


export function addReftAction(ref: any): RefsAction {
    return { type: RefsActionType.AddRef, payload: ref };
};

export function refReducer(currentState = new RefState(), action: RefsAction): RefState {


    const newState = { ...currentState };

    switch (action.type) {

        case RefsActionType.AddRef:
            newState.refs.push(action.payload); 
            break;

    }

    return newState;
}