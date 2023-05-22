import { atom } from "recoil";

/*
The interface is going to represent the properties that our auth modal atom is going
to have . This is purely a typescript thing & will enable me with the power of using 
types & interfaces with typescript

Reason I didn't make view: "string"; which would also work is bcz I decided to be more specific
that just simply saying string. This is bcz the modal is only going to have predefined set of strings
| => pipe operator

Here I've created a variable of defaultModalState which is of type AuthModalState
It will now know what parameters to expect bcz it is specified in our interface

at first the default will put as false so that it doesn't spin up when our application opens up
*/

export interface AuthModalState {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
    open: false,
    view: "login"
}

/*
Creating the atom itself 
A key is a parameter required by recoil & it's basically just a unique identifier
for this specific atom.
This is just so you don't have conflicting state
The default represents our initial value of state for this atom<AuthModalState> particular atom
This is similar to the useState hook where you just pass it a default initial value as an argument
*/

export const authModalState = atom<AuthModalState>({
    key: "authModalState",
    default: defaultModalState
})